import { GlobalData } from "@common/GlobalData";

enum MapChangeType {
  // whenever a value inside of the object changed
  SubValueChanged,
  // whenever a new key was added, or overwrote
  Add,
  // whenever a key was removed from the map
  Remove,
  // whenever reset() was called on the map
  Reset
}

type MapChanges<K, V> = [MapChangeType, K?, V?] | [MapChangeType.SubValueChanged, K, string, any];

declare function msgpack_pack(data: any): Buffer;

type ChangeListener = () => void;

/**
  * not ready to be used just thoughts right now
  */
export class NetworkedMap<K, V> extends Map<K, V> {
  #syncName: string;
  #queuedChanges: MapChanges<K,V>[] = [];
  #changeListeners: Map<K, ChangeListener[]> = new Map();
  #subscribers: number[] = [];

  constructor(syncName: string, initialValue?: [K, V][]) {
    super(initialValue);
    this.#syncName = syncName;


    GlobalData.GlobalTicks.push(this.#networkTick);

    // if we don't have a network tick then we want to register it.
    if (!GlobalData.NetworkTick) {
      GlobalData.NetworkTick = setTick(() => {
        for (const networkTick of GlobalData.GlobalTicks) {
          networkTick();
        }
      })
    }
  }

  listenForChange(key: K, fn: ChangeListener) {
    const listener = this.#changeListeners.get(key);
    listener ? listener.push(fn) : this.#changeListeners.set(key, [fn]);
  }

  #pushChangeForListener(key: K, value: V) {

  }

  set(key: K, value: V): this {
    let v = value;

    // if we're an object
    if (value instanceof Object) {

      // define `this` so we can use it in the internal scope without breaking
      // any rules
      const curMap = this;

      // apply a proxy around any changes so if the fields
      const objectChangeHandler: ProxyHandler<any> = {
        get(target, prop, reciever) {
          return Reflect.get(target, prop, reciever);
        },
        set(target, p, newValue, receiver) {
          const success = Reflect.set(target, p, newValue, receiver);
          if (success) {
            curMap.#pushChangeForListener(key, target);
            curMap.#queuedChanges.push([MapChangeType.SubValueChanged, key, p as string, newValue]);
          }
          return success;
        },
      }
      v = new Proxy(v, objectChangeHandler);
    }
    super.set(key, v);
    this.#pushChangeForListener(key, v);
    this.#queuedChanges.push([MapChangeType.Add, key, v]);
    return this;
  }

  clear(): void {
    // if we're clearing our map then we want to remove all queued changes and
    // just push a reset
    this.#queuedChanges = [];
    this.#queuedChanges.push([MapChangeType.Reset]);
    super.clear()
  }

  delete(key: K): boolean {
    this.#queuedChanges.push([MapChangeType.Remove, key]);
    return super.delete(key);
  }

  #networkTick() {
    const packed_vars = msgpack_pack(this.#queuedChanges);
    this.#queuedChanges = [];
  }

  get [Symbol.toStringTag](): string {
    return 'NetworkedMap';
  };
}

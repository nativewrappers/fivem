import { Event } from "@common/decors/Events";
import { GlobalData } from "@common/GlobalData";
import type { Buffer } from "buffer";

enum MapChangeType {
  // whenever a value inside of the object changed
  SubValueChanged,
  // whenever a new key was added, or overwrote
  Add,
  // whenever a key was removed from the map
  Remove,
  // whenever reset() was called on the map
  Reset,
}

type MapChanges<K, V> =
  | [MapChangeType, K?, V?]
  | [MapChangeType.SubValueChanged, K, string, any];

declare function msgpack_pack(data: any): Buffer;

type ChangeListener<V> = (value: V) => void;

/**
 * not ready to be used just thoughts right now
 */
export class NetworkedMap<K, V> extends Map<K, V> {
  #syncName: string;
  #queuedChanges: MapChanges<K, V>[] = [];
  #changeListeners: Map<K, ChangeListener<V>[]> = new Map();
  #subscribers: Set<number> = new Set();

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
      });
    }
  }

  // handles removing the player from the map whenever they're dropped
  @Event("playerDropped")
  private onPlayerDropped() {
    this.removeSubscriber(source);
  }

  /*
   * Adds a new subscriber to the map, if the
   */
  addSubscriber(sub: number) {
    this.#subscribers.add(sub);
  }

  removeSubscriber(sub: number): boolean {
    return this.#subscribers.delete(sub);
  }

  /*
   * Listens for the change on the specified key, it will get the resulting
   * value on the change
   */
  listenForChange(key: K, fn: ChangeListener<V>) {
    const listener = this.#changeListeners.get(key);
    listener ? listener.push(fn) : this.#changeListeners.set(key, [fn]);
  }

  #triggerEventForSubscribers(data: any) {
    const packed_data = msgpack_pack(data);
    for (const sub of this.#subscribers) {
      TriggerClientEventInternal(
        `${this.#syncName}:syncChanges`,
        sub as any,
        packed_data as any,
        packed_data.length,
      );
    }
  }

  #pushChangeForListener(key: K, value: V) {
    const listener = this.#changeListeners.get(key);
    if (!listener) return;
    for (const ln of listener) {
      ln(value);
    }
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
            curMap.#queuedChanges.push([
              MapChangeType.SubValueChanged,
              key,
              p as string,
              newValue,
            ]);
          }
          return success;
        },
      };
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
    super.clear();
  }

  delete(key: K): boolean {
    this.#queuedChanges.push([MapChangeType.Remove, key]);
    return super.delete(key);
  }

  #networkTick() {
    this.#triggerEventForSubscribers(this.#queuedChanges);
    this.#queuedChanges = [];
  }

  get [Symbol.toStringTag](): string {
    return "NetworkedMap";
  }
}

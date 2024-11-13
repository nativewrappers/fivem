import { Ped, Prop, Vehicle, Entity } from "./entities";
import { Player } from "./entities/Player";
import { ClassTypes } from "../common/utils/ClassTypes";
import { Vector2, Vector3, Vector4 } from "./utils";

export type NetEvent = (player: Player, ...args: any[]) => void;
export type LocalEvent = (...args: any[]) => void;

const getClassFromArguments = (...args: any[]): any[] => {
  const newArgs: any[] = [];

  for (const arg of args) {
    if (!arg.type) {
      newArgs.push(arg);
      continue;
    }
    switch (arg.type) {
      case ClassTypes.Vector2: {
        newArgs.push(Vector2.fromObject(arg));
        continue;
      }
      case ClassTypes.Vector3: {
        newArgs.push(Vector3.fromObject(arg));
        continue;
      }
      case ClassTypes.Vector4: {
        newArgs.push(Vector4.fromObject(arg));
        continue;
      }
      case ClassTypes.Ped: {
        newArgs.push(Ped.fromNetworkId(arg.handle));
        continue;
      }
      case ClassTypes.Player: {
        newArgs.push(new Player(arg.source));
        continue;
      }
      case ClassTypes.Prop: {
        newArgs.push(Prop.fromNetworkId(arg.handle));
        continue;
      }
      case ClassTypes.Vehicle: {
        newArgs.push(Vehicle.fromNetworkId(arg.netId));
        continue;
      }
      case ClassTypes.Entity: {
        newArgs.push(Entity.fromNetworkId(arg.netId));
        continue;
      }
      default: {
        newArgs.push(arg);
      }
    }
  }
  return newArgs;
};

export class Events {
  public static cancel(): void {
    CancelEvent();
  }

  public static wasCanceled(): boolean {
    return WasEventCanceled();
  }

  public static get InvokingResource(): string {
    return GetInvokingResource();
  }

  /**
   * An onNet wrapper that properly converts the type into the correct type
   */
  static onNet = (eventName: string, event: NetEvent) => {
    onNet(eventName, (...args: any[]) => {
      const ply = new Player(source);

      event(ply, ...getClassFromArguments(...args));
    });
  };

  /**
   * An on wrapper that properly converts the classes
   */
  static on = (eventName: string, event: LocalEvent) => {
    on(eventName, (...args: any[]) => {
      event(...getClassFromArguments(...args));
    });
  };
}

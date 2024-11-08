enum DecoratorType {
  Event,
  NetEvent,
  NuiEvent,
  Export,
  ConVar
}

export enum ConVarType {
  String,
  Integer,
  Float,
  Boolean
}

type ConVarDefault = number | boolean | undefined;

type OptionalData = {
  // if the type is a floating point number for convar instead of just a regular
  // number
  is_floating_point?: boolean;
  // if this is NetEvent this will only allow the event to be triggered from
  // remote, `emit` will not be able to trigger it.
  remote_only?: boolean;
}

type DecoratorData = {
  name: string;
  key: string;
  type: DecoratorType;
} & OptionalData;

const update_decor_data = (
  target: any,
  name: string,
  key: string,
  type: DecoratorType,
  options?: OptionalData
) => {
  Reflect.defineProperty(target, "native_decor", { value: [] });

  const data = Reflect.get(target, "native_decor") as DecoratorData[];
  data.push({
    name,
    key,
    type,
    ...options
  });
};

export const Exports = (exportName: string) => {
  return function (target: any, key: string): void {
    update_decor_data(target, exportName, key, DecoratorType.Export);
  };
};

export const Event = (eventName: string) => {
  return function (target: any, key: string): void {
    update_decor_data(target, eventName, key, DecoratorType.Event);
  };
};

export const NetEvent = (eventName: string, remoteOnly = false) => {
  return function (target: any, key: string): void {
    update_decor_data(target, eventName, key, DecoratorType.NetEvent, { remote_only: remoteOnly });
  };
};

export const NuiEvent = (eventName: string) => {
  return function (target: any, key: string): void {
    update_decor_data(target, eventName, key, DecoratorType.NuiEvent);
  };
};

type ConVarFunction = (convarName: string, defaultValue: any) => any;

const get_convar_fn = (con_var_type: ConVarType): ConVarFunction => {
  switch (con_var_type) {
    case ConVarType.String: return GetConvar;
    case ConVarType.Integer: return GetConvarInt;
    case ConVarType.Float: return GetConvarFloat;
    case ConVarType.Boolean: return GetConvarBool;
  }

  // never guess people wont manage to hit this
  throw new Error("Got invalid ConVarType");
}


// NOTE: The default value of the value this is set on will be used as
// `default_value` for gets
export const ConVar = (name: string, is_floating_point?: boolean) => {
  return function (target: any, key: string): void {
    update_decor_data(target, name, key, DecoratorType.NuiEvent, { is_floating_point });

  };
};

export const CfxDecors = function () {
  return function <T extends { new(...args: any[]): any }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);

        Reflect.defineProperty(this, "native_decor", { value: [] });

        const events = Reflect.get(this, "native_decor") as Array<DecoratorData>;

        for (const { name, key, type, remote_only, is_floating_point } of events) {
          switch (type) {
            case DecoratorType.NuiEvent: {
              RegisterNuiCallback(name, (...args: any[]) => {
                this[key](...args);
              });
              continue;
            }
            case DecoratorType.Event: {
              on(name, (...args: any[]) => {
                this[key](...args);
              });
              continue;
            }
            case DecoratorType.NetEvent: {
              onNet(name, (...args: any[]) => {
                CLIENT: {
                  if (remote_only && source !== 65535) {
                    return;
                  }
                }
                this[key](...args);
              });
              continue;
            }
            case DecoratorType.Export: {
              exports(name, (...args: any[]) => {
                return this[key](...args);
              });
            }

            case DecoratorType.ConVar: {
              const default_value = this[key];
              const default_type = typeof default_value;
              let con_var_type = ConVarType.String
              if (default_type == "number") {
                if (is_floating_point) {
                  con_var_type = ConVarType.Float;
                } else {
                  con_var_type = ConVarType.Integer;
                }
              } else if (default_type == "boolean") {
                con_var_type = ConVarType.Boolean;
              }
              const con_var_fn = get_convar_fn(con_var_type!);
              Reflect.set(this, key, con_var_fn(name, default_value))
              AddConvarChangeListener(name, (con_var_name: string) => {
                Reflect.set(this, key, con_var_fn(con_var_name, default_value))
              })
            }
          }
        }
      }
    };
  };
};


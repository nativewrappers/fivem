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


export function Exports(exportName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    function replacementMethod(this: any, ...args: any[]) {
      const t = this;

      exports(exportName, (...args: any[]) => {
        return originalMethod.call(t, ...args);
      });
    }

    return replacementMethod;
  }
}


export function Event(eventName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    context.addInitializer(function () {
      const t = this;
      on(eventName, (...args: any[]) => {
        return originalMethod.call(t, ...args);
      });
    })
  }
}

export function NetEvent(eventName: string, remoteOnly = false) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    context.addInitializer(function () {
      const t = this;
      onNet(eventName, (...args: any[]) => {
        CLIENT: {
          if (remoteOnly && source !== 65535) {
            return;
          }
        }
        return originalMethod.call(t, ...args);
      });
    })
  }
}

export function NuiEvent(eventName: string) {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    context.addInitializer(function () {
      const t = this;

      RegisterNuiCallback(eventName, (...args: any[]) => {
        return originalMethod.call(t, ...args);
      });
    })
  }
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


export function ConVar(name: string, is_floating_point?: boolean) {
  return function actualDecorator(_initialValue: any, context: ClassMethodDecoratorContext) {
    context.addInitializer(function () {
      const t = this as any;

      const default_value = t[context.name];
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
      Reflect.set(t, context.name, con_var_fn(name, default_value))
      AddConvarChangeListener(name, (con_var_name: string) => {
        Reflect.set(t, context.name, con_var_fn(con_var_name, default_value))
      })
    })
  }
};

export function SetTick() {
  return function actualDecorator(originalMethod: any, context: ClassMethodDecoratorContext) {
    context.addInitializer(function () {
      const t = this;
      setTick(async () => {
        await originalMethod.call(t);
      })
    })
  }
}

export enum ConVarType {
  String,
  Integer,
  Float,
  Boolean,
}

// TODO: Have a way to clean all of this up (maybe hook Symbol.disposable
// somehow?)

/*
 * Registers the export call for {exportName} to this method
 */
export function Exports(exportName: string) {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext,
  ) {
    if (context.private) {
      throw new Error(
        "Exports does not work on private methods, please mark the method as public",
      );
    }
    function replacementMethod(this: any, ...args: any[]): any {
      const t = this;

      exports(exportName, (...args: any[]) => {
        return originalMethod.call(t, ...args);
      });
    }

    return replacementMethod;
  };
}

/*
 * Registers the Event call for {eventName} to this method
 */
export function Event(eventName: string) {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext,
  ) {
    if (context.private) {
      throw new Error(
        "Event does not work on private methods, please mark the method as public",
      );
    }
    context.addInitializer(function () {
      const t = this;
      on(eventName, (...args: any[]) => {
        return originalMethod.call(t, ...args);
      });
    });
  };
}

/*
 * Registers the Net Event call for {eventName} to this method
 */
export function NetEvent(eventName: string, remoteOnly = false) {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext,
  ) {
    if (context.private) {
      throw new Error(
        "NetEvent does not work on private methods, please mark the method as public",
      );
    }
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
    });
  };
}

/*
 * Registers the NUI Event call for {eventName} to this method, the function signature
 * should be (data: unknown, cb: (data?: any) => void) => void
 * You shoud always execute `cb` with '' if you don't want to send data back to
 * the UI, otherwise you'll cause a network error for the `fetch` request
 */
export function NuiEvent(eventName: string) {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext,
  ) {
    if (context.private) {
      throw new Error(
        "NuiEvent does not work on private methods, please mark the method as public",
      );
    }
    context.addInitializer(function () {
      const t = this;

      RegisterNuiCallback(eventName, (...args: any[]) => {
        return originalMethod.call(t, ...args);
      });
    });
  };
}

type ConVarFunction = (convarName: string, defaultValue: any) => any;

const get_convar_fn = (con_var_type: ConVarType): ConVarFunction => {
  switch (con_var_type) {
    case ConVarType.String:
      return GetConvar;
    case ConVarType.Integer:
      return GetConvarInt;
    case ConVarType.Float:
      return GetConvarFloat;
    case ConVarType.Boolean:
      return GetConvarBool;
  }

  // never guess people wont manage to hit this
  throw new Error("Got invalid ConVarType");
};

type DeserializeFn<T> = (data: T) => unknown;

/*
 * Gets the specified `ConVar`s value, do note that if you *expect* the convar
 * to be a float you should explicitly set is_floating_point, otherwise some
 * bundlers will remove the float
 */
export function ConVar<T>(
  name: string,
  is_floating_point?: boolean,
  deserialize?: DeserializeFn<T>,
) {
  // the implementation shows that this will be _initialValue, but it doesn't
  // seem to actually be???
  return function actualDecorator(
    _initialValue: any,
    context: ClassFieldDecoratorContext,
    ...args: any[]
  ) {
    if (context.private) {
      throw new Error(
        "ConVar does not work on private types, please mark the field as public",
      );
    }
    context.addInitializer(function () {
      const t = this as any;

      const default_value = Reflect.get(t, context.name);
      const default_type = typeof default_value;
      let con_var_type: ConVarType | null = null;
      if (default_type == "number") {
        if (is_floating_point || !Number.isInteger(default_value)) {
          con_var_type = ConVarType.Float;
        } else {
          con_var_type = ConVarType.Integer;
        }
      } else if (default_type == "boolean") {
        con_var_type = ConVarType.Boolean;
      } else if (default_value == "string") {
        con_var_type = ConVarType.String;
      }

      // if we're not set that means our default value was not valid, and likely
      // undefined (which we should just get rid of) or an object, and the
      // caller should send a deserialize function to work with.
      if (!deserialize && con_var_type === null) {
        throw new Error(
          "You should provide a deserialize function if you want to convert this to an object type",
        );
      }

      // if we got past our previous check then we're going to take the data as
      // a string and pass it to the deserialize function
      if (con_var_type === null) {
        con_var_type = ConVarType.String;
      }

      const con_var_fn = get_convar_fn(con_var_type!);

      // nice and easy wrapper
      const get_convar_value = (): unknown => {
        const data = con_var_fn(name, default_value);
        return deserialize ? deserialize(data) : data;
      };

      Reflect.set(t, context.name, get_convar_value());
      AddConvarChangeListener(name, (con_var_name: string) => {
        Reflect.set(t, context.name, get_convar_value());
      });
    });
  };
}

/*
 * Gets called per server/client tick, this is asyncronous though, if you await
 * in it, it will not be called until whatever was being awaited resolves.
 */
export function SetTick() {
  return function actualDecorator(
    originalMethod: any,
    context: ClassMethodDecoratorContext,
  ) {
    if (context.private) {
      throw new Error(
        "SetTick does not work on private types, please mark the field as public",
      );
    }
    context.addInitializer(function () {
      const t = this;
      setTick(async () => {
        await originalMethod.call(t);
      });
    });
  };
}

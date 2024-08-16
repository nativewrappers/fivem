[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Scaleform

# Class: Scaleform

Scaleforms will automatically load when calling any of the render functions.

Example:

```typescript
import { Scaleform } from '@nativewrappers/client/ui';

const scaleform = new Cfx.Scaleform("MIDSIZED_MESSAGE");

scaleform.callFunction("SHOW_MIDSIZED_MESSAGE", ["Title", "Message"]);

setTick(() => {
 await scaleform.render2D();
});
```

## Constructors

### new Scaleform()

```ts
new Scaleform(name): Scaleform
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Scaleform`](Scaleform.md)

#### Defined in

[src/client/ui/Scaleform.ts:44](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L44)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `handle` | `protected` | `number` | `undefined` | [src/client/ui/Scaleform.ts:40](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L40) |
| `loaded` | `protected` | `boolean` | `false` | [src/client/ui/Scaleform.ts:42](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L42) |
| `name` | `protected` | `string` | `undefined` | [src/client/ui/Scaleform.ts:41](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L41) |

## Accessors

### Handle

```ts
get Handle(): number
```

Get the handle of the scaleform.

#### Returns

`number`

#### Defined in

[src/client/ui/Scaleform.ts:52](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L52)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

Get whether the scaleform is loaded.

#### Returns

`boolean`

#### Defined in

[src/client/ui/Scaleform.ts:66](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L66)

***

### IsValid

```ts
get IsValid(): boolean
```

Get whether the handle is a valid handle.

#### Returns

`boolean`

#### Defined in

[src/client/ui/Scaleform.ts:59](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L59)

## Methods

### callFunction()

```ts
callFunction(name, ...args): void
```

Call a function on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |
| ...`args` | `unknown`[] | Additional arguments |

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:90](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L90)

***

### callNumberMethod()

```ts
callNumberMethod(
   name, 
   param1, 
   param2, 
   param3, 
   param4, 
   param5): void
```

Calls a number method on the scaleform.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the function |
| `param1` | `number` | `-1.0` |  |
| `param2` | `number` | `-1.0` |  |
| `param3` | `number` | `-1.0` |  |
| `param4` | `number` | `-1.0` |  |
| `param5` | `number` | `-1.0` |  |

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:154](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L154)

***

### callSharedMethod()

```ts
callSharedMethod(
   name, 
   fParam1, 
   fParam2, 
   fParam3, 
   fParam4, 
   fParam5, 
   sParam1, 
   sParam2, 
   sParam3, 
   sParam4, 
   sParam5): void
```

Calls a number & string method on the scaleform.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the function |
| `fParam1` | `number` | `-1.0` |  |
| `fParam2` | `number` | `-1.0` |  |
| `fParam3` | `number` | `-1.0` |  |
| `fParam4` | `number` | `-1.0` |  |
| `fParam5` | `number` | `-1.0` |  |
| `sParam1` | `string` | `''` |  |
| `sParam2` | `string` | `''` |  |
| `sParam3` | `string` | `''` |  |
| `sParam4` | `string` | `''` |  |
| `sParam5` | `string` | `''` |  |

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:180](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L180)

***

### callStringMethod()

```ts
callStringMethod(
   name, 
   param1, 
   param2, 
   param3, 
   param4, 
   param5): void
```

Calls a string method on the scaleform.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `name` | `string` | `undefined` | Name of the function |
| `param1` | `string` | `''` |  |
| `param2` | `string` | `''` |  |
| `param3` | `string` | `''` |  |
| `param4` | `string` | `''` |  |
| `param5` | `string` | `''` |  |

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:133](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L133)

***

### callVoidMethod()

```ts
callVoidMethod(name): void
```

Calls a void method on the scaleform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Name of the function |

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:119](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L119)

***

### dispose()

```ts
dispose(): void
```

Dispose the scaleform allowing the GTA engine to free memory when wanted.

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:77](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L77)

***

### load()

```ts
load(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[src/client/ui/Scaleform.ts:322](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L322)

***

### render2D()

```ts
render2D(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/ui/Scaleform.ts:232](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L232)

***

### render2DScreenSpace()

```ts
render2DScreenSpace(location, size): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `location` | [`PointF`](PointF.md) |
| `size` | [`PointF`](PointF.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/ui/Scaleform.ts:243](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L243)

***

### render3D()

```ts
render3D(
   position, 
   rotation, 
scale): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |
| `scale` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/ui/Scaleform.ts:270](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L270)

***

### render3DAdditive()

```ts
render3DAdditive(
   position, 
   rotation, 
scale): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `rotation` | [`Vector3`](Vector3.md) |
| `scale` | [`Vector3`](Vector3.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/ui/Scaleform.ts:296](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L296)

***

### setDuration()

```ts
setDuration(duration): void
```

Sets a duration the scaleform should be shown.
Useful for showing a scaleform for a known amount of time, such as messages.

This only works for any scaleform using [`render2D`](Scaleform.md#render2d);

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `duration` | `number` | Duration in milliseconds |

#### Returns

`void`

#### Defined in

[src/client/ui/Scaleform.ts:217](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L217)

***

### render2DMasked()

```ts
static render2DMasked(scaleform1, scaleform2): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `scaleform1` | [`Scaleform`](Scaleform.md) |
| `scaleform2` | [`Scaleform`](Scaleform.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/ui/Scaleform.ts:21](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Scaleform.ts#L21)

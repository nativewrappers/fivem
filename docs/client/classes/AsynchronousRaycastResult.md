[@nativewrappers/fivem](../../README.md) / [client](../README.md) / AsynchronousRaycastResult

# Class: AsynchronousRaycastResult

## Extends

- `RaycastResult`

## Constructors

### new AsynchronousRaycastResult()

```ts
new AsynchronousRaycastResult(handle): AsynchronousRaycastResult
```

Create a RaycastResult object that gets the results from a StartShapeTestRay()

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `handle` | `number` | The handle returned from StartShapeTestRay() |

#### Returns

[`AsynchronousRaycastResult`](AsynchronousRaycastResult.md)

#### Inherited from

`RaycastResult.constructor`

#### Defined in

[src/client/Raycast.ts:105](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L105)

## Accessors

### DidHit

```ts
get DidHit(): boolean
```

Whether we hit anything.

#### Returns

`boolean`

#### Inherited from

`RaycastResult.DidHit`

#### Defined in

[src/client/Raycast.ts:35](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L35)

***

### DidHitEntity

```ts
get DidHitEntity(): boolean
```

Whether the entity hit exists.

#### Returns

`boolean`

#### Inherited from

`RaycastResult.DidHitEntity`

#### Defined in

[src/client/Raycast.ts:42](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L42)

***

### HasResolved

```ts
get HasResolved(): boolean
```

NOTE: These will not be updated unless polled by `resolve` or the shape
test is synchronous

#### Returns

`boolean`

if the raycast has been marked as ready by the engine

#### Inherited from

`RaycastResult.HasResolved`

#### Defined in

[src/client/Raycast.ts:72](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L72)

***

### HitEntity

```ts
get HitEntity(): null | Ped | Vehicle | Prop
```

Return the entity that was hit.

#### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

#### Inherited from

`RaycastResult.HitEntity`

#### Defined in

[src/client/Raycast.ts:14](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L14)

***

### HitPosition

```ts
get HitPosition(): Vector3
```

Get the position of the entity that was hit.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`RaycastResult.HitPosition`

#### Defined in

[src/client/Raycast.ts:21](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L21)

***

### Material

```ts
get Material(): MaterialHash
```

Material type that was hit.

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Inherited from

`RaycastResult.Material`

#### Defined in

[src/client/Raycast.ts:49](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L49)

***

### Result

```ts
get Result(): number
```

Raycast result's handle.

#### Returns

`number`

#### Inherited from

`RaycastResult.Result`

#### Defined in

[src/client/Raycast.ts:56](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L56)

***

### SurfaceNormal

```ts
get SurfaceNormal(): Vector3
```

Return the vector perpendicular to the tangent plane.

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`RaycastResult.SurfaceNormal`

#### Defined in

[src/client/Raycast.ts:28](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L28)

***

### WasDiscarded

```ts
get WasDiscarded(): boolean
```

#### Returns

`boolean`

if the shape test handle was already discarded

#### Inherited from

`RaycastResult.WasDiscarded`

#### Defined in

[src/client/Raycast.ts:63](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L63)

## Methods

### applyShapeTestResults()

```ts
protected applyShapeTestResults(): void
```

#### Returns

`void`

#### Inherited from

`RaycastResult.applyShapeTestResults`

#### Defined in

[src/client/Raycast.ts:76](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L76)

***

### resolve()

```ts
resolve(timeoutInMs): Promise<void>
```

waits until the shape test handle is valid and then sets the expected
values on the RaycastResult

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `timeoutInMs` | `number` | `1000` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/Raycast.ts:130](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/Raycast.ts#L130)

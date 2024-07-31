[@nativewrappers/fivem](../../README.md) / [client](../README.md) / SynchronousRaycastResult

# Class: SynchronousRaycastResult

## Extends

- `RaycastResult`

## Constructors

### new SynchronousRaycastResult()

```ts
new SynchronousRaycastResult(handle): SynchronousRaycastResult
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`SynchronousRaycastResult`](SynchronousRaycastResult.md)

#### Overrides

`RaycastResult.constructor`

#### Defined in

[src/client/Raycast.ts:117](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L117)

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

[src/client/Raycast.ts:35](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L35)

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

[src/client/Raycast.ts:42](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L42)

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

[src/client/Raycast.ts:72](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L72)

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

[src/client/Raycast.ts:14](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L14)

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

[src/client/Raycast.ts:21](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L21)

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

[src/client/Raycast.ts:49](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L49)

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

[src/client/Raycast.ts:56](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L56)

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

[src/client/Raycast.ts:28](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L28)

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

[src/client/Raycast.ts:63](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L63)

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

[src/client/Raycast.ts:76](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/Raycast.ts#L76)

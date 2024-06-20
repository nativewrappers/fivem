[@nativewrappers/fivem](../../README.md) / [client](../README.md) / RaycastResult

# Class: RaycastResult

Class that represents the result of a raycast.

## Constructors

### new RaycastResult()

```ts
new RaycastResult(handle): RaycastResult
```

Create a RaycastResult object that gets the results from a StartShapeTestRay()

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `handle` | `number` | The handle returned from StartShapeTestRay() |

#### Returns

[`RaycastResult`](RaycastResult.md)

#### Source

[src/client/Raycast.ts:74](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L74)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `entityHandleArg` | `private` | `null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md) |
| `handle` | `private` | `number` |
| `hitPositionArg` | `private` | [`Vector3`](Vector3.md) |
| `hitSomethingArg` | `private` | `boolean` |
| `materialArg` | `private` | [`MaterialHash`](../enumerations/MaterialHash.md) |
| `result` | `private` | `number` |
| `surfaceNormalArg` | `private` | [`Vector3`](Vector3.md) |

## Accessors

### DidHit

```ts
get DidHit(): boolean
```

Whether we hit anything.

#### Returns

`boolean`

#### Source

[src/client/Raycast.ts:34](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L34)

***

### DidHitEntity

```ts
get DidHitEntity(): boolean
```

Whether the entity hit exists.

#### Returns

`boolean`

#### Source

[src/client/Raycast.ts:41](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L41)

***

### HitEntity

```ts
get HitEntity(): null | Ped | Vehicle | Prop
```

Return the entity that was hit.

#### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

#### Source

[src/client/Raycast.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L13)

***

### HitPosition

```ts
get HitPosition(): Vector3
```

Get the position of the entity that was hit.

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/Raycast.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L20)

***

### Material

```ts
get Material(): MaterialHash
```

Material type that was hit.

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Source

[src/client/Raycast.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L48)

***

### Result

```ts
get Result(): number
```

Raycast result's handle.

#### Returns

`number`

#### Source

[src/client/Raycast.ts:55](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L55)

***

### SurfaceNormal

```ts
get SurfaceNormal(): Vector3
```

Return the vector perpendicular to the tangent plane.

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/Raycast.ts:27](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Raycast.ts#L27)

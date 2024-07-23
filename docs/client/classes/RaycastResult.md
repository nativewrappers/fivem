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
| ------ | ------ | ------ |
| `handle` | `number` | The handle returned from StartShapeTestRay() |

#### Returns

[`RaycastResult`](RaycastResult.md)

#### Defined in

[src/client/Raycast.ts:74](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L74)

## Accessors

### DidHit

```ts
get DidHit(): boolean
```

Whether we hit anything.

#### Returns

`boolean`

#### Defined in

[src/client/Raycast.ts:34](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L34)

***

### DidHitEntity

```ts
get DidHitEntity(): boolean
```

Whether the entity hit exists.

#### Returns

`boolean`

#### Defined in

[src/client/Raycast.ts:41](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L41)

***

### HitEntity

```ts
get HitEntity(): null | Ped | Vehicle | Prop
```

Return the entity that was hit.

#### Returns

`null` \| [`Ped`](Ped.md) \| [`Vehicle`](Vehicle.md) \| [`Prop`](Prop.md)

#### Defined in

[src/client/Raycast.ts:13](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L13)

***

### HitPosition

```ts
get HitPosition(): Vector3
```

Get the position of the entity that was hit.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/Raycast.ts:20](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L20)

***

### Material

```ts
get Material(): MaterialHash
```

Material type that was hit.

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Defined in

[src/client/Raycast.ts:48](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L48)

***

### Result

```ts
get Result(): number
```

Raycast result's handle.

#### Returns

`number`

#### Defined in

[src/client/Raycast.ts:55](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L55)

***

### SurfaceNormal

```ts
get SurfaceNormal(): Vector3
```

Return the vector perpendicular to the tangent plane.

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/Raycast.ts:27](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Raycast.ts#L27)

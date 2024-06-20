[@nativewrappers/fivem](../../README.md) / [client](../README.md) / PedBone

# Class: PedBone

## Extends

- [`EntityBone`](EntityBone.md)

## Constructors

### new PedBone()

```ts
new PedBone(owner, boneId): PedBone
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Ped`](Ped.md) |
| `boneId` | [`Bone`](../enumerations/Bone.md) |

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBone`](EntityBone.md).[`constructor`](EntityBone.md#constructors)

#### Source

[src/client/models/PedBone.ts:5](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBone.ts#L5)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `index` | `readonly` | `number` | [`EntityBone`](EntityBone.md).`index` |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBone`](EntityBone.md).`owner` |

## Accessors

### Index

```ts
get Index(): number
```

#### Returns

`number`

#### Source

[src/client/models/EntityBone.ts:5](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBone.ts#L5)

***

### IsValid

```ts
get IsValid(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/PedBone.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBone.ts#L9)

***

### Owner

```ts
get Owner(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Source

[src/client/models/EntityBone.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBone.ts#L9)

***

### Position

```ts
get Position(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/EntityBone.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBone.ts#L13)

***

### Rotation

```ts
get Rotation(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/EntityBone.ts:17](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBone.ts#L17)

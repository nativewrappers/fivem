[@nativewrappers/fivem](../../README.md) / [client](../README.md) / PedBoneCollection

# Class: PedBoneCollection

## Extends

- [`EntityBoneCollection`](EntityBoneCollection.md)

## Constructors

### new PedBoneCollection()

```ts
new PedBoneCollection(owner): PedBoneCollection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Ped`](Ped.md) |

#### Returns

[`PedBoneCollection`](PedBoneCollection.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`constructor`](EntityBoneCollection.md#constructors)

#### Source

[src/client/models/PedBoneCollection.ts:4](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBoneCollection.ts#L4)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [`EntityBoneCollection`](EntityBoneCollection.md).`owner` |

## Accessors

### Core

```ts
get Core(): PedBone
```

#### Returns

[`PedBone`](PedBone.md)

#### Source

[src/client/models/PedBoneCollection.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBoneCollection.ts#L8)

***

### LastDamaged

```ts
get LastDamaged(): PedBone
```

#### Returns

[`PedBone`](PedBone.md)

#### Source

[src/client/models/PedBoneCollection.ts:12](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBoneCollection.ts#L12)

## Methods

### clearLastDamaged()

```ts
clearLastDamaged(): void
```

#### Returns

`void`

#### Source

[src/client/models/PedBoneCollection.ts:17](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBoneCollection.ts#L17)

***

### getBone()

```ts
getBone(boneIndex?, boneName?): PedBone
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`PedBone`](PedBone.md)

#### Overrides

[`EntityBoneCollection`](EntityBoneCollection.md).[`getBone`](EntityBoneCollection.md#getbone)

#### Source

[src/client/models/PedBoneCollection.ts:21](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/PedBoneCollection.ts#L21)

***

### hasBone()

```ts
hasBone(name): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[`EntityBoneCollection`](EntityBoneCollection.md).[`hasBone`](EntityBoneCollection.md#hasbone)

#### Source

[src/client/models/EntityBoneCollection.ts:14](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBoneCollection.ts#L14)

[@nativewrappers/fivem](../../README.md) / [client](../README.md) / EntityBoneCollection

# Class: EntityBoneCollection

## Extended by

- [`PedBoneCollection`](PedBoneCollection.md)

## Constructors

### new EntityBoneCollection()

```ts
new EntityBoneCollection(owner): EntityBoneCollection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Source

[src/client/models/EntityBoneCollection.ts:10](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBoneCollection.ts#L10)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `_collection` | `private` | `undefined` \| `Enumerator`\<[`EntityBone`](EntityBone.md)\> | `undefined` |
| `_currentIndex` | `private` | `number` | `-1` |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | `undefined` |

## Accessors

### Core

```ts
get Core(): EntityBone
```

#### Returns

[`EntityBone`](EntityBone.md)

#### Source

[src/client/models/EntityBoneCollection.ts:25](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBoneCollection.ts#L25)

## Methods

### getBone()

```ts
getBone(boneIndex?, boneName?): EntityBone
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

#### Source

[src/client/models/EntityBoneCollection.ts:18](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBoneCollection.ts#L18)

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

#### Source

[src/client/models/EntityBoneCollection.ts:14](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBoneCollection.ts#L14)

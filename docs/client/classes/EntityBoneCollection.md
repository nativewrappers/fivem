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
| ------ | ------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Defined in

[src/client/models/EntityBoneCollection.ts:10](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/models/EntityBoneCollection.ts#L10)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [src/client/models/EntityBoneCollection.ts:5](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/models/EntityBoneCollection.ts#L5) |

## Accessors

### Core

```ts
get Core(): EntityBone
```

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[src/client/models/EntityBoneCollection.ts:25](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/models/EntityBoneCollection.ts#L25)

## Methods

### getBone()

```ts
getBone(boneIndex?, boneName?): EntityBone
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[src/client/models/EntityBoneCollection.ts:18](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/models/EntityBoneCollection.ts#L18)

***

### hasBone()

```ts
hasBone(name): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/client/models/EntityBoneCollection.ts:14](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/models/EntityBoneCollection.ts#L14)

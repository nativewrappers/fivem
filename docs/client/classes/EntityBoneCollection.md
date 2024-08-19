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

[src/client/models/EntityBoneCollection.ts:7](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/models/EntityBoneCollection.ts#L7)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [src/client/models/EntityBoneCollection.ts:5](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/models/EntityBoneCollection.ts#L5) |

## Accessors

### Core

```ts
get Core(): EntityBone
```

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[src/client/models/EntityBoneCollection.ts:22](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/models/EntityBoneCollection.ts#L22)

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

[src/client/models/EntityBoneCollection.ts:15](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/models/EntityBoneCollection.ts#L15)

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

[src/client/models/EntityBoneCollection.ts:11](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/models/EntityBoneCollection.ts#L11)

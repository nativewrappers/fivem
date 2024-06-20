[@nativewrappers/fivem](../../README.md) / [client](../README.md) / EntityBone

# Class: EntityBone

## Extended by

- [`PedBone`](PedBone.md)

## Constructors

### new EntityBone()

```ts
new EntityBone(
   owner, 
   boneIndex?, 
   boneName?): EntityBone
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

#### Source

[src/client/models/EntityBone.ts:28](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBone.ts#L28)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `index` | `readonly` | `number` |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) |

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

[src/client/models/EntityBone.ts:21](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/EntityBone.ts#L21)

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

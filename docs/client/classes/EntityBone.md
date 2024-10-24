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
| ------ | ------ |
| `owner` | [`BaseEntity`](BaseEntity.md) |
| `boneIndex`? | `number` |
| `boneName`? | `string` |

#### Returns

[`EntityBone`](EntityBone.md)

#### Defined in

[src/client/models/EntityBone.ts:28](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L28)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `index` | `readonly` | `number` | [src/client/models/EntityBone.ts:26](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L26) |
| `owner` | `readonly` | [`BaseEntity`](BaseEntity.md) | [src/client/models/EntityBone.ts:25](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L25) |

## Accessors

### Index

```ts
get Index(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/EntityBone.ts:5](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L5)

***

### IsValid

```ts
get IsValid(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/EntityBone.ts:21](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L21)

***

### Owner

```ts
get Owner(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Defined in

[src/client/models/EntityBone.ts:9](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L9)

***

### Position

```ts
get Position(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/EntityBone.ts:13](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L13)

***

### Rotation

```ts
get Rotation(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/EntityBone.ts:17](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/EntityBone.ts#L17)

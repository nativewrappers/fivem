[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Prop

# Class: Prop

## Extends

- `BaseEntity`

## Constructors

### new Prop()

```ts
new Prop(handle): Prop
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Overrides

`BaseEntity.constructor`

#### Source

[src/server/entities/Prop.ts:6](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/Prop.ts#L6)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `handle` | `protected` | `number` | `undefined` | `BaseEntity.handle` | `BaseEntity.handle` |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Prop` | `BaseEntity.type` | `BaseEntity.type` |

## Accessors

### AttachedTo

```ts
get AttachedTo(): null | BaseEntity
```

#### Returns

`null` \| `BaseEntity`

the entity that the calling entity is attached to, or null if
there is none

#### Source

[src/server/entities/BaseEntity.ts:49](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L49)

***

### Exists

```ts
get Exists(): boolean
```

#### Returns

`boolean`

#### Source

[src/server/entities/BaseEntity.ts:41](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L41)

***

### FirstOwner

```ts
get FirstOwner(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:37](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L37)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:29](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L29)

***

### Heading

```ts
get Heading(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:59](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L59)

***

### Health

```ts
get Health(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:67](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L67)

***

### IsNoLongerNeeded

```ts
get IsNoLongerNeeded(): boolean
```

#### Returns

`boolean`

#### Source

[src/server/entities/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L125)

***

### IsVisible

```ts
get IsVisible(): boolean
```

#### Returns

`boolean`

#### Source

[src/server/entities/BaseEntity.ts:117](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L117)

***

### MaxHealth

```ts
get MaxHealth(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:71](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L71)

***

### Model

```ts
get Model(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:75](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L75)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L121)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:33](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L33)

***

### PopulationType

```ts
get PopulationType(): PopulationType
```

#### Returns

`PopulationType`

#### Source

[src/server/entities/BaseEntity.ts:79](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L79)

***

### Position

```ts
get Position(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

#### Source

[src/server/entities/BaseEntity.ts:55](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L55)

***

### PositionAndHeading

```ts
get PositionAndHeading(): Vector4
```

#### Returns

[`Vector4`](../../client/classes/Vector4.md)

#### Source

[src/server/entities/BaseEntity.ts:63](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L63)

***

### Rotation

```ts
get Rotation(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

#### Source

[src/server/entities/BaseEntity.ts:83](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L83)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

#### Source

[src/server/entities/BaseEntity.ts:87](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L87)

***

### RoutingBucket

```ts
get RoutingBucket(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:91](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L91)

***

### Script

```ts
get Script(): string
```

#### Returns

`string`

The script that made the entity

#### Source

[src/server/entities/BaseEntity.ts:98](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L98)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Source

[src/server/entities/BaseEntity.ts:102](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L102)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Source

[src/server/entities/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L25)

***

### Type

```ts
get Type(): eEntityType
```

#### Returns

`eEntityType`

#### Source

[src/server/entities/BaseEntity.ts:106](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L106)

***

### Velocity

```ts
get Velocity(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)

#### Source

[src/server/entities/BaseEntity.ts:113](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L113)

## Methods

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Inherited from

`BaseEntity.delete`

#### Source

[src/server/entities/BaseEntity.ts:129](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/BaseEntity.ts#L129)

***

### AllProps()

```ts
static AllProps(): IterableIterator<Prop>
```

Get an interable list of props currently on the server

#### Returns

`IterableIterator`\<[`Prop`](Prop.md)\>

Iterable list of Props.

#### Source

[src/server/entities/Prop.ts:14](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/Prop.ts#L14)

***

### fromHandle()

```ts
static fromHandle(handle): Prop
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Source

[src/server/entities/Prop.ts:32](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/Prop.ts#L32)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Prop
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

`BaseEntity.fromNetworkId`

#### Source

[src/server/entities/Prop.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/Prop.ts#L20)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | Prop
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

`BaseEntity.fromStateBagName`

#### Source

[src/server/entities/Prop.ts:26](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/entities/Prop.ts#L26)

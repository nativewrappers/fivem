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
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Overrides

`BaseEntity.constructor`

#### Defined in

[src/server/entities/Prop.ts:6](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/Prop.ts#L6)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `handle` | `protected` | `number` | `undefined` | - | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L11) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Prop` | `BaseEntity.type` | - | [src/server/entities/Prop.ts:5](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/Prop.ts#L5) |

## Accessors

### AttachedTo

```ts
get AttachedTo(): null | BaseEntity
```

#### Returns

`null` \| `BaseEntity`

the entity that the calling entity is attached to, or null if
there is none

#### Inherited from

`BaseEntity.AttachedTo`

#### Defined in

[src/server/entities/BaseEntity.ts:49](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L49)

***

### Exists

```ts
get Exists(): boolean
```

#### Returns

`boolean`

#### Inherited from

`BaseEntity.Exists`

#### Defined in

[src/server/entities/BaseEntity.ts:41](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L41)

***

### FirstOwner

```ts
get FirstOwner(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.FirstOwner`

#### Defined in

[src/server/entities/BaseEntity.ts:37](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L37)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Handle`

#### Defined in

[src/server/entities/BaseEntity.ts:29](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L29)

***

### Heading

```ts
get Heading(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Heading`

#### Defined in

[src/server/entities/BaseEntity.ts:59](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L59)

***

### Health

```ts
get Health(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Health`

#### Defined in

[src/server/entities/BaseEntity.ts:67](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L67)

***

### IsNoLongerNeeded

```ts
get IsNoLongerNeeded(): boolean
```

#### Returns

`boolean`

#### Inherited from

`BaseEntity.IsNoLongerNeeded`

#### Defined in

[src/server/entities/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L125)

***

### IsVisible

```ts
get IsVisible(): boolean
```

#### Returns

`boolean`

#### Inherited from

`BaseEntity.IsVisible`

#### Defined in

[src/server/entities/BaseEntity.ts:117](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L117)

***

### MaxHealth

```ts
get MaxHealth(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.MaxHealth`

#### Defined in

[src/server/entities/BaseEntity.ts:71](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L71)

***

### Model

```ts
get Model(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Model`

#### Defined in

[src/server/entities/BaseEntity.ts:75](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L75)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.NetworkId`

#### Defined in

[src/server/entities/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L121)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Owner`

#### Defined in

[src/server/entities/BaseEntity.ts:33](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L33)

***

### PopulationType

```ts
get PopulationType(): PopulationType
```

#### Returns

`PopulationType`

#### Inherited from

`BaseEntity.PopulationType`

#### Defined in

[src/server/entities/BaseEntity.ts:79](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L79)

***

### Position

```ts
get Position(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

#### Inherited from

`BaseEntity.Position`

#### Defined in

[src/server/entities/BaseEntity.ts:55](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L55)

***

### PositionAndHeading

```ts
get PositionAndHeading(): Vector4
```

#### Returns

[`Vector4`](../../client/classes/Vector4.md)

#### Inherited from

`BaseEntity.PositionAndHeading`

#### Defined in

[src/server/entities/BaseEntity.ts:63](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L63)

***

### Rotation

```ts
get Rotation(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

#### Inherited from

`BaseEntity.Rotation`

#### Defined in

[src/server/entities/BaseEntity.ts:83](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L83)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

#### Inherited from

`BaseEntity.RotationVelocity`

#### Defined in

[src/server/entities/BaseEntity.ts:87](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L87)

***

### RoutingBucket

```ts
get RoutingBucket(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.RoutingBucket`

#### Defined in

[src/server/entities/BaseEntity.ts:91](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L91)

***

### Script

```ts
get Script(): string
```

#### Returns

`string`

The script that made the entity

#### Inherited from

`BaseEntity.Script`

#### Defined in

[src/server/entities/BaseEntity.ts:98](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L98)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Inherited from

`BaseEntity.Speed`

#### Defined in

[src/server/entities/BaseEntity.ts:102](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L102)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Inherited from

`BaseEntity.State`

#### Defined in

[src/server/entities/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L25)

***

### Type

```ts
get Type(): eEntityType
```

#### Returns

`eEntityType`

#### Inherited from

`BaseEntity.Type`

#### Defined in

[src/server/entities/BaseEntity.ts:106](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L106)

***

### Velocity

```ts
get Velocity(): Vector3
```

#### Returns

[`Vector3`](../../client/classes/Vector3.md)

the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)

#### Inherited from

`BaseEntity.Velocity`

#### Defined in

[src/server/entities/BaseEntity.ts:113](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L113)

## Methods

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Inherited from

`BaseEntity.delete`

#### Defined in

[src/server/entities/BaseEntity.ts:129](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/BaseEntity.ts#L129)

***

### AllProps()

```ts
static AllProps(): IterableIterator<Prop>
```

Get an interable list of props currently on the server

#### Returns

`IterableIterator`\<[`Prop`](Prop.md)\>

Iterable list of Props.

#### Defined in

[src/server/entities/Prop.ts:14](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/Prop.ts#L14)

***

### fromHandle()

```ts
static fromHandle(handle): Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Prop`](Prop.md)

#### Defined in

[src/server/entities/Prop.ts:32](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/Prop.ts#L32)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

`BaseEntity.fromNetworkId`

#### Defined in

[src/server/entities/Prop.ts:20](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/Prop.ts#L20)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | Prop
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

`BaseEntity.fromStateBagName`

#### Defined in

[src/server/entities/Prop.ts:26](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/server/entities/Prop.ts#L26)

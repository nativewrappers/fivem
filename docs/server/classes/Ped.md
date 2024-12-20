[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Ped

# Class: Ped

## Extends

- `BaseEntity`

## Constructors

### new Ped()

```ts
new Ped(handle): Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Ped`](Ped.md)

#### Overrides

`BaseEntity.constructor`

#### Defined in

[src/server/entities/Ped.ts:8](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L8)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `handle` | `protected` | `number` | `undefined` | - | `BaseEntity.handle` | [src/server/entities/BaseEntity.ts:11](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L11) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Ped` | `BaseEntity.type` | - | [src/server/entities/Ped.ts:7](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L7) |

## Accessors

### Armour

```ts
get Armour(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:38](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L38)

***

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

[src/server/entities/BaseEntity.ts:49](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L49)

***

### CauseOfDeath

```ts
get CauseOfDeath(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:42](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L42)

***

### CurrentVehicle

```ts
get CurrentVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

the current vehicle the ped is in, or null if it doesn't exist

#### Defined in

[src/server/entities/Ped.ts:77](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L77)

***

### DeathCause

```ts
get DeathCause(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:66](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L66)

***

### DesiredHeading

```ts
get DesiredHeading(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:46](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L46)

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

[src/server/entities/BaseEntity.ts:41](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L41)

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

[src/server/entities/BaseEntity.ts:37](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L37)

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

[src/server/entities/BaseEntity.ts:29](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L29)

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

[src/server/entities/BaseEntity.ts:59](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L59)

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

[src/server/entities/BaseEntity.ts:67](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L67)

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

[src/server/entities/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L125)

***

### IsPlayer

```ts
get IsPlayer(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/entities/Ped.ts:89](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L89)

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

[src/server/entities/BaseEntity.ts:117](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L117)

***

### LastSourceOfDamage

```ts
get LastSourceOfDamage(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:62](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L62)

***

### LastVehicle

```ts
get LastVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/server/entities/Ped.ts:83](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L83)

***

### MaxHealth

```ts
get MaxHealth(): number
```

#### Returns

`number`

#### Overrides

`BaseEntity.MaxHealth`

#### Defined in

[src/server/entities/Ped.ts:50](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L50)

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

[src/server/entities/BaseEntity.ts:75](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L75)

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

[src/server/entities/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L121)

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

[src/server/entities/BaseEntity.ts:33](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L33)

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

[src/server/entities/BaseEntity.ts:79](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L79)

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

[src/server/entities/BaseEntity.ts:55](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L55)

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

[src/server/entities/BaseEntity.ts:63](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L63)

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

[src/server/entities/BaseEntity.ts:83](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L83)

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

[src/server/entities/BaseEntity.ts:87](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L87)

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

[src/server/entities/BaseEntity.ts:91](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L91)

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

[src/server/entities/BaseEntity.ts:98](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L98)

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

[src/server/entities/BaseEntity.ts:102](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L102)

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

[src/server/entities/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L25)

***

### TaskCommand

```ts
get TaskCommand(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:54](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L54)

***

### TaskStage

```ts
get TaskStage(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:58](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L58)

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

[src/server/entities/BaseEntity.ts:106](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L106)

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

[src/server/entities/BaseEntity.ts:113](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L113)

***

### Weapon

```ts
get Weapon(): number
```

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:70](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L70)

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

[src/server/entities/BaseEntity.ts:129](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/BaseEntity.ts#L129)

***

### getSpecificTaskType()

```ts
getSpecificTaskType(index): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[src/server/entities/Ped.ts:93](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L93)

***

### AllPeds()

```ts
static AllPeds(): IterableIterator<Ped>
```

Get an interable list of peds currently on the server

#### Returns

`IterableIterator`\<[`Ped`](Ped.md)\>

Iterable list of Peds.

#### Defined in

[src/server/entities/Ped.ts:16](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L16)

***

### fromNetworkId()

```ts
static fromNetworkId(netId): null | Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

#### Overrides

`BaseEntity.fromNetworkId`

#### Defined in

[src/server/entities/Ped.ts:22](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L22)

***

### fromSource()

```ts
static fromSource(source): Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `source` | `number` |

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/server/entities/Ped.ts:34](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L34)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`Ped`](Ped.md)

#### Overrides

`BaseEntity.fromStateBagName`

#### Defined in

[src/server/entities/Ped.ts:28](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/server/entities/Ped.ts#L28)

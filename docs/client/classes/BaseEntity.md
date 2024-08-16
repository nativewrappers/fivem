[@nativewrappers/fivem](../../README.md) / [client](../README.md) / BaseEntity

# Class: BaseEntity

## Extended by

- [`Ped`](Ped.md)
- [`Prop`](Prop.md)
- [`Vehicle`](Vehicle.md)

## Constructors

### new BaseEntity()

```ts
new BaseEntity(handle): BaseEntity
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Defined in

[src/client/models/BaseEntity.ts:28](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L28)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | [src/client/models/BaseEntity.ts:23](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L23) |
| `handle` | `protected` | `number` | `undefined` | [src/client/models/BaseEntity.ts:22](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L22) |
| `netId` | `protected` | `null` \| `number` | `null` | [src/client/models/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L25) |
| `stateBagCookies` | `protected` | `number`[] | `[]` | [src/client/models/BaseEntity.ts:24](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L24) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Entity` | [src/client/models/BaseEntity.ts:26](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L26) |

## Accessors

### AttachedBlip

```ts
get AttachedBlip(): null | Blip
```

#### Returns

`null` \| [`Blip`](Blip.md)

#### Defined in

[src/client/models/BaseEntity.ts:402](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L402)

***

### Bones

```ts
get Bones(): EntityBoneCollection
```

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Defined in

[src/client/models/BaseEntity.ts:395](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L395)

***

### ForwardVector

```ts
get ForwardVector(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L121)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:35](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L35)

***

### HasCollided

```ts
get HasCollided(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:375](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L375)

***

### HasGravity

```ts
set HasGravity(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/BaseEntity.ts:278](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L278)

***

### Heading

```ts
get Heading(): number
```

```ts
set Heading(heading): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `heading` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:246](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L246)

***

### Health

```ts
get Health(): number
```

```ts
set Health(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:149](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L149)

***

### HeightAboveGround

```ts
get HeightAboveGround(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:282](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L282)

***

### IsAlive

```ts
get IsAlive(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:177](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L177)

***

### IsCollisionEnabled

```ts
get IsCollisionEnabled(): boolean
```

```ts
set IsCollisionEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:383](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L383)

***

### IsDead

```ts
get IsDead(): boolean
```

```ts
set IsDead(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:173](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L173)

***

### IsInAir

```ts
get IsInAir(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:322](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L322)

***

### IsInWater

```ts
get IsInWater(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:326](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L326)

***

### IsInvincible

```ts
set IsInvincible(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/BaseEntity.ts:352](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L352)

***

### IsMissionEntity

```ts
get IsMissionEntity(): boolean
```

Returns if the entity is set as a mission entity and will not be cleaned up by the engine

```ts
set IsMissionEntity(value): void
```

Sets if the entity is a mission entity and will not be cleaned up by the engine

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:202](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L202)

***

### IsNetworkConcealed

```ts
get IsNetworkConcealed(): boolean
```

```ts
set IsNetworkConcealed(concealed): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `concealed` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:61](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L61)

***

### IsNetworked

```ts
get IsNetworked(): boolean
```

```ts
set IsNetworked(networked): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networked` | `boolean` |

#### Returns

`boolean`

if the entity is a networked entity or local entity

#### Defined in

[src/client/models/BaseEntity.ts:42](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L42)

***

### IsOccluded

```ts
get IsOccluded(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:306](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L306)

***

### IsOnFire

```ts
get IsOnFire(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:348](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L348)

***

### IsOnScreen

```ts
get IsOnScreen(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:310](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L310)

***

### IsOnlyDamagedByPlayer

```ts
set IsOnlyDamagedByPlayer(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/BaseEntity.ts:356](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L356)

***

### IsPersistent

```ts
get IsPersistent(): boolean
```

#### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

```ts
set IsPersistent(value): void
```

#### Deprecated

use [[IsMissionEntity]] instead as its more obvious as what it does

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:333](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L333)

***

### IsPositionFrozen

```ts
get IsPositionFrozen(): boolean
```

```ts
set IsPositionFrozen(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:254](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L254)

***

### IsRecordingCollisions

```ts
set IsRecordingCollisions(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/BaseEntity.ts:391](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L391)

***

### IsUpright

```ts
get IsUpright(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:314](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L314)

***

### IsUpsideDown

```ts
get IsUpsideDown(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:318](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L318)

***

### IsVisible

```ts
get IsVisible(): boolean
```

```ts
set IsVisible(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:298](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L298)

***

### LodDistance

```ts
get LodDistance(): number
```

```ts
set LodDistance(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:290](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L290)

***

### MaterialCollidingWith

```ts
get MaterialCollidingWith(): MaterialHash
```

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Defined in

[src/client/models/BaseEntity.ts:379](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L379)

***

### Matrix

```ts
get Matrix(): Vector3[]
```

```ts
set Matrix(vectors): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vectors` | [`Vector3`](Vector3.md)[] |

#### Returns

[`Vector3`](Vector3.md)[]

#### Defined in

[src/client/models/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L125)

***

### MaxHealth

```ts
get MaxHealth(): number
```

```ts
set MaxHealth(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:157](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L157)

***

### MaxSpeed

```ts
set MaxSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/BaseEntity.ts:274](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L274)

***

### Model

```ts
get Model(): Model
```

#### Returns

[`Model`](Model.md)

#### Defined in

[src/client/models/BaseEntity.ts:195](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L195)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:54](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L54)

***

### Opacity

```ts
get Opacity(): number
```

```ts
set Opacity(value): void
```

Sets how transparent an entity is, if you want to reset the alpha level use [[resetOpacity]] instead;

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:360](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L360)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:105](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L105)

***

### Position

```ts
get Position(): Vector3
```

```ts
set Position(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/BaseEntity.ts:217](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L217)

***

### PositionNoOffset

```ts
set PositionNoOffset(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Defined in

[src/client/models/BaseEntity.ts:225](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L225)

***

### Quaternion

```ts
get Quaternion(): Quaternion
```

```ts
set Quaternion(quaternion): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Defined in

[src/client/models/BaseEntity.ts:237](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L237)

***

### Rotation

```ts
get Rotation(): Vector3
```

```ts
set Rotation(rotation): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/BaseEntity.ts:229](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L229)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/BaseEntity.ts:270](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L270)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:113](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L113)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Defined in

[src/client/models/BaseEntity.ts:69](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L69)

***

### SubmersionLevel

```ts
get SubmersionLevel(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:286](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L286)

***

### Velocity

```ts
get Velocity(): Vector3
```

```ts
set Velocity(velocity): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `velocity` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/BaseEntity.ts:262](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L262)

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Defined in

[src/client/models/BaseEntity.ts:73](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L73)

***

### applyForce()

```ts
applyForce(
   direction, 
   rotation, 
   forceType): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:649](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L649)

***

### applyForceRelative()

```ts
applyForceRelative(
   direction, 
   rotation, 
   forceType): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:672](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L672)

***

### attachBlip()

```ts
attachBlip(): Blip
```

#### Returns

[`Blip`](Blip.md)

#### Defined in

[src/client/models/BaseEntity.ts:412](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L412)

***

### attachTo()

```ts
attachTo(
   entity, 
   position, 
   rotation, 
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:554](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L554)

***

### attachToBone()

```ts
attachToBone(
   entityBone, 
   position, 
   rotation, 
   collisions, 
   unk9, 
   useSoftPinning, 
   rotationOrder): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entityBone` | [`EntityBone`](EntityBone.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:600](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L600)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:444](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L444)

***

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:713](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L713)

***

### detach()

```ts
detach(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:633](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L633)

***

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:709](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L709)

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Defined in

[src/client/models/BaseEntity.ts:645](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L645)

***

### getOffsetInRelativeCoords()

```ts
getOffsetInRelativeCoords(worldCoords): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in world coords

#### Defined in

[src/client/models/BaseEntity.ts:510](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L510)

***

### getOffsetInWorldCoords()

```ts
getOffsetInWorldCoords(offset): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in relative coords

#### Example

```typescript
const ply = Game.PlayerPed;
const plyPos = ply.Position;
const bag = await World.createProp(new Model('ba_prop_battle_bag_01b'), plyPos, true, true, true);
bag.attachToBone(
    ply.Bones.getBone(64113),
    new Vector3(0.12, -0.25, 0.0),
    new Vector3(105.0, 50.0, 190.0)
)
const offset = bag.getRelativePositionOffset(plyPos);
```

#### Defined in

[src/client/models/BaseEntity.ts:533](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L533)

***

### ~~getOffsetPosition()~~

```ts
getOffsetPosition(offset): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInWorldCoords]]

#### Defined in

[src/client/models/BaseEntity.ts:549](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L549)

***

### ~~getPositionOffset()~~

```ts
getPositionOffset(worldCoords): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Deprecated

use [[getOffsetInRelativeCoords]] instead

#### Defined in

[src/client/models/BaseEntity.ts:542](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L542)

***

### getSpeedVector()

```ts
getSpeedVector(isRelative): Vector3
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `isRelative` | `boolean` | `false` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/BaseEntity.ts:117](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L117)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:428](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L428)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:440](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L440)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:436](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L436)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:432](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L432)

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `traceType` | `number` | `17` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:420](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L420)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:424](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L424)

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

#### Defined in

[src/client/models/BaseEntity.ts:191](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L191)

***

### isAttached()

```ts
isAttached(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:637](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L637)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:641](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L641)

***

### ~~isDead()~~

```ts
isDead(): boolean
```

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Defined in

[src/client/models/BaseEntity.ts:184](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L184)

***

### isInAngledArea()

```ts
isInAngledArea(
   origin, 
   edge, 
   angle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `origin` | [`Vector3`](Vector3.md) |
| `edge` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:463](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L463)

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `minBounds` | [`Vector3`](Vector3.md) |
| `maxBounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:448](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L448)

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `range` | `number` |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:479](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L479)

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:485](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L485)

***

### isTouching()

```ts
isTouching(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:498](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L498)

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `model` | [`Model`](Model.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/BaseEntity.ts:502](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L502)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Defined in

[src/client/models/BaseEntity.ts:93](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L93)

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Defined in

[src/client/models/BaseEntity.ts:724](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L724)

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

#### Defined in

[src/client/models/BaseEntity.ts:705](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L705)

***

### removePtfxEffects()

```ts
removePtfxEffects(): void
```

Removes all particle effects from the entity

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:698](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L698)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:97](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L97)

***

### resetOpacity()

```ts
resetOpacity(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:371](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L371)

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/BaseEntity.ts:416](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L416)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | BaseEntity
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Defined in

[src/client/models/BaseEntity.ts:12](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L12)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Defined in

[src/client/models/BaseEntity.ts:16](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L16)

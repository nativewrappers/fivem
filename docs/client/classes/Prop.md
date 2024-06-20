[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Prop

# Class: Prop

## Extends

- [`BaseEntity`](BaseEntity.md)

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

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

#### Source

[src/client/models/Prop.ts:22](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Prop.ts#L22)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | [`BaseEntity`](BaseEntity.md).`bones` | [`BaseEntity`](BaseEntity.md).`bones` |
| `handle` | `protected` | `number` | `undefined` | [`BaseEntity`](BaseEntity.md).`handle` | [`BaseEntity`](BaseEntity.md).`handle` |
| `netId` | `protected` | `null` \| `number` | `null` | [`BaseEntity`](BaseEntity.md).`netId` | [`BaseEntity`](BaseEntity.md).`netId` |
| `stateBagCookies` | `protected` | `number`[] | `[]` | [`BaseEntity`](BaseEntity.md).`stateBagCookies` | [`BaseEntity`](BaseEntity.md).`stateBagCookies` |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Prop` | [`BaseEntity`](BaseEntity.md).`type` | [`BaseEntity`](BaseEntity.md).`type` |

## Accessors

### AttachedBlip

```ts
get AttachedBlip(): null | Blip
```

#### Returns

`null` \| [`Blip`](Blip.md)

#### Source

[src/client/models/BaseEntity.ts:402](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L402)

***

### Bones

```ts
get Bones(): EntityBoneCollection
```

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Source

[src/client/models/BaseEntity.ts:395](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L395)

***

### ForwardVector

```ts
get ForwardVector(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L121)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:35](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L35)

***

### HasCollided

```ts
get HasCollided(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:375](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L375)

***

### HasGravity

```ts
set HasGravity(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Source

[src/client/models/BaseEntity.ts:278](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L278)

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
| :------ | :------ |
| `heading` | `number` |

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:246](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L246)

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
| :------ | :------ |
| `amount` | `number` |

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:149](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L149)

***

### HeightAboveGround

```ts
get HeightAboveGround(): number
```

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:282](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L282)

***

### IsAlive

```ts
get IsAlive(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:177](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L177)

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
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:383](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L383)

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
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:173](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L173)

***

### IsInAir

```ts
get IsInAir(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:322](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L322)

***

### IsInWater

```ts
get IsInWater(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:326](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L326)

***

### IsInvincible

```ts
set IsInvincible(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Source

[src/client/models/BaseEntity.ts:352](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L352)

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
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:202](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L202)

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
| :------ | :------ |
| `concealed` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:61](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L61)

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
| :------ | :------ |
| `networked` | `boolean` |

#### Returns

`boolean`

if the entity is a networked entity or local entity

#### Source

[src/client/models/BaseEntity.ts:42](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L42)

***

### IsOccluded

```ts
get IsOccluded(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:306](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L306)

***

### IsOnFire

```ts
get IsOnFire(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:348](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L348)

***

### IsOnScreen

```ts
get IsOnScreen(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:310](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L310)

***

### IsOnlyDamagedByPlayer

```ts
set IsOnlyDamagedByPlayer(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Source

[src/client/models/BaseEntity.ts:356](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L356)

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
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:333](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L333)

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
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:254](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L254)

***

### IsRecordingCollisions

```ts
set IsRecordingCollisions(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Source

[src/client/models/BaseEntity.ts:391](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L391)

***

### IsUpright

```ts
get IsUpright(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:314](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L314)

***

### IsUpsideDown

```ts
get IsUpsideDown(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:318](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L318)

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
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/BaseEntity.ts:298](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L298)

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
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:290](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L290)

***

### MaterialCollidingWith

```ts
get MaterialCollidingWith(): MaterialHash
```

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Source

[src/client/models/BaseEntity.ts:379](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L379)

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
| :------ | :------ |
| `vectors` | [`Vector3`](Vector3.md)[] |

#### Returns

[`Vector3`](Vector3.md)[]

#### Source

[src/client/models/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L125)

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
| :------ | :------ |
| `amount` | `number` |

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:157](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L157)

***

### MaxSpeed

```ts
set MaxSpeed(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Source

[src/client/models/BaseEntity.ts:274](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L274)

***

### Model

```ts
get Model(): Model
```

#### Returns

[`Model`](Model.md)

#### Source

[src/client/models/BaseEntity.ts:195](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L195)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:54](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L54)

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
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:360](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L360)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:105](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L105)

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
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/BaseEntity.ts:217](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L217)

***

### PositionNoOffset

```ts
set PositionNoOffset(position): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |

#### Source

[src/client/models/BaseEntity.ts:225](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L225)

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
| :------ | :------ |
| `quaternion` | [`Quaternion`](Quaternion.md) |

#### Returns

[`Quaternion`](Quaternion.md)

#### Source

[src/client/models/BaseEntity.ts:237](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L237)

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
| :------ | :------ |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/BaseEntity.ts:229](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L229)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/BaseEntity.ts:270](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L270)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:113](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L113)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Source

[src/client/models/BaseEntity.ts:69](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L69)

***

### SubmersionLevel

```ts
get SubmersionLevel(): number
```

#### Returns

`number`

#### Source

[src/client/models/BaseEntity.ts:286](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L286)

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
| :------ | :------ |
| `velocity` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/models/BaseEntity.ts:262](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L262)

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AddStateBagChangeHandler`](BaseEntity.md#addstatebagchangehandler)

#### Source

[src/client/models/BaseEntity.ts:73](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L73)

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
| :------ | :------ | :------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForce`](BaseEntity.md#applyforce)

#### Source

[src/client/models/BaseEntity.ts:617](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L617)

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
| :------ | :------ | :------ |
| `direction` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `forceType` | [`ForceType`](../enumerations/ForceType.md) | `ForceType.MaxForceRot2` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForceRelative`](BaseEntity.md#applyforcerelative)

#### Source

[src/client/models/BaseEntity.ts:640](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L640)

***

### attachBlip()

```ts
attachBlip(): Blip
```

#### Returns

[`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachBlip`](BaseEntity.md#attachblip)

#### Source

[src/client/models/BaseEntity.ts:412](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L412)

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
| :------ | :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachTo`](BaseEntity.md#attachto)

#### Source

[src/client/models/BaseEntity.ts:522](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L522)

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
| :------ | :------ | :------ |
| `entityBone` | [`EntityBone`](EntityBone.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `rotation` | [`Vector3`](Vector3.md) | `undefined` |
| `collisions` | `boolean` | `false` |
| `unk9` | `boolean` | `true` |
| `useSoftPinning` | `boolean` | `true` |
| `rotationOrder` | `number` | `1` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachToBone`](BaseEntity.md#attachtobone)

#### Source

[src/client/models/BaseEntity.ts:568](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L568)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

#### Source

[src/client/models/BaseEntity.ts:444](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L444)

***

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`delete`](BaseEntity.md#delete)

#### Source

[src/client/models/BaseEntity.ts:681](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L681)

***

### detach()

```ts
detach(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`detach`](BaseEntity.md#detach)

#### Source

[src/client/models/BaseEntity.ts:601](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L601)

***

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

#### Source

[src/client/models/Prop.ts:26](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Prop.ts#L26)

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getEntityAttachedTo`](BaseEntity.md#getentityattachedto)

#### Source

[src/client/models/BaseEntity.ts:613](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L613)

***

### getOffsetPosition()

```ts
getOffsetPosition(offset): Vector3
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

the offset position from the entity in world coords

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetPosition`](BaseEntity.md#getoffsetposition)

#### Source

[src/client/models/BaseEntity.ts:510](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L510)

***

### getPositionOffset()

```ts
getPositionOffset(worldCoords): Vector3
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `worldCoords` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getPositionOffset`](BaseEntity.md#getpositionoffset)

#### Source

[src/client/models/BaseEntity.ts:516](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L516)

***

### getSpeedVector()

```ts
getSpeedVector(isRelative): Vector3
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `isRelative` | `boolean` | `false` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

#### Source

[src/client/models/BaseEntity.ts:117](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L117)

***

### hasBeenDamagedBy()

```ts
hasBeenDamagedBy(entity): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedBy`](BaseEntity.md#hasbeendamagedby)

#### Source

[src/client/models/BaseEntity.ts:428](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L428)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

#### Source

[src/client/models/BaseEntity.ts:440](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L440)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

#### Source

[src/client/models/BaseEntity.ts:436](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L436)

***

### hasBeenDamagedByWeapon()

```ts
hasBeenDamagedByWeapon(weapon): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

#### Source

[src/client/models/BaseEntity.ts:432](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L432)

***

### hasClearLosToEntity()

```ts
hasClearLosToEntity(entity, traceType): boolean
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `traceType` | `number` | `17` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

#### Source

[src/client/models/BaseEntity.ts:420](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L420)

***

### hasClearLosToEntityInFront()

```ts
hasClearLosToEntityInFront(entity): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntityInFront`](BaseEntity.md#hasclearlostoentityinfront)

#### Source

[src/client/models/BaseEntity.ts:424](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L424)

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAlive`](BaseEntity.md#isalive-1)

#### Deprecated

use [[IsAlive]] instead

#### Source

[src/client/models/BaseEntity.ts:191](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L191)

***

### isAttached()

```ts
isAttached(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttached`](BaseEntity.md#isattached)

#### Source

[src/client/models/BaseEntity.ts:605](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L605)

***

### isAttachedTo()

```ts
isAttachedTo(entity): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttachedTo`](BaseEntity.md#isattachedto)

#### Source

[src/client/models/BaseEntity.ts:609](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L609)

***

### ~~isDead()~~

```ts
isDead(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-1)

#### Deprecated

use [[IsDead]] instead

#### Source

[src/client/models/BaseEntity.ts:184](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L184)

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
| :------ | :------ |
| `origin` | [`Vector3`](Vector3.md) |
| `edge` | [`Vector3`](Vector3.md) |
| `angle` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInAngledArea`](BaseEntity.md#isinangledarea)

#### Source

[src/client/models/BaseEntity.ts:463](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L463)

***

### isInArea()

```ts
isInArea(minBounds, maxBounds): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `minBounds` | [`Vector3`](Vector3.md) |
| `maxBounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

#### Source

[src/client/models/BaseEntity.ts:448](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L448)

***

### isInRangeOf()

```ts
isInRangeOf(position, range): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |
| `range` | `number` |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInRangeOf`](BaseEntity.md#isinrangeof)

#### Source

[src/client/models/BaseEntity.ts:479](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L479)

***

### isNearEntity()

```ts
isNearEntity(entity, bounds): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `bounds` | [`Vector3`](Vector3.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isNearEntity`](BaseEntity.md#isnearentity)

#### Source

[src/client/models/BaseEntity.ts:485](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L485)

***

### isTouching()

```ts
isTouching(entity): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouching`](BaseEntity.md#istouching)

#### Source

[src/client/models/BaseEntity.ts:498](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L498)

***

### isTouchingModel()

```ts
isTouchingModel(model): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Model`](Model.md) |

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouchingModel`](BaseEntity.md#istouchingmodel)

#### Source

[src/client/models/BaseEntity.ts:502](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L502)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`listenForStateChange`](BaseEntity.md#listenforstatechange)

#### Source

[src/client/models/BaseEntity.ts:93](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L93)

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`markAsNoLongerNeeded`](BaseEntity.md#markasnolongerneeded)

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Source

[src/client/models/BaseEntity.ts:692](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L692)

***

### placeOnGround()

```ts
placeOnGround(): void
```

#### Returns

`void`

#### Source

[src/client/models/Prop.ts:30](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Prop.ts#L30)

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeAllParticleEffects`](BaseEntity.md#removeallparticleeffects)

#### Deprecated

use [[removePtfxEffects]]

#### Source

[src/client/models/BaseEntity.ts:673](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L673)

***

### removePtfxEffects()

```ts
removePtfxEffects(): void
```

Removes all particle effects from the entity

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removePtfxEffects`](BaseEntity.md#removeptfxeffects)

#### Source

[src/client/models/BaseEntity.ts:666](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L666)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeStateListener`](BaseEntity.md#removestatelistener)

#### Source

[src/client/models/BaseEntity.ts:97](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L97)

***

### resetOpacity()

```ts
resetOpacity(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`resetOpacity`](BaseEntity.md#resetopacity)

#### Source

[src/client/models/BaseEntity.ts:371](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L371)

***

### setNoCollision()

```ts
setNoCollision(entity, toggle): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`setNoCollision`](BaseEntity.md#setnocollision)

#### Source

[src/client/models/BaseEntity.ts:416](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L416)

***

### exists()

```ts
static exists(prop): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `prop` | [`Prop`](Prop.md) |

#### Returns

`boolean`

#### Source

[src/client/models/Prop.ts:5](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Prop.ts#L5)

***

### fromHandle()

```ts
static fromHandle(handle): null | Prop
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Source

[src/client/models/Prop.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Prop.ts#L9)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId, errorOnInvalid): null | Prop
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `networkId` | `number` | `undefined` |
| `errorOnInvalid` | `boolean` | `false` |

#### Returns

`null` \| [`Prop`](Prop.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

#### Source

[src/client/models/Prop.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Prop.ts#L13)

***

### fromStateBagName()

```ts
static fromStateBagName(stateBagName): null | BaseEntity
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stateBagName` | `string` |

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`fromStateBagName`](BaseEntity.md#fromstatebagname)

#### Source

[src/client/models/BaseEntity.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/BaseEntity.ts#L16)

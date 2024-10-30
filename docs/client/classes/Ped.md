[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Ped

# Class: Ped

## Extends

- [`BaseEntity`](BaseEntity.md)

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

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

#### Defined in

[src/client/models/Ped.ts:81](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L81)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | - | [`BaseEntity`](BaseEntity.md).`bones` | [src/client/models/BaseEntity.ts:23](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L23) |
| `handle` | `protected` | `number` | `undefined` | - | [`BaseEntity`](BaseEntity.md).`handle` | [src/client/models/BaseEntity.ts:22](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L22) |
| `netId` | `protected` | `null` \| `number` | `null` | - | [`BaseEntity`](BaseEntity.md).`netId` | [src/client/models/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L25) |
| `stateBagCookies` | `protected` | `number`[] | `[]` | - | [`BaseEntity`](BaseEntity.md).`stateBagCookies` | [src/client/models/BaseEntity.ts:24](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L24) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Ped` | [`BaseEntity`](BaseEntity.md).`type` | - | [src/client/models/Ped.ts:35](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L35) |

## Accessors

### Accuracy

```ts
get Accuracy(): number
```

```ts
set Accuracy(accuracy): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `accuracy` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:110](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L110)

***

### Armor

```ts
get Armor(): number
```

```ts
set Armor(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:101](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L101)

***

### AttachedBlip

```ts
get AttachedBlip(): null | Blip
```

#### Returns

`null` \| [`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AttachedBlip`](BaseEntity.md#attachedblip)

#### Defined in

[src/client/models/BaseEntity.ts:402](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L402)

***

### BlockPermanentEvents

```ts
set BlockPermanentEvents(block): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `block` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:493](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L493)

***

### Bones

```ts
get Bones(): PedBoneCollection
```

#### Returns

[`PedBoneCollection`](PedBoneCollection.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones)

#### Defined in

[src/client/models/Ped.ts:620](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L620)

***

### CanRagdoll

```ts
get CanRagdoll(): boolean
```

```ts
set CanRagdoll(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:659](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L659)

***

### CurrentVehicle

```ts
get CurrentVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/client/models/Ped.ts:177](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L177)

***

### DeathCause

```ts
get DeathCause(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:486](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L486)

***

### DrivingSpeed

```ts
set DrivingSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Ped.ts:462](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L462)

***

### DrivingStyle

```ts
set DrivingStyle(style): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `style` | [`DrivingStyle`](../enumerations/DrivingStyle.md) |

#### Defined in

[src/client/models/Ped.ts:466](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L466)

***

### DropsWeaponsOnDeath

```ts
set DropsWeaponsOnDeath(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:458](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L458)

***

### FiringPattern

```ts
set FiringPattern(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`FiringPattern`](../enumerations/FiringPattern.md) |

#### Defined in

[src/client/models/Ped.ts:454](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L454)

***

### ForwardVector

```ts
get ForwardVector(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`ForwardVector`](BaseEntity.md#forwardvector)

#### Defined in

[src/client/models/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L121)

***

### Gender

```ts
get Gender(): Gender
```

#### Returns

[`Gender`](../enumerations/Gender.md)

#### Defined in

[src/client/models/Ped.ts:97](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L97)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Handle`](BaseEntity.md#handle)

#### Defined in

[src/client/models/BaseEntity.ts:35](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L35)

***

### HasCollided

```ts
get HasCollided(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasCollided`](BaseEntity.md#hascollided)

#### Defined in

[src/client/models/BaseEntity.ts:375](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L375)

***

### HasGravity

```ts
set HasGravity(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasGravity`](BaseEntity.md#hasgravity)

#### Defined in

[src/client/models/BaseEntity.ts:278](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L278)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Heading`](BaseEntity.md#heading)

#### Defined in

[src/client/models/BaseEntity.ts:246](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L246)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Health`](BaseEntity.md#health)

#### Defined in

[src/client/models/Ped.ts:119](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L119)

***

### HeightAboveGround

```ts
get HeightAboveGround(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HeightAboveGround`](BaseEntity.md#heightaboveground)

#### Defined in

[src/client/models/BaseEntity.ts:282](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L282)

***

### IsAiming

```ts
get IsAiming(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:414](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L414)

***

### IsAimingFromCover

```ts
get IsAimingFromCover(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:442](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L442)

***

### IsAlive

```ts
get IsAlive(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsAlive`](BaseEntity.md#isalive)

#### Defined in

[src/client/models/BaseEntity.ts:177](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L177)

***

### IsAmbientSpeechEnabled

```ts
get IsAmbientSpeechEnabled(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:398](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L398)

***

### IsAmbientSpeechPlaying

```ts
get IsAmbientSpeechPlaying(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:386](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L386)

***

### IsAnySpeechPlaying

```ts
get IsAnySpeechPlaying(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:394](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L394)

***

### IsBeingJacked

```ts
get IsBeingJacked(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:354](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L354)

***

### IsBeingStealthKilled

```ts
get IsBeingStealthKilled(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:434](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L434)

***

### IsBeingStunned

```ts
get IsBeingStunned(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:430](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L430)

***

### IsClimbing

```ts
get IsClimbing(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:262](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L262)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsCollisionEnabled`](BaseEntity.md#iscollisionenabled)

#### Defined in

[src/client/models/BaseEntity.ts:383](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L383)

***

### IsCuffed

```ts
get IsCuffed(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:220](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L220)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsDead`](BaseEntity.md#isdead)

#### Defined in

[src/client/models/BaseEntity.ts:173](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L173)

***

### IsDiving

```ts
get IsDiving(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:290](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L290)

***

### IsDoingDriveby

```ts
get IsDoingDriveby(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:422](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L422)

***

### IsDrunk

```ts
set IsDrunk(isDrunk): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isDrunk` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:470](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L470)

***

### IsDucking

```ts
get IsDucking(): boolean
```

```ts
set IsDucking(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:254](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L254)

***

### IsEnemy

```ts
set IsEnemy(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:208](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L208)

***

### IsFalling

```ts
get IsFalling(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:270](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L270)

***

### IsFleeing

```ts
get IsFleeing(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:370](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L370)

***

### IsGettingIntoAVehicle

```ts
get IsGettingIntoAVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:358](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L358)

***

### IsGettingUp

```ts
get IsGettingUp(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:258](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L258)

***

### IsGoingIntoCover

```ts
get IsGoingIntoCover(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:426](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L426)

***

### IsHuman

```ts
get IsHuman(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:204](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L204)

***

### IsIdle

```ts
get IsIdle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:232](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L232)

***

### IsInAir

```ts
get IsInAir(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInAir`](BaseEntity.md#isinair)

#### Defined in

[src/client/models/BaseEntity.ts:322](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L322)

***

### IsInBoat

```ts
get IsInBoat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:342](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L342)

***

### IsInCombat

```ts
get IsInCombat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:374](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L374)

***

### IsInCoverFacingLeft

```ts
get IsInCoverFacingLeft(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:450](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L450)

***

### IsInFlyingVehicle

```ts
get IsInFlyingVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:338](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L338)

***

### IsInGroup

```ts
get IsInGroup(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:566](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L566)

***

### IsInHeli

```ts
get IsInHeli(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:330](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L330)

***

### IsInMeleeCombat

```ts
get IsInMeleeCombat(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:378](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L378)

***

### IsInParachuteFreeFall

```ts
get IsInParachuteFreeFall(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:294](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L294)

***

### IsInPlane

```ts
get IsInPlane(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:334](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L334)

***

### IsInPoliceVehicle

```ts
get IsInPoliceVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:346](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L346)

***

### IsInStealthMode

```ts
get IsInStealthMode(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:382](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L382)

***

### IsInSub

```ts
get IsInSub(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:318](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L318)

***

### IsInTaxi

```ts
get IsInTaxi(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:322](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L322)

***

### IsInTrain

```ts
get IsInTrain(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:326](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L326)

***

### IsInWater

```ts
get IsInWater(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInWater`](BaseEntity.md#isinwater)

#### Defined in

[src/client/models/BaseEntity.ts:326](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L326)

***

### IsInjured

```ts
get IsInjured(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:366](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L366)

***

### IsInvincible

```ts
set IsInvincible(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsInvincible`](BaseEntity.md#isinvincible)

#### Defined in

[src/client/models/BaseEntity.ts:352](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L352)

***

### IsJacking

```ts
get IsJacking(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:350](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L350)

***

### IsJumping

```ts
get IsJumping(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:266](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L266)

***

### IsJumpingOutOfVehicle

```ts
get IsJumpingOutOfVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:192](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L192)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsMissionEntity`](BaseEntity.md#ismissionentity)

#### Defined in

[src/client/models/BaseEntity.ts:202](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L202)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworkConcealed`](BaseEntity.md#isnetworkconcealed)

#### Defined in

[src/client/models/BaseEntity.ts:61](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L61)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworked`](BaseEntity.md#isnetworked)

#### Defined in

[src/client/models/BaseEntity.ts:42](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L42)

***

### IsOccluded

```ts
get IsOccluded(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOccluded`](BaseEntity.md#isoccluded)

#### Defined in

[src/client/models/BaseEntity.ts:306](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L306)

***

### IsOnBike

```ts
get IsOnBike(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:310](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L310)

***

### IsOnFire

```ts
get IsOnFire(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnFire`](BaseEntity.md#isonfire)

#### Defined in

[src/client/models/BaseEntity.ts:348](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L348)

***

### IsOnFoot

```ts
get IsOnFoot(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:314](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L314)

***

### IsOnScreen

```ts
get IsOnScreen(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnScreen`](BaseEntity.md#isonscreen)

#### Defined in

[src/client/models/BaseEntity.ts:310](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L310)

***

### IsOnlyDamagedByPlayer

```ts
set IsOnlyDamagedByPlayer(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnlyDamagedByPlayer`](BaseEntity.md#isonlydamagedbyplayer)

#### Defined in

[src/client/models/BaseEntity.ts:356](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L356)

***

### IsPainAudioEnabled

```ts
set IsPainAudioEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:402](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L402)

***

### IsPerformingStealthKill

```ts
get IsPerformingStealthKill(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:438](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L438)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPersistent`](BaseEntity.md#ispersistent)

#### Defined in

[src/client/models/BaseEntity.ts:333](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L333)

***

### IsPlantingBomb

```ts
get IsPlantingBomb(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:406](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L406)

***

### IsPlayer

```ts
get IsPlayer(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:216](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L216)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPositionFrozen`](BaseEntity.md#ispositionfrozen)

#### Defined in

[src/client/models/BaseEntity.ts:254](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L254)

***

### IsPriorityTargetForEnemies

```ts
set IsPriorityTargetForEnemies(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:212](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L212)

***

### IsProne

```ts
get IsProne(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:246](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L246)

***

### IsRagdoll

```ts
get IsRagdoll(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:228](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L228)

***

### IsRecordingCollisions

```ts
set IsRecordingCollisions(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsRecordingCollisions`](BaseEntity.md#isrecordingcollisions)

#### Defined in

[src/client/models/BaseEntity.ts:391](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L391)

***

### IsReloading

```ts
get IsReloading(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:418](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L418)

***

### IsRunning

```ts
get IsRunning(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:282](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L282)

***

### IsScriptedSpeechPlaying

```ts
get IsScriptedSpeechPlaying(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:390](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L390)

***

### IsShooting

```ts
get IsShooting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:410](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L410)

***

### IsSprinting

```ts
get IsSprinting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:286](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L286)

***

### IsStopped

```ts
get IsStopped(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:274](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L274)

***

### IsSwimming

```ts
get IsSwimming(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:298](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L298)

***

### IsSwimmingUnderWater

```ts
get IsSwimmingUnderWater(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:302](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L302)

***

### IsTryingToEnterALockedVehicle

```ts
get IsTryingToEnterALockedVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:362](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L362)

***

### IsUpright

```ts
get IsUpright(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpright`](BaseEntity.md#isupright)

#### Defined in

[src/client/models/BaseEntity.ts:314](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L314)

***

### IsUpsideDown

```ts
get IsUpsideDown(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsUpsideDown`](BaseEntity.md#isupsidedown)

#### Defined in

[src/client/models/BaseEntity.ts:318](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L318)

***

### IsVaulting

```ts
get IsVaulting(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:306](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L306)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsVisible`](BaseEntity.md#isvisible)

#### Defined in

[src/client/models/BaseEntity.ts:298](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L298)

***

### IsWalking

```ts
get IsWalking(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:278](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L278)

***

### IsWearingHelmet

```ts
get IsWearingHelmet(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:224](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L224)

***

### LastVehicle

```ts
get LastVehicle(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/client/models/Ped.ts:182](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L182)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`LodDistance`](BaseEntity.md#loddistance)

#### Defined in

[src/client/models/BaseEntity.ts:290](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L290)

***

### MaterialCollidingWith

```ts
get MaterialCollidingWith(): MaterialHash
```

#### Returns

[`MaterialHash`](../enumerations/MaterialHash.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaterialCollidingWith`](BaseEntity.md#materialcollidingwith)

#### Defined in

[src/client/models/BaseEntity.ts:379](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L379)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Matrix`](BaseEntity.md#matrix)

#### Defined in

[src/client/models/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L125)

***

### MaxDrivingSpeed

```ts
set MaxDrivingSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Ped.ts:200](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L200)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`MaxHealth`](BaseEntity.md#maxhealth)

#### Defined in

[src/client/models/Ped.ts:127](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L127)

***

### MaxSpeed

```ts
set MaxSpeed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxSpeed`](BaseEntity.md#maxspeed)

#### Defined in

[src/client/models/BaseEntity.ts:274](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L274)

***

### Model

```ts
get Model(): Model
```

#### Returns

[`Model`](Model.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Model`](BaseEntity.md#model)

#### Defined in

[src/client/models/BaseEntity.ts:195](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L195)

***

### Money

```ts
get Money(): number
```

```ts
set Money(amount): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `amount` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:89](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L89)

***

### MotionBlur

```ts
set MotionBlur(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:474](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L474)

***

### NetworkId

```ts
get NetworkId(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`NetworkId`](BaseEntity.md#networkid)

#### Defined in

[src/client/models/BaseEntity.ts:54](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L54)

***

### NeverLeavesGroup

```ts
set NeverLeavesGroup(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:570](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L570)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Opacity`](BaseEntity.md#opacity)

#### Defined in

[src/client/models/BaseEntity.ts:360](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L360)

***

### Owner

```ts
get Owner(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Owner`](BaseEntity.md#owner)

#### Defined in

[src/client/models/BaseEntity.ts:105](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L105)

***

### Player

```ts
get Player(): Player
```

#### Returns

[`Player`](Player.md)

#### Defined in

[src/client/models/Ped.ts:85](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L85)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Position`](BaseEntity.md#position)

#### Defined in

[src/client/models/BaseEntity.ts:217](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L217)

***

### PositionNoOffset

```ts
set PositionNoOffset(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`PositionNoOffset`](BaseEntity.md#positionnooffset)

#### Defined in

[src/client/models/BaseEntity.ts:225](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L225)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Quaternion`](BaseEntity.md#quaternion)

#### Defined in

[src/client/models/BaseEntity.ts:237](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L237)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Rotation`](BaseEntity.md#rotation)

#### Defined in

[src/client/models/BaseEntity.ts:229](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L229)

***

### RotationVelocity

```ts
get RotationVelocity(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`RotationVelocity`](BaseEntity.md#rotationvelocity)

#### Defined in

[src/client/models/BaseEntity.ts:270](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L270)

***

### SeatIndex

```ts
get SeatIndex(): VehicleSeat
```

#### Returns

[`VehicleSeat`](../enumerations/VehicleSeat.md)

#### Defined in

[src/client/models/Ped.ts:164](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L164)

***

### ShootRate

```ts
set ShootRate(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Ped.ts:151](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L151)

***

### Speed

```ts
get Speed(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Speed`](BaseEntity.md#speed)

#### Defined in

[src/client/models/BaseEntity.ts:113](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L113)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`State`](BaseEntity.md#state)

#### Defined in

[src/client/models/BaseEntity.ts:69](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L69)

***

### StaysInVehicleWhenJacked

```ts
set StaysInVehicleWhenJacked(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Ped.ts:196](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L196)

***

### SubmersionLevel

```ts
get SubmersionLevel(): number
```

#### Returns

`number`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`SubmersionLevel`](BaseEntity.md#submersionlevel)

#### Defined in

[src/client/models/BaseEntity.ts:286](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L286)

***

### Sweat

```ts
set Sweat(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Ped.ts:135](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L135)

***

### Task

```ts
get Task(): Tasks
```

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/client/models/Ped.ts:478](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L478)

***

### TaskSequenceProgress

```ts
get TaskSequenceProgress(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:489](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L489)

***

### VehicleTryingToEnter

```ts
get VehicleTryingToEnter(): null | Vehicle
```

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/client/models/Ped.ts:187](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L187)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Velocity`](BaseEntity.md#velocity)

#### Defined in

[src/client/models/BaseEntity.ts:262](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L262)

***

### Voice

```ts
set Voice(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Defined in

[src/client/models/Ped.ts:147](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L147)

***

### WasKilledByStealth

```ts
get WasKilledByStealth(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:156](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L156)

***

### WasKilledByTakedown

```ts
get WasKilledByTakedown(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:160](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L160)

***

### Weapons

```ts
get Weapons(): WeaponCollection
```

Ped Weapons

#### Returns

`WeaponCollection`

#### Defined in

[src/client/models/Ped.ts:633](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L633)

***

### WetnessHeight

```ts
set WetnessHeight(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Ped.ts:139](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L139)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`AddStateBagChangeHandler`](BaseEntity.md#addstatebagchangehandler)

#### Defined in

[src/client/models/BaseEntity.ts:73](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L73)

***

### applyDamage()

```ts
applyDamage(damageAmount, armorFirst): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `damageAmount` | `number` | `undefined` |
| `armorFirst` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:600](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L600)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForce`](BaseEntity.md#applyforce)

#### Defined in

[src/client/models/BaseEntity.ts:649](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L649)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForceRelative`](BaseEntity.md#applyforcerelative)

#### Defined in

[src/client/models/BaseEntity.ts:672](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L672)

***

### attachBlip()

```ts
attachBlip(): Blip
```

#### Returns

[`Blip`](Blip.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachBlip`](BaseEntity.md#attachblip)

#### Defined in

[src/client/models/BaseEntity.ts:412](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L412)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachTo`](BaseEntity.md#attachto)

#### Defined in

[src/client/models/BaseEntity.ts:554](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L554)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachToBone`](BaseEntity.md#attachtobone)

#### Defined in

[src/client/models/BaseEntity.ts:600](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L600)

***

### cancelRagdoll()

```ts
cancelRagdoll(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:672](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L672)

***

### clearAllProps()

```ts
clearAllProps(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:765](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L765)

***

### clearBloodDamage()

```ts
clearBloodDamage(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:560](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L560)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

#### Returns

`void`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

#### Defined in

[src/client/models/Ped.ts:616](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L616)

***

### clearProp()

```ts
clearProp(propId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:761](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L761)

***

### clone()

```ts
clone(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/client/models/Ped.ts:705](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L705)

***

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`delete`](BaseEntity.md#delete)

#### Defined in

[src/client/models/BaseEntity.ts:713](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L713)

***

### detach()

```ts
detach(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`detach`](BaseEntity.md#detach)

#### Defined in

[src/client/models/BaseEntity.ts:633](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L633)

***

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`exists`](BaseEntity.md#exists)

#### Defined in

[src/client/models/Ped.ts:709](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L709)

***

### finalizeHeadBlend()

```ts
finalizeHeadBlend(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:940](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L940)

***

### getConfigFlag()

```ts
getConfigFlag(flagId): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:692](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L692)

***

### getDrawableVariation()

```ts
getDrawableVariation(componentId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:734](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L734)

***

### getEntityAttachedTo()

```ts
getEntityAttachedTo(): BaseEntity
```

#### Returns

[`BaseEntity`](BaseEntity.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getEntityAttachedTo`](BaseEntity.md#getentityattachedto)

#### Defined in

[src/client/models/BaseEntity.ts:645](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L645)

***

### getEyeColor()

```ts
getEyeColor(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:804](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L804)

***

### getHairColor()

```ts
getHairColor(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:816](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L816)

***

### getHairHighlightColor()

```ts
getHairHighlightColor(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:824](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L824)

***

### getHeadBlend()

```ts
getHeadBlend(): void | [number, number, number, number, number, number, number, number, number, boolean]
```

#### Returns

`void` \| [`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `boolean`]

#### Defined in

[src/client/models/Ped.ts:899](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L899)

***

### getHeadOverlay()

```ts
getHeadOverlay(overlayId): void | [number, number, number, number, number]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`void` \| [`number`, `number`, `number`, `number`, `number`]

#### Defined in

[src/client/models/Ped.ts:841](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L841)

***

### getHeadOverlayNum()

```ts
getHeadOverlayNum(overlayId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:828](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L828)

***

### getHeadOverlayOpacity()

```ts
getHeadOverlayOpacity(overlayId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:854](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L854)

***

### getHeadOverlayValue()

```ts
getHeadOverlayValue(overlayId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:832](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L832)

***

### getJackTarget()

```ts
getJackTarget(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/client/models/Ped.ts:529](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L529)

***

### getJacker()

```ts
getJacker(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/client/models/Ped.ts:525](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L525)

***

### getKiller()

```ts
getKiller(): null | BaseEntity
```

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Defined in

[src/client/models/Ped.ts:537](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L537)

***

### getLastWeaponImpactPosition()

```ts
getLastWeaponImpactPosition(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/Ped.ts:653](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L653)

***

### getMeleeTarget()

```ts
getMeleeTarget(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/client/models/Ped.ts:533](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L533)

***

### getNumberOfDrawableVariations()

```ts
getNumberOfDrawableVariations(componentId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:738](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L738)

***

### getNumberOfPropDrawableVariations()

```ts
getNumberOfPropDrawableVariations(propId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:781](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L781)

***

### getNumberOfPropTextureVariations()

```ts
getNumberOfPropTextureVariations(propId, drawableId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:785](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L785)

***

### getNumberTextureVariations()

```ts
getNumberTextureVariations(componentId, drawableId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |
| `drawableId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:746](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L746)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInRelativeCoords`](BaseEntity.md#getoffsetinrelativecoords)

#### Defined in

[src/client/models/BaseEntity.ts:510](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L510)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInWorldCoords`](BaseEntity.md#getoffsetinworldcoords)

#### Defined in

[src/client/models/BaseEntity.ts:533](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L533)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetPosition`](BaseEntity.md#getoffsetposition)

#### Defined in

[src/client/models/BaseEntity.ts:549](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L549)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getPositionOffset`](BaseEntity.md#getpositionoffset)

#### Defined in

[src/client/models/BaseEntity.ts:542](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L542)

***

### getPropIndex()

```ts
getPropIndex(propId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:777](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L777)

***

### getPropTextureIndex()

```ts
getPropTextureIndex(propId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:792](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L792)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

#### Defined in

[src/client/models/BaseEntity.ts:117](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L117)

***

### getTextureVariation()

```ts
getTextureVariation(componentId): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `componentId` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Ped.ts:742](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L742)

***

### giveHelmet()

```ts
giveHelmet(
   canBeRemovedByPed, 
   helmetType, 
   textureIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `canBeRemovedByPed` | `boolean` |
| `helmetType` | [`HelmetType`](../enumerations/HelmetType.md) |
| `textureIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:676](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L676)

***

### giveWeapon()

```ts
giveWeapon(
   weapon, 
   ammoCount, 
   isHidden, 
   equipNow): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) | `undefined` |
| `ammoCount` | `number` | `999` |
| `isHidden` | `boolean` | `false` |
| `equipNow` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:641](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L641)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedBy`](BaseEntity.md#hasbeendamagedby)

#### Defined in

[src/client/models/BaseEntity.ts:428](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L428)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

#### Defined in

[src/client/models/Ped.ts:612](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L612)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

#### Returns

`boolean`

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

#### Defined in

[src/client/models/Ped.ts:608](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L608)

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

#### Overrides

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

#### Defined in

[src/client/models/Ped.ts:604](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L604)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

#### Defined in

[src/client/models/BaseEntity.ts:420](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L420)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntityInFront`](BaseEntity.md#hasclearlostoentityinfront)

#### Defined in

[src/client/models/BaseEntity.ts:424](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L424)

***

### hasHeadBlendFinished()

```ts
hasHeadBlendFinished(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:944](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L944)

***

### ~~isAlive()~~

```ts
isAlive(): boolean
```

#### Returns

`boolean`

#### Deprecated

use [[IsAlive]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAlive`](BaseEntity.md#isalive-1)

#### Defined in

[src/client/models/BaseEntity.ts:191](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L191)

***

### isAttached()

```ts
isAttached(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttached`](BaseEntity.md#isattached)

#### Defined in

[src/client/models/BaseEntity.ts:637](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L637)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttachedTo`](BaseEntity.md#isattachedto)

#### Defined in

[src/client/models/BaseEntity.ts:641](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L641)

***

### ~~isDead()~~

```ts
isDead(): boolean
```

#### Returns

`boolean`

#### Deprecated

use [[IsDead]] instead

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-1)

#### Defined in

[src/client/models/BaseEntity.ts:184](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L184)

***

### isFacingPed()

```ts
isFacingPed(ped, angle): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `ped` | [`Ped`](Ped.md) | `undefined` |
| `angle` | `number` | `25.0` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:713](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L713)

***

### isHeadtracking()

```ts
isHeadtracking(entity): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:517](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L517)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInAngledArea`](BaseEntity.md#isinangledarea)

#### Defined in

[src/client/models/BaseEntity.ts:463](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L463)

***

### isInAnyVehicle()

```ts
isInAnyVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:497](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L497)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

#### Defined in

[src/client/models/BaseEntity.ts:448](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L448)

***

### isInCombatAgainst()

```ts
isInCombatAgainst(target): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:521](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L521)

***

### isInCover()

```ts
isInCover(expectUseWeapon): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `expectUseWeapon` | `boolean` | `false` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:446](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L446)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInRangeOf`](BaseEntity.md#isinrangeof)

#### Defined in

[src/client/models/BaseEntity.ts:479](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L479)

***

### isInVehicle()

```ts
isInVehicle(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:501](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L501)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isNearEntity`](BaseEntity.md#isnearentity)

#### Defined in

[src/client/models/BaseEntity.ts:485](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L485)

***

### isPropValid()

```ts
isPropValid(
   propId, 
   drawableId, 
   textureId): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propId` | `number` |
| `drawableId` | `number` |
| `textureId` | `number` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:773](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L773)

***

### isSittingInAnyVehicle()

```ts
isSittingInAnyVehicle(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:505](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L505)

***

### isSittingInVehicle()

```ts
isSittingInVehicle(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:509](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L509)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouching`](BaseEntity.md#istouching)

#### Defined in

[src/client/models/BaseEntity.ts:498](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L498)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouchingModel`](BaseEntity.md#istouchingmodel)

#### Defined in

[src/client/models/BaseEntity.ts:502](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L502)

***

### kill()

```ts
kill(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:541](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L541)

***

### knockPropOff()

```ts
knockPropOff(
   p1, 
   p2, 
   p3, 
   p4): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `p1` | `boolean` |
| `p2` | `boolean` |
| `p3` | `boolean` |
| `p4` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:769](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L769)

***

### leaveGroup()

```ts
leaveGroup(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:574](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L574)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`listenForStateChange`](BaseEntity.md#listenforstatechange)

#### Defined in

[src/client/models/BaseEntity.ts:93](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L93)

***

### ~~markAsNoLongerNeeded()~~

```ts
markAsNoLongerNeeded(): void
```

#### Returns

`void`

#### Deprecated

use [[IsMissionEntity]] setter as false instead.

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`markAsNoLongerNeeded`](BaseEntity.md#markasnolongerneeded)

#### Defined in

[src/client/models/BaseEntity.ts:724](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L724)

***

### openParachute()

```ts
openParachute(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:688](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L688)

***

### playAmbientSpeed()

```ts
playAmbientSpeed(
   speechName, 
   voiceName, 
   modifier): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `speechName` | `string` | `undefined` |
| `voiceName` | `string` | `''` |
| `modifier` | [`SpeechModifier`](../enumerations/SpeechModifier.md) | `SpeechModifier.Standard` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:578](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L578)

***

### ragdoll()

```ts
ragdoll(duration, ragdollType): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `duration` | `number` | `-1` |
| `ragdollType` | [`RagdollType`](../enumerations/RagdollType.md) | `RagdollType.Normal` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:667](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L667)

***

### ~~removeAllParticleEffects()~~

```ts
removeAllParticleEffects(): void
```

#### Returns

`void`

#### Deprecated

use [[removePtfxEffects]]

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeAllParticleEffects`](BaseEntity.md#removeallparticleeffects)

#### Defined in

[src/client/models/BaseEntity.ts:705](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L705)

***

### removeAllWeapons()

```ts
removeAllWeapons(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:649](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L649)

***

### removeHelmet()

```ts
removeHelmet(instantly): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:684](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L684)

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

#### Defined in

[src/client/models/BaseEntity.ts:698](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L698)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeStateListener`](BaseEntity.md#removestatelistener)

#### Defined in

[src/client/models/BaseEntity.ts:97](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L97)

***

### removeWeapon()

```ts
removeWeapon(weapon): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weapon` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:645](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L645)

***

### resetConfigFlag()

```ts
resetConfigFlag(flagId): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:700](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L700)

***

### resetOpacity()

```ts
resetOpacity(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`resetOpacity`](BaseEntity.md#resetopacity)

#### Defined in

[src/client/models/BaseEntity.ts:371](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L371)

***

### resetVisibleDamage()

```ts
resetVisibleDamage(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:556](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L556)

***

### resurrect()

```ts
resurrect(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:545](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L545)

***

### setComponentVariation()

```ts
setComponentVariation(
   componentId, 
   drawableId, 
   textureId, 
   paletteId): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `componentId` | `number` | `undefined` |
| `drawableId` | `number` | `undefined` |
| `textureId` | `number` | `undefined` |
| `paletteId` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:717](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L717)

***

### setConfigFlag()

```ts
setConfigFlag(flagId, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `flagId` | `number` |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:696](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L696)

***

### setDefaultComponentVariation()

```ts
setDefaultComponentVariation(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:730](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L730)

***

### setEyeColor()

```ts
setEyeColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:800](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L800)

***

### setHairColor()

```ts
setHairColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:812](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L812)

***

### setHairColors()

```ts
setHairColors(primary, highlight): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primary` | `number` |
| `highlight` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:808](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L808)

***

### setHairHighlightColor()

```ts
setHairHighlightColor(color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:820](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L820)

***

### setHeadBlend()

```ts
setHeadBlend(
   shapeFirstID, 
   shapeSecondID, 
   shapeThirdID, 
   skinFirstID, 
   skinSecondID, 
   skinThirdID, 
   shapeMix, 
   skinMix, 
   thirdMix, 
   isParent): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `shapeFirstID` | `number` | `undefined` |
| `shapeSecondID` | `number` | `undefined` |
| `shapeThirdID` | `number` | `undefined` |
| `skinFirstID` | `number` | `undefined` |
| `skinSecondID` | `number` | `undefined` |
| `skinThirdID` | `number` | `undefined` |
| `shapeMix` | `number` | `undefined` |
| `skinMix` | `number` | `undefined` |
| `thirdMix` | `number` | `undefined` |
| `isParent` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:872](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L872)

***

### setHeadOverlay()

```ts
setHeadOverlay(
   overlayId, 
   index, 
   opacity): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `index` | `number` |
| `opacity` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:850](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L850)

***

### setHeadOverlayColor()

```ts
setHeadOverlayColor(overlayId, color): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `color` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:862](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L862)

***

### setHeadOverlayOpacity()

```ts
setHeadOverlayOpacity(overlayId, opacity): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `opacity` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:858](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L858)

***

### setHeadOverlayValue()

```ts
setHeadOverlayValue(overlayId, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `overlayId` | `number` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:836](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L836)

***

### setHelmetPropIndex()

```ts
setHelmetPropIndex(propIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `propIndex` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:796](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L796)

***

### setIntoVehicle()

```ts
setIntoVehicle(vehicle, seat): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:513](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L513)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`setNoCollision`](BaseEntity.md#setnocollision)

#### Defined in

[src/client/models/BaseEntity.ts:416](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L416)

***

### setPropIndex()

```ts
setPropIndex(
   propId, 
   drawableId, 
   textureId, 
   attach): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `propId` | `number` | `undefined` |
| `drawableId` | `number` | `undefined` |
| `textureId` | `number` | `undefined` |
| `attach` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:757](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L757)

***

### setRandomComponentVariation()

```ts
setRandomComponentVariation(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:726](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L726)

***

### setRandomProps()

```ts
setRandomProps(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Ped.ts:753](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L753)

***

### exists()

```ts
static exists(ped): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Ped.ts:19](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L19)

***

### fromHandle()

```ts
static fromHandle(handle): null | Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

#### Defined in

[src/client/models/Ped.ts:23](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L23)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Ped`](Ped.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

#### Defined in

[src/client/models/Ped.ts:27](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/Ped.ts#L27)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`fromStateBagName`](BaseEntity.md#fromstatebagname)

#### Defined in

[src/client/models/BaseEntity.ts:16](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/models/BaseEntity.ts#L16)

[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Vehicle

# Class: Vehicle

## Extends

- [`BaseEntity`](BaseEntity.md)

## Constructors

### new Vehicle()

```ts
new Vehicle(handle): Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

[`Vehicle`](Vehicle.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`constructor`](BaseEntity.md#constructors)

#### Defined in

[src/client/models/Vehicle.ts:57](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L57)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `bones` | `protected` | `undefined` \| [`EntityBoneCollection`](EntityBoneCollection.md) | `undefined` | - | [`BaseEntity`](BaseEntity.md).`bones` | [src/client/models/BaseEntity.ts:23](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L23) |
| `handle` | `protected` | `number` | `undefined` | - | [`BaseEntity`](BaseEntity.md).`handle` | [src/client/models/BaseEntity.ts:22](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L22) |
| `netId` | `protected` | `null` \| `number` | `null` | - | [`BaseEntity`](BaseEntity.md).`netId` | [src/client/models/BaseEntity.ts:25](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L25) |
| `stateBagCookies` | `protected` | `number`[] | `[]` | - | [`BaseEntity`](BaseEntity.md).`stateBagCookies` | [src/client/models/BaseEntity.ts:24](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L24) |
| `type` | `protected` | `ClassTypes` | `ClassTypes.Vehicle` | [`BaseEntity`](BaseEntity.md).`type` | - | [src/client/models/Vehicle.ts:55](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L55) |

## Accessors

### Acceleration

```ts
get Acceleration(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:185](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L185)

***

### AlarmTimeLeft

```ts
get AlarmTimeLeft(): number
```

```ts
set AlarmTimeLeft(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:237](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L237)

***

### AreBrakeLightsOn

```ts
set AreBrakeLightsOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:362](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L362)

***

### AreHighBeamsOn

```ts
get AreHighBeamsOn(): boolean
```

```ts
set AreHighBeamsOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:305](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L305)

***

### AreLightsOn

```ts
get AreLightsOn(): boolean
```

```ts
set AreLightsOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:297](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L297)

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

[src/client/models/BaseEntity.ts:402](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L402)

***

### BodyHealth

```ts
get BodyHealth(): number
```

```ts
set BodyHealth(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:85](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L85)

***

### Bones

```ts
get Bones(): EntityBoneCollection
```

#### Returns

[`EntityBoneCollection`](EntityBoneCollection.md)

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Bones`](BaseEntity.md#bones)

#### Defined in

[src/client/models/BaseEntity.ts:395](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L395)

***

### CanBeVisiblyDamaged

```ts
set CanBeVisiblyDamaged(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:370](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L370)

***

### CanBreak

```ts
set CanBreak(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:378](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L378)

***

### CanDeformWheels

```ts
set CanDeformWheels(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:666](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L666)

***

### CanEngineDegrade

```ts
set CanEngineDegrade(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:422](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L422)

***

### CanTiresBurst

```ts
get CanTiresBurst(): boolean
```

```ts
set CanTiresBurst(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:654](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L654)

***

### CanWheelsBreak

```ts
set CanWheelsBreak(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:662](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L662)

***

### ClassDisplayName

```ts
get ClassDisplayName(): string
```

#### Returns

`string`

#### Defined in

[src/client/models/Vehicle.ts:69](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L69)

***

### ClassType

```ts
get ClassType(): VehicleClass
```

#### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

#### Defined in

[src/client/models/Vehicle.ts:81](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L81)

***

### CurrentGear

```ts
get CurrentGear(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:205](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L205)

***

### CurrentRPM

```ts
get CurrentRPM(): number
```

```ts
set CurrentRPM(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:189](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L189)

***

### DirtLevel

```ts
get DirtLevel(): number
```

```ts
set DirtLevel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:630](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L630)

***

### DisplayName

```ts
get DisplayName(): string
```

#### Returns

`string`

#### Defined in

[src/client/models/Vehicle.ts:65](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L65)

***

### Doors

```ts
get Doors(): VehicleDoorCollection
```

#### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

#### Defined in

[src/client/models/Vehicle.ts:576](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L576)

***

### Driver

```ts
get Driver(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/client/models/Vehicle.ts:513](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L513)

***

### DropsMoneyOnExplosion

```ts
set DropsMoneyOnExplosion(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:277](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L277)

***

### EngineHealth

```ts
get EngineHealth(): number
```

```ts
set EngineHealth(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:93](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L93)

***

### EnginePowerMultiplier

```ts
set EnginePowerMultiplier(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Vehicle.ts:426](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L426)

***

### EngineTorqueMultiplier

```ts
set EngineTorqueMultiplier(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Vehicle.ts:430](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L430)

***

### EstimatedMaxSpeed

```ts
get EstimatedMaxSpeed(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:181](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L181)

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

[src/client/models/BaseEntity.ts:121](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L121)

***

### FuelLevel

```ts
get FuelLevel(): number
```

```ts
set FuelLevel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:109](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L109)

***

### Ghosted

```ts
get Ghosted(): boolean
```

```ts
set Ghosted(isGhosted): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhosted` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:519](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L519)

***

### GhostedForGhostPlayers

```ts
set GhostedForGhostPlayers(isGhostedForGhostPlayers): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `isGhostedForGhostPlayers` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:524](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L524)

***

### Gravity

```ts
get Gravity(): number
```

```ts
set Gravity(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:125](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L125)

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

[src/client/models/BaseEntity.ts:35](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L35)

***

### HasBombBay

```ts
get HasBombBay(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:670](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L670)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`HasGravity`](BaseEntity.md#hasgravity)

#### Defined in

[src/client/models/BaseEntity.ts:278](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L278)

***

### HasMutedSirens

```ts
set HasMutedSirens(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:257](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L257)

***

### HasRoof

```ts
get HasRoof(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:398](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L398)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Health`](BaseEntity.md#health)

#### Defined in

[src/client/models/BaseEntity.ts:149](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L149)

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

[src/client/models/BaseEntity.ts:282](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L282)

***

### HighGear

```ts
get HighGear(): number
```

```ts
set HighGear(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:197](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L197)

***

### IsAlarmSet

```ts
get IsAlarmSet(): boolean
```

```ts
set IsAlarmSet(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:225](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L225)

***

### IsAlarmSounding

```ts
get IsAlarmSounding(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:233](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L233)

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

[src/client/models/BaseEntity.ts:177](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L177)

***

### IsAxlesStrong

```ts
set IsAxlesStrong(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:418](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L418)

***

### IsBurnoutForced

```ts
set IsBurnoutForced(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:505](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L505)

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

[src/client/models/BaseEntity.ts:383](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L383)

***

### IsConvertible

```ts
get IsConvertible(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:501](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L501)

***

### IsDamaged

```ts
get IsDamaged(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:382](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L382)

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

[src/client/models/BaseEntity.ts:173](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L173)

***

### IsDriveable

```ts
get IsDriveable(): boolean
```

```ts
set IsDriveable(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:386](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L386)

***

### IsEngineOnFire

```ts
get IsEngineOnFire(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:394](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L394)

***

### IsEngineRunning

```ts
get IsEngineRunning(): boolean
```

```ts
set IsEngineRunning(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:133](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L133)

***

### IsEngineStarting

```ts
get IsEngineStarting(): boolean
```

```ts
set IsEngineStarting(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:141](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L141)

***

### IsFrontBumperBrokenOff

```ts
get IsFrontBumperBrokenOff(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:414](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L414)

***

### IsHandbrakeForcedOn

```ts
get IsHandbrakeForcedOn(): boolean
```

```ts
set IsHandbrakeForcedOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:354](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L354)

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

[src/client/models/BaseEntity.ts:322](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L322)

***

### IsInBurnout

```ts
get IsInBurnout(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:509](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L509)

***

### IsInGhostCollision

```ts
get IsInGhostCollision(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:537](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L537)

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

[src/client/models/BaseEntity.ts:326](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L326)

***

### IsInteriorLightOn

```ts
get IsInteriorLightOn(): boolean
```

```ts
set IsInteriorLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:313](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L313)

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

[src/client/models/BaseEntity.ts:352](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L352)

***

### IsLeftHeadLightBroken

```ts
get IsLeftHeadLightBroken(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:402](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L402)

***

### IsLeftIndicatorLightOn

```ts
get IsLeftIndicatorLightOn(): boolean
```

```ts
set IsLeftIndicatorLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:337](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L337)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworkConcealed`](BaseEntity.md#isnetworkconcealed)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsNetworked`](BaseEntity.md#isnetworked)

#### Defined in

[src/client/models/BaseEntity.ts:42](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L42)

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

[src/client/models/BaseEntity.ts:306](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L306)

***

### IsOnAllWheels

```ts
get IsOnAllWheels(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:481](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L481)

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

[src/client/models/BaseEntity.ts:348](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L348)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsOnlyDamagedByPlayer`](BaseEntity.md#isonlydamagedbyplayer)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPersistent`](BaseEntity.md#ispersistent)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsPositionFrozen`](BaseEntity.md#ispositionfrozen)

#### Defined in

[src/client/models/BaseEntity.ts:254](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L254)

***

### IsRadioEnabled

```ts
get IsRadioEnabled(): boolean
```

```ts
set IsRadioEnabled(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:152](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L152)

***

### IsRearBumperBrokenOff

```ts
get IsRearBumperBrokenOff(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:410](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L410)

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

[src/client/models/BaseEntity.ts:391](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L391)

***

### IsRightHeadLightBroken

```ts
get IsRightHeadLightBroken(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:406](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L406)

***

### IsRightIndicatorLightOn

```ts
get IsRightIndicatorLightOn(): boolean
```

```ts
set IsRightIndicatorLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:346](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L346)

***

### IsSearchLightOn

```ts
get IsSearchLightOn(): boolean
```

```ts
set IsSearchLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:321](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L321)

***

### IsSirenActive

```ts
get IsSirenActive(): boolean
```

```ts
set IsSirenActive(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:249](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L249)

***

### IsStolen

```ts
get IsStolen(): boolean
```

```ts
set IsStolen(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:493](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L493)

***

### IsStopped

```ts
get IsStopped(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:485](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L485)

***

### IsStoppedAtTrafficLights

```ts
get IsStoppedAtTrafficLights(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:489](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L489)

***

### IsTaxiLightOn

```ts
get IsTaxiLightOn(): boolean
```

```ts
set IsTaxiLightOn(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:329](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L329)

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

[src/client/models/BaseEntity.ts:314](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L314)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`IsVisible`](BaseEntity.md#isvisible)

#### Defined in

[src/client/models/BaseEntity.ts:298](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L298)

***

### IsWanted

```ts
get IsWanted(): boolean
```

```ts
set IsWanted(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:265](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L265)

***

### LandingGearState

```ts
get LandingGearState(): VehicleLandingGearState
```

```ts
set LandingGearState(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md) |

#### Returns

[`VehicleLandingGearState`](../enumerations/VehicleLandingGearState.md)

#### Defined in

[src/client/models/Vehicle.ts:434](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L434)

***

### LightsMultiplier

```ts
set LightsMultiplier(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Vehicle.ts:366](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L366)

***

### LockStatus

```ts
get LockStatus(): VehicleLockStatus
```

```ts
set LockStatus(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleLockStatus`](../enumerations/VehicleLockStatus.md) |

#### Returns

[`VehicleLockStatus`](../enumerations/VehicleLockStatus.md)

#### Defined in

[src/client/models/Vehicle.ts:465](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L465)

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

[src/client/models/BaseEntity.ts:290](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L290)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`Matrix`](BaseEntity.md#matrix)

#### Defined in

[src/client/models/BaseEntity.ts:125](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L125)

***

### MaxBraking

```ts
get MaxBraking(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:473](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L473)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxHealth`](BaseEntity.md#maxhealth)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`MaxSpeed`](BaseEntity.md#maxspeed)

#### Defined in

[src/client/models/BaseEntity.ts:274](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L274)

***

### MaxTraction

```ts
get MaxTraction(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:477](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L477)

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

[src/client/models/BaseEntity.ts:195](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L195)

***

### Mods

```ts
get Mods(): VehicleModCollection
```

#### Returns

[`VehicleModCollection`](VehicleModCollection.md)

#### Defined in

[src/client/models/Vehicle.ts:583](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L583)

***

### NeedsToBeHotwired

```ts
get NeedsToBeHotwired(): boolean
```

```ts
set NeedsToBeHotwired(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:289](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L289)

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

[src/client/models/BaseEntity.ts:54](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L54)

***

### NumberPlate

```ts
get NumberPlate(): string
```

```ts
set NumberPlate(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/models/Vehicle.ts:73](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L73)

***

### Occupants

```ts
get Occupants(): Ped[]
```

#### Returns

[`Ped`](Ped.md)[]

#### Defined in

[src/client/models/Vehicle.ts:546](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L546)

***

### OilLevel

```ts
get OilLevel(): number
```

```ts
set OilLevel(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:117](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L117)

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

[src/client/models/BaseEntity.ts:360](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L360)

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

[src/client/models/BaseEntity.ts:105](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L105)

***

### PassengerCapacity

```ts
get PassengerCapacity(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:721](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L721)

***

### PassengerCount

```ts
get PassengerCount(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:725](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L725)

***

### Passengers

```ts
get Passengers(): Ped[]
```

#### Returns

[`Ped`](Ped.md)[]

#### Defined in

[src/client/models/Vehicle.ts:556](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L556)

***

### PetrolTankHealth

```ts
get PetrolTankHealth(): number
```

```ts
set PetrolTankHealth(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:101](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L101)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`PositionNoOffset`](BaseEntity.md#positionnooffset)

#### Defined in

[src/client/models/BaseEntity.ts:225](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L225)

***

### PreviouslyOwnedByPlayer

```ts
get PreviouslyOwnedByPlayer(): boolean
```

```ts
set PreviouslyOwnedByPlayer(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:281](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L281)

***

### ProvidesCover

```ts
set ProvidesCover(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:273](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L273)

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

[src/client/models/BaseEntity.ts:237](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L237)

***

### RadioStation

```ts
set RadioStation(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`RadioStation`](../enumerations/RadioStation.md) |

#### Defined in

[src/client/models/Vehicle.ts:163](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L163)

***

### RespotTimer

```ts
set RespotTimer(time): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `time` | `number` |

#### Defined in

[src/client/models/Vehicle.ts:729](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L729)

***

### RoofState

```ts
get RoofState(): VehicleRoofState
```

```ts
set RoofState(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`VehicleRoofState`](../enumerations/VehicleRoofState.md) |

#### Returns

[`VehicleRoofState`](../enumerations/VehicleRoofState.md)

#### Defined in

[src/client/models/Vehicle.ts:442](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L442)

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

[src/client/models/BaseEntity.ts:229](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L229)

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

[src/client/models/BaseEntity.ts:270](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L270)

***

### Speed

```ts
set Speed(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Overrides

[`BaseEntity`](BaseEntity.md).[`Speed`](BaseEntity.md#speed)

#### Defined in

[src/client/models/Vehicle.ts:168](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L168)

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

[src/client/models/BaseEntity.ts:69](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L69)

***

### SteeringAngle

```ts
get SteeringAngle(): number
```

```ts
set SteeringAngle(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:209](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L209)

***

### SteeringScale

```ts
get SteeringScale(): number
```

```ts
set SteeringScale(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:217](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L217)

***

### Strong

```ts
set Strong(toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `toggle` | `boolean` |

#### Defined in

[src/client/models/Vehicle.ts:374](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L374)

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

[src/client/models/BaseEntity.ts:286](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L286)

***

### TowedVehicle

```ts
get TowedVehicle(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Defined in

[src/client/models/Vehicle.ts:698](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L698)

***

### TowingCraneRaisedAmount

```ts
set TowingCraneRaisedAmount(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Defined in

[src/client/models/Vehicle.ts:694](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L694)

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

[src/client/models/BaseEntity.ts:262](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L262)

***

### WheelSpeed

```ts
get WheelSpeed(): number
```

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:177](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L177)

***

### Wheels

```ts
get Wheels(): VehicleWheelCollection
```

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Defined in

[src/client/models/Vehicle.ts:590](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L590)

***

### Windows

```ts
get Windows(): VehicleWindowCollection
```

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Defined in

[src/client/models/Vehicle.ts:597](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L597)

***

### GhostAlpha

```ts
set static GhostAlpha(alpha): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `alpha` | `number` |

#### Defined in

[src/client/models/Vehicle.ts:533](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L533)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForce`](BaseEntity.md#applyforce)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`applyForceRelative`](BaseEntity.md#applyforcerelative)

#### Defined in

[src/client/models/BaseEntity.ts:672](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L672)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachTo`](BaseEntity.md#attachto)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`attachToBone`](BaseEntity.md#attachtobone)

#### Defined in

[src/client/models/BaseEntity.ts:600](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L600)

***

### clearLastWeaponDamage()

```ts
clearLastWeaponDamage(): void
```

#### Returns

`void`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`clearLastWeaponDamage`](BaseEntity.md#clearlastweapondamage)

#### Defined in

[src/client/models/BaseEntity.ts:444](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L444)

***

### closeBombBay()

```ts
closeBombBay(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:682](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L682)

***

### deform()

```ts
deform(
   position, 
   damageAmount, 
   radius): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |
| `damageAmount` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:717](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L717)

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

[src/client/models/BaseEntity.ts:713](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L713)

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

[src/client/models/BaseEntity.ts:633](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L633)

***

### detachFromTowTruck()

```ts
detachFromTowTruck(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:706](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L706)

***

### detachTowedVehicle()

```ts
detachTowedVehicle(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:710](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L710)

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

[src/client/models/Vehicle.ts:61](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L61)

***

### explode()

```ts
explode(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:646](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L646)

***

### explodeNetworked()

```ts
explodeNetworked(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:650](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L650)

***

### extraExists()

```ts
extraExists(extra): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:604](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L604)

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

[src/client/models/BaseEntity.ts:645](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L645)

***

### getHandlingFloat()

```ts
getHandlingFloat(fieldName): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:733](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L733)

***

### getHandlingInt()

```ts
getHandlingInt(fieldName): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

`number`

#### Defined in

[src/client/models/Vehicle.ts:741](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L741)

***

### getHandlingVector()

```ts
getHandlingVector(fieldName): Vector3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/models/Vehicle.ts:749](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L749)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetInWorldCoords`](BaseEntity.md#getoffsetinworldcoords)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getOffsetPosition`](BaseEntity.md#getoffsetposition)

#### Defined in

[src/client/models/BaseEntity.ts:549](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L549)

***

### getPedOnSeat()

```ts
getPedOnSeat(seat): Ped
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

[`Ped`](Ped.md)

#### Defined in

[src/client/models/Vehicle.ts:618](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L618)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`getSpeedVector`](BaseEntity.md#getspeedvector)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedBy`](BaseEntity.md#hasbeendamagedby)

#### Defined in

[src/client/models/BaseEntity.ts:428](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L428)

***

### hasBeenDamagedByAnyMeleeWeapon()

```ts
hasBeenDamagedByAnyMeleeWeapon(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyMeleeWeapon`](BaseEntity.md#hasbeendamagedbyanymeleeweapon)

#### Defined in

[src/client/models/BaseEntity.ts:440](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L440)

***

### hasBeenDamagedByAnyWeapon()

```ts
hasBeenDamagedByAnyWeapon(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByAnyWeapon`](BaseEntity.md#hasbeendamagedbyanyweapon)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasBeenDamagedByWeapon`](BaseEntity.md#hasbeendamagedbyweapon)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntity`](BaseEntity.md#hasclearlostoentity)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`hasClearLosToEntityInFront`](BaseEntity.md#hasclearlostoentityinfront)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAlive`](BaseEntity.md#isalive-1)

#### Defined in

[src/client/models/BaseEntity.ts:191](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L191)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isAttachedTo`](BaseEntity.md#isattachedto)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isDead`](BaseEntity.md#isdead-1)

#### Defined in

[src/client/models/BaseEntity.ts:184](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L184)

***

### isExtraOn()

```ts
isExtraOn(extra): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:608](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L608)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInArea`](BaseEntity.md#isinarea)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isInRangeOf`](BaseEntity.md#isinrangeof)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isNearEntity`](BaseEntity.md#isnearentity)

#### Defined in

[src/client/models/BaseEntity.ts:485](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L485)

***

### isSeatFree()

```ts
isSeatFree(seat): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:622](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L622)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`isTouchingModel`](BaseEntity.md#istouchingmodel)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`listenForStateChange`](BaseEntity.md#listenforstatechange)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`markAsNoLongerNeeded`](BaseEntity.md#markasnolongerneeded)

#### Defined in

[src/client/models/BaseEntity.ts:724](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L724)

***

### openBombBay()

```ts
openBombBay(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:676](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L676)

***

### placeOnGround()

```ts
placeOnGround(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:638](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L638)

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

[src/client/models/BaseEntity.ts:705](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L705)

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

#### Inherited from

[`BaseEntity`](BaseEntity.md).[`removeStateListener`](BaseEntity.md#removestatelistener)

#### Defined in

[src/client/models/BaseEntity.ts:97](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L97)

***

### repair()

```ts
repair(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:642](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L642)

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

[src/client/models/BaseEntity.ts:371](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L371)

***

### setHandlingFloat()

```ts
setHandlingFloat(fieldName, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:737](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L737)

***

### setHandlingInt()

```ts
setHandlingInt(fieldName, value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fieldName` | `string` |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:745](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L745)

***

### setHeliYawPitchRollMult()

```ts
setHeliYawPitchRollMult(mult): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mult` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:688](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L688)

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

[src/client/models/BaseEntity.ts:416](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L416)

***

### soundHorn()

```ts
soundHorn(duration, mode): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |
| `mode` | `number` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:261](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L261)

***

### startAlarm()

```ts
startAlarm(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:245](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L245)

***

### toggleExtra()

```ts
toggleExtra(extra, toggle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `extra` | `number` |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:612](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L612)

***

### towVehicle()

```ts
towVehicle(vehicle, rear): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `rear` | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:702](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L702)

***

### wash()

```ts
wash(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:626](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L626)

***

### exists()

```ts
static exists(vehicle): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/Vehicle.ts:35](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L35)

***

### fromHandle()

```ts
static fromHandle(handle): null | Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Defined in

[src/client/models/Vehicle.ts:39](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L39)

***

### fromNetworkId()

```ts
static fromNetworkId(networkId): null | Vehicle
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `networkId` | `number` |

#### Returns

`null` \| [`Vehicle`](Vehicle.md)

#### Overrides

[`BaseEntity`](BaseEntity.md).[`fromNetworkId`](BaseEntity.md#fromnetworkid)

#### Defined in

[src/client/models/Vehicle.ts:44](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L44)

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

[src/client/models/BaseEntity.ts:16](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/BaseEntity.ts#L16)

***

### getClassDisplayName()

```ts
static getClassDisplayName(vehicleClass): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleClass` | [`VehicleClass`](../enumerations/VehicleClass.md) |

#### Returns

`string`

#### Defined in

[src/client/models/Vehicle.ts:31](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L31)

***

### getModelClass()

```ts
static getModelClass(vehicleModel): VehicleClass
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

[`VehicleClass`](../enumerations/VehicleClass.md)

#### Defined in

[src/client/models/Vehicle.ts:27](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L27)

***

### getModelDisplayName()

```ts
static getModelDisplayName(vehicleModel): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicleModel` | [`Model`](Model.md) |

#### Returns

`string`

#### Defined in

[src/client/models/Vehicle.ts:23](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L23)

***

### resetGhostAlpha()

```ts
static resetGhostAlpha(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/Vehicle.ts:542](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/Vehicle.ts#L542)

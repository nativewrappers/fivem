[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Tasks

# Class: Tasks

## Constructors

### new Tasks()

```ts
new Tasks(ped): Tasks
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/client/Tasks.ts:17](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L17)

## Methods

### achieveHeading()

```ts
achieveHeading(heading, timeout): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `heading` | `number` | `undefined` |
| `timeout` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:21](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L21)

***

### aimAt()

```ts
aimAt(target, duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:29](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L29)

***

### arrest()

```ts
arrest(ped): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:35](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L35)

***

### blockTemporaryEvents()

```ts
blockTemporaryEvents(block): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `block` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:25](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L25)

***

### chaseWithGroundVehicle()

```ts
chaseWithGroundVehicle(target): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:59](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L59)

***

### chaseWithHelicopter()

```ts
chaseWithHelicopter(target, offset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:63](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L63)

***

### chaseWithPlane()

```ts
chaseWithPlane(target, offset): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) |
| `offset` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:67](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L67)

***

### chatTo()

```ts
chatTo(ped): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:39](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L39)

***

### clearAll()

```ts
clearAll(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:458](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L458)

***

### clearAllImmediately()

```ts
clearAllImmediately(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:462](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L462)

***

### clearAnimation()

```ts
clearAnimation(animDict, animName): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:474](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L474)

***

### clearLookAt()

```ts
clearLookAt(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:466](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L466)

***

### clearSecondary()

```ts
clearSecondary(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:470](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L470)

***

### climb()

```ts
climb(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:47](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L47)

***

### climbLadder()

```ts
climbLadder(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:51](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L51)

***

### cower()

```ts
cower(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:55](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L55)

***

### cruiseWithVehicle()

```ts
cruiseWithVehicle(
   vehicle, 
   speed, 
   drivingstyle): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `speed` | `number` | `undefined` |
| `drivingstyle` | [`DrivingStyle`](../enumerations/DrivingStyle.md) | `DrivingStyle.None` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:71](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L71)

***

### driveTo()

```ts
driveTo(
   vehicle, 
   target, 
   radius, 
   speed, 
   drivingstyle): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `target` | [`Vector3`](Vector3.md) | `undefined` |
| `radius` | `number` | `undefined` |
| `speed` | `number` | `undefined` |
| `drivingstyle` | [`DrivingStyle`](../enumerations/DrivingStyle.md) | `DrivingStyle.None` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:79](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L79)

***

### enterAnyVehicle()

```ts
enterAnyVehicle(
   seat, 
   timeout, 
   speed, 
   flag): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) | `VehicleSeat.Any` |
| `timeout` | `number` | `-1` |
| `speed` | `number` | `0` |
| `flag` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:98](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L98)

***

### fightAgainst()

```ts
fightAgainst(target, duration?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |
| `duration`? | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:106](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L106)

***

### fightAgainstHatedTargets()

```ts
fightAgainstHatedTargets(radius, duration?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `radius` | `number` |
| `duration`? | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:114](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L114)

***

### fleeFrom()

```ts
fleeFrom(pedOrPosition, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `pedOrPosition` | [`Vector3`](Vector3.md) \| [`Ped`](Ped.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:122](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L122)

***

### followPointRoute()

```ts
followPointRoute(points): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `points` | [`Vector3`](Vector3.md)[] |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:139](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L139)

***

### followToOffsetFromEntity()

```ts
followToOffsetFromEntity(
   target, 
   offset, 
   timeout, 
   stoppingRange, 
   movementSpeed, 
   persistFollowing): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `offset` | [`Vector3`](Vector3.md) | `undefined` |
| `timeout` | `number` | `undefined` |
| `stoppingRange` | `number` | `undefined` |
| `movementSpeed` | `number` | `1` |
| `persistFollowing` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:147](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L147)

***

### goTo()

```ts
goTo(
   position, 
   ignorePaths, 
   timeout, 
   speed): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `ignorePaths` | `boolean` | `false` |
| `timeout` | `number` | `-1` |
| `speed` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:168](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L168)

***

### goToEntity()

```ts
goToEntity(
   target, 
   offset, 
   timeout): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `target` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `offset` | `null` \| [`Vector3`](Vector3.md) | `null` |
| `timeout` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:195](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L195)

***

### guardCurrentPosition()

```ts
guardCurrentPosition(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:212](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L212)

***

### handsUp()

```ts
handsUp(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:216](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L216)

***

### isPlayingAnim()

```ts
isPlayingAnim(
   dict, 
   anim, 
   taskFlag): boolean
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `dict` | `string` | `undefined` |
| `anim` | `string` | `undefined` |
| `taskFlag` | `number` | `3` |

#### Returns

`boolean`

#### Defined in

[src/client/Tasks.ts:454](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L454)

***

### jump()

```ts
jump(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:43](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L43)

***

### landPlane()

```ts
landPlane(
   startPosition, 
   touchdownPosition, 
   plane): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `startPosition` | [`Vector3`](Vector3.md) | `undefined` |
| `touchdownPosition` | [`Vector3`](Vector3.md) | `undefined` |
| `plane` | `null` \| [`Vehicle`](Vehicle.md) | `null` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:220](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L220)

***

### lookAt()

```ts
lookAt(targetOrPosition, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:254](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L254)

***

### parachuteTo()

```ts
parachuteTo(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:269](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L269)

***

### parkVehicle()

```ts
parkVehicle(
   vehicle, 
   position, 
   heading, 
   radius, 
   keepEngineOn): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `radius` | `number` | `20` |
| `keepEngineOn` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:273](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L273)

***

### performSequence()

```ts
performSequence(sequence): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sequence` | [`TaskSequence`](TaskSequence.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:293](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L293)

***

### playAnimation()

```ts
playAnimation(
   animDict, 
   animName, 
   blendInSpeed, 
   blendOutSpeed, 
   duration, 
   playbackRate, 
flags): Promise<void>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed` | `number` |
| `blendOutSpeed` | `number` |
| `duration` | `number` |
| `playbackRate` | `number` |
| `flags` | [`AnimationFlags`](../enumerations/AnimationFlags.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/Tasks.ts:304](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L304)

***

### putAwayMobilePhone()

```ts
putAwayMobilePhone(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:424](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L424)

***

### putAwayParachute()

```ts
putAwayParachute(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:420](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L420)

***

### reactAndFlee()

```ts
reactAndFlee(ped): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:332](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L332)

***

### reloadWeapon()

```ts
reloadWeapon(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:336](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L336)

***

### shootAt()

```ts
shootAt(
   targetOrPosition, 
   duration, 
   pattern): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`Vector3`](Vector3.md) \| [`Ped`](Ped.md) | `undefined` |
| `duration` | `number` | `-1` |
| `pattern` | [`FiringPattern`](../enumerations/FiringPattern.md) | `FiringPattern.Default` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:340](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L340)

***

### shuffleToNextVehicleSeat()

```ts
shuffleToNextVehicleSeat(vehicle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:358](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L358)

***

### skyDive()

```ts
skyDive(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:362](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L362)

***

### slideTo()

```ts
slideTo(
   position, 
   heading, 
   duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `undefined` |
| `duration` | `number` | `0.7` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:366](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L366)

***

### standStill()

```ts
standStill(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:370](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L370)

***

### startScenario()

```ts
startScenario(
   name, 
   position, 
   heading, 
   duration, 
   sittingScenario, 
   teleport): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `name` | `string` | `undefined` |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `heading` | `number` | `0` |
| `duration` | `number` | `0` |
| `sittingScenario` | `boolean` | `false` |
| `teleport` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:374](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L374)

***

### swapWeapon()

```ts
swapWeapon(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:395](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L395)

***

### turnTo()

```ts
turnTo(targetOrPosition, duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `targetOrPosition` | [`BaseEntity`](BaseEntity.md) \| [`Vector3`](Vector3.md) | `undefined` |
| `duration` | `number` | `-1` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:399](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L399)

***

### useMobilePhone()

```ts
useMobilePhone(duration): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `duration` | `number` | `1` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:416](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L416)

***

### useParachute()

```ts
useParachute(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:412](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L412)

***

### vehicleChase()

```ts
vehicleChase(target): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:428](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L428)

***

### vehicleShootAtPed()

```ts
vehicleShootAtPed(target): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `target` | [`Ped`](Ped.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:432](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L432)

***

### wait()

```ts
wait(duration): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:436](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L436)

***

### wanderAround()

```ts
wanderAround(position?, radius?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position`? | [`Vector3`](Vector3.md) |
| `radius`? | `number` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:440](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L440)

***

### warpIntoVehicle()

```ts
warpIntoVehicle(vehicle, seat): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `seat` | [`VehicleSeat`](../enumerations/VehicleSeat.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:446](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L446)

***

### warpOutOfVehicle()

```ts
warpOutOfVehicle(vehicle, flags): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |
| `flags` | [`LeaveVehicleFlags`](../enumerations/LeaveVehicleFlags.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:450](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L450)

***

### everyoneLeaveVehicle()

```ts
static everyoneLeaveVehicle(vehicle): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | [`Vehicle`](Vehicle.md) |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:102](https://github.com/nativewrappers/fivem/blob/48a3f351defb1a6508113ef71a8290d8cb1a458c/src/client/Tasks.ts#L102)

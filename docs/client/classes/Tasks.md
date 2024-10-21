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
| `ped` | `null` \| [`Ped`](Ped.md) |

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/client/Tasks.ts:19](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L19)

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

[src/client/Tasks.ts:25](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L25)

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

[src/client/Tasks.ts:33](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L33)

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

[src/client/Tasks.ts:39](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L39)

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

[src/client/Tasks.ts:29](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L29)

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

[src/client/Tasks.ts:63](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L63)

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

[src/client/Tasks.ts:67](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L67)

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

[src/client/Tasks.ts:71](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L71)

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

[src/client/Tasks.ts:43](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L43)

***

### clearAll()

```ts
clearAll(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:470](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L470)

***

### clearAllImmediately()

```ts
clearAllImmediately(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:474](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L474)

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

[src/client/Tasks.ts:486](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L486)

***

### clearLookAt()

```ts
clearLookAt(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:478](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L478)

***

### clearSecondary()

```ts
clearSecondary(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:482](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L482)

***

### climb()

```ts
climb(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:51](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L51)

***

### climbLadder()

```ts
climbLadder(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:55](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L55)

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

[src/client/Tasks.ts:59](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L59)

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

[src/client/Tasks.ts:75](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L75)

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

[src/client/Tasks.ts:83](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L83)

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

[src/client/Tasks.ts:102](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L102)

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

[src/client/Tasks.ts:110](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L110)

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

[src/client/Tasks.ts:118](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L118)

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

[src/client/Tasks.ts:126](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L126)

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

[src/client/Tasks.ts:143](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L143)

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

[src/client/Tasks.ts:151](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L151)

***

### goTo()

```ts
goTo(
   position, 
   ignorePaths, 
   timeout, 
   speed, 
   targetHeading, 
   distanceToSlide, 
   flags): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `ignorePaths` | `boolean` | `false` |
| `timeout` | `number` | `-1` |
| `speed` | `number` | `1` |
| `targetHeading` | `number` | `0` |
| `distanceToSlide` | `number` | `0` |
| `flags` | `number` | `0` |

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:172](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L172)

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

[src/client/Tasks.ts:207](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L207)

***

### guardCurrentPosition()

```ts
guardCurrentPosition(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:224](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L224)

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

[src/client/Tasks.ts:228](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L228)

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

[src/client/Tasks.ts:466](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L466)

***

### jump()

```ts
jump(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:47](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L47)

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

[src/client/Tasks.ts:232](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L232)

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

[src/client/Tasks.ts:266](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L266)

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

[src/client/Tasks.ts:281](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L281)

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

[src/client/Tasks.ts:285](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L285)

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

[src/client/Tasks.ts:305](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L305)

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

[src/client/Tasks.ts:316](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L316)

***

### putAwayMobilePhone()

```ts
putAwayMobilePhone(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:436](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L436)

***

### putAwayParachute()

```ts
putAwayParachute(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:432](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L432)

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

[src/client/Tasks.ts:344](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L344)

***

### reloadWeapon()

```ts
reloadWeapon(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:348](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L348)

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

[src/client/Tasks.ts:352](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L352)

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

[src/client/Tasks.ts:370](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L370)

***

### skyDive()

```ts
skyDive(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:374](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L374)

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

[src/client/Tasks.ts:378](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L378)

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

[src/client/Tasks.ts:382](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L382)

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

[src/client/Tasks.ts:386](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L386)

***

### swapWeapon()

```ts
swapWeapon(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:407](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L407)

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

[src/client/Tasks.ts:411](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L411)

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

[src/client/Tasks.ts:428](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L428)

***

### useParachute()

```ts
useParachute(): void
```

#### Returns

`void`

#### Defined in

[src/client/Tasks.ts:424](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L424)

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

[src/client/Tasks.ts:440](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L440)

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

[src/client/Tasks.ts:444](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L444)

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

[src/client/Tasks.ts:448](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L448)

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

[src/client/Tasks.ts:452](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L452)

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

[src/client/Tasks.ts:458](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L458)

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

[src/client/Tasks.ts:462](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L462)

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

[src/client/Tasks.ts:106](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/Tasks.ts#L106)

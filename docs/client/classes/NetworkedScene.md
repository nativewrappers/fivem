[@nativewrappers/fivem](../../README.md) / [client](../README.md) / NetworkedScene

# Class: NetworkedScene

## Constructors

### new NetworkedScene()

```ts
new NetworkedScene(
   pos, 
   rot, 
   rotationOrder, 
   holdLastFrame, 
   looped, 
   sceneHash, 
   animTime, 
   animSpeed): NetworkedScene
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `pos` | [`Vector3`](Vector3.md) |
| `rot` | [`Vector3`](Vector3.md) |
| `rotationOrder` | `number` |
| `holdLastFrame` | `boolean` |
| `looped` | `boolean` |
| `sceneHash` | `number` |
| `animTime` | `number` |
| `animSpeed` | `number` |

#### Returns

[`NetworkedScene`](NetworkedScene.md)

#### Defined in

[src/client/NetworkedScene.ts:5](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/NetworkedScene.ts#L5)

## Methods

### addEntity()

```ts
addEntity(
   entity, 
   animDict, 
   animName, 
   speed, 
   speedMultiplier, 
   flag): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | [`BaseEntity`](BaseEntity.md) |
| `animDict` | `string` |
| `animName` | `string` |
| `speed` | `number` |
| `speedMultiplier` | `number` |
| `flag` | `number` |

#### Returns

`void`

#### Defined in

[src/client/NetworkedScene.ts:56](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/NetworkedScene.ts#L56)

***

### addPed()

```ts
addPed(
   ped, 
   animDict, 
   animName, 
   blendInSpeed, 
   blendOutSpeed, 
   duration, 
   flag, 
   playbackRate, 
   p9): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | [`Ped`](Ped.md) |
| `animDict` | `string` |
| `animName` | `string` |
| `blendInSpeed` | `number` |
| `blendOutSpeed` | `number` |
| `duration` | `number` |
| `flag` | `number` |
| `playbackRate` | `number` |
| `p9` | `number` |

#### Returns

`void`

#### Defined in

[src/client/NetworkedScene.ts:31](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/NetworkedScene.ts#L31)

***

### start()

```ts
start(): void
```

#### Returns

`void`

#### Defined in

[src/client/NetworkedScene.ts:75](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/NetworkedScene.ts#L75)

***

### stop()

```ts
stop(): void
```

#### Returns

`void`

#### Defined in

[src/client/NetworkedScene.ts:79](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/NetworkedScene.ts#L79)

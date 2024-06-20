[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Audio

# Class: `abstract` Audio

## Constructors

### new Audio()

```ts
new Audio(): Audio
```

#### Returns

[`Audio`](Audio.md)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `audioFlags` | `private` | `string`[] | `...` |
| `cachedMusicFile` | `static` | `string` | `undefined` |

## Methods

### hasSoundFinished()

```ts
static hasSoundFinished(soundId): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `soundId` | `number` |

#### Returns

`boolean`

#### Source

[src/client/Audio.ts:52](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L52)

***

### playMusic()

```ts
static playMusic(musicFile): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `musicFile` | `string` |

#### Returns

`void`

#### Source

[src/client/Audio.ts:68](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L68)

***

### playSound()

```ts
static playSound(soundFile, soundSet): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `soundFile` | `string` |
| `soundSet` | `string` |

#### Returns

`void`

#### Source

[src/client/Audio.ts:64](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L64)

***

### playSoundAt()

```ts
static playSoundAt(
   position, 
   sound, 
   set?, 
   generateSoundId?): number
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `position` | [`Vector3`](Vector3.md) | `undefined` |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

#### Source

[src/client/Audio.ts:6](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L6)

***

### playSoundFromEntity()

```ts
static playSoundFromEntity(
   entity, 
   sound, 
   set?, 
   generateSoundId?): number
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `entity` | [`BaseEntity`](BaseEntity.md) | `undefined` |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

#### Source

[src/client/Audio.ts:27](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L27)

***

### playSoundFrontEnd()

```ts
static playSoundFrontEnd(
   sound, 
   set?, 
   generateSoundId?): number
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `sound` | `string` | `undefined` |
| `set`? | `string` | `undefined` |
| `generateSoundId`? | `boolean` | `true` |

#### Returns

`number`

#### Source

[src/client/Audio.ts:38](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L38)

***

### releaseSound()

```ts
static releaseSound(soundId): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `soundId` | `number` |

#### Returns

`void`

#### Source

[src/client/Audio.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L48)

***

### setAudioFlag()

```ts
static setAudioFlag(flag, toggle): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flag` | `string` \| [`AudioFlag`](../enumerations/AudioFlag.md) |
| `toggle` | `boolean` |

#### Returns

`void`

#### Source

[src/client/Audio.ts:56](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L56)

***

### stopMusic()

```ts
static stopMusic(musicFile?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `musicFile`? | `string` |

#### Returns

`void`

#### Source

[src/client/Audio.ts:76](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L76)

***

### stopSound()

```ts
static stopSound(soundId): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `soundId` | `number` |

#### Returns

`void`

#### Source

[src/client/Audio.ts:44](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Audio.ts#L44)

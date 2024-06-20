[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Blip

# Class: Blip

## Constructors

### new Blip()

```ts
new Blip(handle): Blip
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

[`Blip`](Blip.md)

#### Source

[src/client/Blip.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L8)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `handle` | `protected` | `number` |

## Accessors

### Alpha

```ts
get Alpha(): number
```

```ts
set Alpha(alpha): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alpha` | `number` |

#### Returns

`number`

#### Source

[src/client/Blip.ts:36](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L36)

***

### Color

```ts
get Color(): BlipColor
```

```ts
set Color(color): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `color` | [`BlipColor`](../enumerations/BlipColor.md) |

#### Returns

[`BlipColor`](../enumerations/BlipColor.md)

#### Source

[src/client/Blip.ts:52](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L52)

***

### Display

```ts
set Display(display): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `display` | `number` |

#### Source

[src/client/Blip.ts:68](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L68)

***

### Entity

```ts
get Entity(): null | BaseEntity
```

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Source

[src/client/Blip.ts:82](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L82)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Source

[src/client/Blip.ts:12](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L12)

***

### IsCrew

```ts
set IsCrew(crew): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `crew` | `boolean` |

#### Source

[src/client/Blip.ts:102](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L102)

***

### IsFlashing

```ts
get IsFlashing(): boolean
```

```ts
set IsFlashing(flashing): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flashing` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/Blip.ts:106](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L106)

***

### IsFriend

```ts
set IsFriend(friend): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `friend` | `boolean` |

#### Source

[src/client/Blip.ts:98](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L98)

***

### IsFriendly

```ts
set IsFriendly(friendly): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `friendly` | `boolean` |

#### Source

[src/client/Blip.ts:94](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L94)

***

### IsOnMinimap

```ts
get IsOnMinimap(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/Blip.ts:114](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L114)

***

### IsShortRange

```ts
get IsShortRange(): boolean
```

```ts
set IsShortRange(shortRange): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shortRange` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/Blip.ts:118](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L118)

***

### Name

```ts
set Name(name): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Source

[src/client/Blip.ts:72](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L72)

***

### NumberLabel

```ts
set NumberLabel(number): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `number` | `number` |

#### Source

[src/client/Blip.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L48)

***

### Position

```ts
get Position(): Vector3
```

```ts
set Position(location): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `location` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/Blip.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L16)

***

### Priority

```ts
set Priority(priority): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `priority` | `number` |

#### Source

[src/client/Blip.ts:44](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L44)

***

### Rotation

```ts
set Rotation(rotation): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `rotation` | `number` |

#### Source

[src/client/Blip.ts:24](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L24)

***

### Scale

```ts
set Scale(scale): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scale` | `number` |

#### Source

[src/client/Blip.ts:28](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L28)

***

### ShowHeadingIndicator

```ts
set ShowHeadingIndicator(show): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Source

[src/client/Blip.ts:86](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L86)

***

### ShowRoute

```ts
set ShowRoute(show): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `show` | `boolean` |

#### Source

[src/client/Blip.ts:90](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L90)

***

### Sprite

```ts
get Sprite(): BlipSprite
```

```ts
set Sprite(sprite): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sprite` | [`BlipSprite`](../enumerations/BlipSprite.md) |

#### Returns

[`BlipSprite`](../enumerations/BlipSprite.md)

#### Source

[src/client/Blip.ts:60](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L60)

***

### Type

```ts
get Type(): number
```

#### Returns

`number`

#### Source

[src/client/Blip.ts:32](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L32)

## Methods

### delete()

```ts
delete(): void
```

#### Returns

`void`

#### Source

[src/client/Blip.ts:130](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L130)

***

### exists()

```ts
exists(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/Blip.ts:136](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L136)

***

### removeNumberLabel()

```ts
removeNumberLabel(): void
```

#### Returns

`void`

#### Source

[src/client/Blip.ts:126](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L126)

***

### setNameToPlayerName()

```ts
setNameToPlayerName(player): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `player` | [`Player`](Player.md) |

#### Returns

`void`

#### Source

[src/client/Blip.ts:78](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Blip.ts#L78)

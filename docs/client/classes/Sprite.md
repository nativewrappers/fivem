[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Sprite

# Class: Sprite

## Constructors

### new Sprite()

```ts
new Sprite(
   textureDict, 
   textureName, 
   pos?, 
   size?, 
   heading?, 
   color?): Sprite
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `textureDict` | `string` | `undefined` |
| `textureName` | `string` | `undefined` |
| `pos`? | [`Point`](Point.md) | `undefined` |
| `size`? | [`Size`](Size.md) | `undefined` |
| `heading`? | `number` | `0` |
| `color`? | [`Color`](Color.md) | `Color.white` |

#### Returns

[`Sprite`](Sprite.md)

#### Source

[src/client/ui/Sprite.ts:14](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Sprite.ts#L14)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `_textureDict` | `private` | `string` |
| `color` | `public` | [`Color`](Color.md) |
| `heading` | `public` | `number` |
| `pos` | `public` | [`Point`](Point.md) |
| `size` | `public` | [`Size`](Size.md) |
| `textureName` | `public` | `string` |
| `visible` | `public` | `boolean` |

## Accessors

### IsTextureDictionaryLoaded

```ts
get IsTextureDictionaryLoaded(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/ui/Sprite.ts:51](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Sprite.ts#L51)

***

### TextureDict

```ts
get TextureDict(): string
```

```ts
set TextureDict(v): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/Sprite.ts:47](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Sprite.ts#L47)

## Methods

### draw()

#### draw(resolution)

```ts
draw(resolution?): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Source

[src/client/ui/Sprite.ts:55](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Sprite.ts#L55)

#### draw(textureDictionary, textureName, pos, size, heading, color, loadTexture, resolution)

```ts
draw(
   textureDictionary?, 
   textureName?, 
   pos?, 
   size?, 
   heading?, 
   color?, 
   loadTexture?, 
   resolution?): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `textureDictionary`? | `string` |
| `textureName`? | `string` |
| `pos`? | [`Point`](Point.md) |
| `size`? | [`Size`](Size.md) |
| `heading`? | `number` |
| `color`? | [`Color`](Color.md) |
| `loadTexture`? | `boolean` |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Source

[src/client/ui/Sprite.ts:56](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Sprite.ts#L56)

***

### loadTextureDictionary()

```ts
loadTextureDictionary(): void
```

#### Returns

`void`

#### Source

[src/client/ui/Sprite.ts:31](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Sprite.ts#L31)

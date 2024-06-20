[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Text

# Class: Text

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Text()

```ts
new Text(
   caption, 
   pos, 
   scale, 
   color, 
   font, 
   alignment, 
   dropShadow, 
   outline, 
   wordWrap): Text
```

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `caption` | `string` | `undefined` | Text to display |
| `pos` | [`Point`](Point.md) | `undefined` | Position of text relative to alignment. In pixels. |
| `scale` | `number` | `1` | Size of text. Default 1.0 |
| `color` | [`Color`](Color.md) | `Color.white` | Color of text. Default black. |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` | Font of text. Default Chalet London. |
| `alignment` | [`Alignment`](../enumerations/Alignment.md) | `Alignment.Left` | Alignment of text. Default Left. |
| `dropShadow` | `boolean` | `false` |  |
| `outline` | `boolean` | `false` |  |
| `wordWrap` | [`Size`](Size.md) | `undefined` |  |

#### Returns

[`Text`](Text.md)

#### Source

[src/client/ui/Text.ts:85](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Text.ts#L85)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `alignment` | `public` | [`Alignment`](../enumerations/Alignment.md) |
| `caption` | `public` | `string` |
| `color` | `public` | [`Color`](Color.md) |
| `dropShadow` | `public` | `boolean` |
| `font` | `public` | [`Font`](../enumerations/Font.md) |
| `outline` | `public` | `boolean` |
| `pos` | `public` | [`Point`](Point.md) |
| `scale` | `public` | `number` |
| `wordWrap` | `public` | [`Size`](Size.md) |

## Methods

### draw()

#### draw(offset, resolution)

```ts
draw(offset?, resolution?): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

##### Source

[src/client/ui/Text.ts:107](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Text.ts#L107)

#### draw(caption, pos, scale, color, font, alignment, dropShadow, outline, wordWrap, resolution)

```ts
draw(
   caption, 
   pos, 
   scale, 
   color?, 
   font?, 
   alignment?, 
   dropShadow?, 
   outline?, 
   wordWrap?, 
   resolution?): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `caption` | `string` |
| `pos` | [`Point`](Point.md) |
| `scale` | `number` |
| `color`? | [`Color`](Color.md) |
| `font`? | [`Font`](../enumerations/Font.md) |
| `alignment`? | [`Alignment`](../enumerations/Alignment.md) |
| `dropShadow`? | `boolean` |
| `outline`? | `boolean` |
| `wordWrap`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

`IDrawable.draw`

##### Source

[src/client/ui/Text.ts:108](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Text.ts#L108)

***

### addLongString()

```ts
static addLongString(str): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`void`

#### Source

[src/client/ui/Text.ts:55](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Text.ts#L55)

***

### draw()

```ts
static draw(
   caption, 
   pos, 
   scale, 
   color, 
   font, 
   alignment, 
   dropShadow, 
   outline, 
   wordWrap?, 
   resolution?): void
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `caption` | `string` | `undefined` |
| `pos` | [`Point`](Point.md) | `undefined` |
| `scale` | `number` | `1` |
| `color` | [`Color`](Color.md) | `Color.white` |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` |
| `alignment` | [`Alignment`](../enumerations/Alignment.md) | `Alignment.Left` |
| `dropShadow` | `boolean` | `false` |
| `outline` | `boolean` | `false` |
| `wordWrap`? | [`Size`](Size.md) | `undefined` |
| `resolution`? | [`Size`](Size.md) | `undefined` |

#### Returns

`void`

#### Source

[src/client/ui/Text.ts:6](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Text.ts#L6)

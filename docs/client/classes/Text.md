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
| ------ | ------ | ------ | ------ |
| `caption` | `string` | `undefined` | Text to display |
| `pos` | [`Point`](Point.md) | `undefined` | Position of text relative to alignment. In pixels. |
| `scale` | `number` | `1` | Size of text. Default 1.0 |
| `color` | [`Color`](Color.md) | `Color.white` | Color of text. Default black. |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` | Font of text. Default Chalet London. |
| `alignment` | [`Alignment`](../enumerations/Alignment.md) | `Alignment.Left` | Alignment of text. Default Left. |
| `dropShadow` | `boolean` | `false` |  |
| `outline` | `boolean` | `false` |  |
| `wordWrap` | [`Size`](Size.md) | `...` |  |

#### Returns

[`Text`](Text.md)

#### Defined in

[src/client/ui/Text.ts:85](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L85)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `alignment` | `public` | [`Alignment`](../enumerations/Alignment.md) | [src/client/ui/Text.ts:68](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L68) |
| `caption` | `public` | `string` | [src/client/ui/Text.ts:63](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L63) |
| `color` | `public` | [`Color`](Color.md) | [src/client/ui/Text.ts:66](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L66) |
| `dropShadow` | `public` | `boolean` | [src/client/ui/Text.ts:69](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L69) |
| `font` | `public` | [`Font`](../enumerations/Font.md) | [src/client/ui/Text.ts:67](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L67) |
| `outline` | `public` | `boolean` | [src/client/ui/Text.ts:70](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L70) |
| `pos` | `public` | [`Point`](Point.md) | [src/client/ui/Text.ts:64](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L64) |
| `scale` | `public` | `number` | [src/client/ui/Text.ts:65](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L65) |
| `wordWrap` | `public` | [`Size`](Size.md) | [src/client/ui/Text.ts:71](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L71) |

## Methods

### draw()

#### draw(offset, resolution)

```ts
draw(offset?, resolution?): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

##### Defined in

[src/client/ui/Text.ts:107](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L107)

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
| ------ | ------ |
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

##### Defined in

[src/client/ui/Text.ts:108](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L108)

***

### addLongString()

```ts
static addLongString(str): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `str` | `string` |

#### Returns

`void`

#### Defined in

[src/client/ui/Text.ts:55](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L55)

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
| ------ | ------ | ------ |
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

#### Defined in

[src/client/ui/Text.ts:6](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/Text.ts#L6)

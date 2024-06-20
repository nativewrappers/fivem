[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Rectangle

# Class: Rectangle

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Rectangle()

```ts
new Rectangle(
   pos, 
   size, 
   color): Rectangle
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Rectangle`](Rectangle.md)

#### Source

[src/client/ui/Rectangle.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Rectangle.ts#L9)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `color` | `public` | [`Color`](Color.md) |
| `pos` | `public` | [`Point`](Point.md) |
| `size` | `public` | [`Size`](Size.md) |

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

[src/client/ui/Rectangle.ts:15](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Rectangle.ts#L15)

#### draw(pos, size, color, resolution)

```ts
draw(
   pos, 
   size, 
   color, 
   resolution?): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

`IDrawable.draw`

##### Source

[src/client/ui/Rectangle.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Rectangle.ts#L16)

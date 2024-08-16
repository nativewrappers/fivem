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
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Rectangle`](Rectangle.md)

#### Defined in

[src/client/ui/Rectangle.ts:9](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Rectangle.ts#L9)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `color` | `public` | [`Color`](Color.md) | [src/client/ui/Rectangle.ts:7](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Rectangle.ts#L7) |
| `pos` | `public` | [`Point`](Point.md) | [src/client/ui/Rectangle.ts:5](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Rectangle.ts#L5) |
| `size` | `public` | [`Size`](Size.md) | [src/client/ui/Rectangle.ts:6](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Rectangle.ts#L6) |

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

[src/client/ui/Rectangle.ts:15](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Rectangle.ts#L15)

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
| ------ | ------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |
| `resolution`? | [`Size`](Size.md) |

##### Returns

`void`

##### Implementation of

`IDrawable.draw`

##### Defined in

[src/client/ui/Rectangle.ts:16](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/Rectangle.ts#L16)

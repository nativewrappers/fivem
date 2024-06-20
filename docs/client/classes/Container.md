[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Container

# Class: Container

## Implements

- [`IDrawable`](../interfaces/IDrawable.md)

## Constructors

### new Container()

```ts
new Container(
   pos, 
   size, 
   color): Container
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `pos` | [`Point`](Point.md) |
| `size` | [`Size`](Size.md) |
| `color` | [`Color`](Color.md) |

#### Returns

[`Container`](Container.md)

#### Source

[src/client/ui/Container.ts:10](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Container.ts#L10)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `color` | `public` | [`Color`](Color.md) | `undefined` |
| `items` | `public` | [`IDrawable`](../interfaces/IDrawable.md)[] | `[]` |
| `pos` | `public` | [`Point`](Point.md) | `undefined` |
| `size` | `public` | [`Size`](Size.md) | `undefined` |

## Methods

### addItem()

```ts
addItem(items): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `items` | [`IDrawable`](../interfaces/IDrawable.md) \| [`IDrawable`](../interfaces/IDrawable.md)[] |

#### Returns

`void`

#### Source

[src/client/ui/Container.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Container.ts#L16)

***

### draw()

```ts
draw(offset?, resolution?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `offset`? | [`Size`](Size.md) |
| `resolution`? | [`Size`](Size.md) |

#### Returns

`void`

#### Implementation of

[`IDrawable`](../interfaces/IDrawable.md).[`draw`](../interfaces/IDrawable.md#draw)

#### Source

[src/client/ui/Container.ts:23](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Container.ts#L23)

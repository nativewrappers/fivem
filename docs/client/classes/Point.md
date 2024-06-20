[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Point

# Class: Point

## Constructors

### new Point()

```ts
new Point(x, y): Point
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

[`Point`](Point.md)

#### Source

[src/client/utils/Point.ts:26](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Point.ts#L26)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `X` | `public` | `number` |
| `Y` | `public` | `number` |

## Methods

### parse()

```ts
static parse(arg): Point
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `arg` | `string` \| [`number`, `number`] \| \{ `X`: `number`; `Y`: `number`; \} |

#### Returns

[`Point`](Point.md)

#### Source

[src/client/utils/Point.ts:2](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Point.ts#L2)

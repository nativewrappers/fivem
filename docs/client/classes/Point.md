[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Point

# Class: Point

## Constructors

### new Point()

```ts
new Point(x, y): Point
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `x` | `number` | `0` |
| `y` | `number` | `0` |

#### Returns

[`Point`](Point.md)

#### Defined in

[src/client/utils/Point.ts:26](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/Point.ts#L26)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `X` | `public` | `number` | [src/client/utils/Point.ts:23](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/Point.ts#L23) |
| `Y` | `public` | `number` | [src/client/utils/Point.ts:24](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/Point.ts#L24) |

## Methods

### parse()

```ts
static parse(arg): Point
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `arg` | `string` \| [`number`, `number`] \| \{ `X`: `number`; `Y`: `number`; \} |

#### Returns

[`Point`](Point.md)

#### Defined in

[src/client/utils/Point.ts:2](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/Point.ts#L2)

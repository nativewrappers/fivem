[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Color

# Class: Color

## Constructors

### new Color()

```ts
new Color(
   r, 
   g, 
   b, 
   a): Color
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `a` | `number` | `255` |

#### Returns

[`Color`](Color.md)

#### Source

[src/common/utils/Color.ts:19](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Color.ts#L19)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `a` | `public` | `number` |
| `b` | `public` | `number` |
| `g` | `public` | `number` |
| `r` | `public` | `number` |

## Methods

### fromArgb()

```ts
static fromArgb(
   a, 
   r, 
   g, 
   b): Color
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `a` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

#### Source

[src/common/utils/Color.ts:2](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Color.ts#L2)

***

### fromArray()

```ts
static fromArray(primitive): Color
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `primitive` | [`number`, `number`, `number`] \| `number`[] |

#### Returns

[`Color`](Color.md)

#### Source

[src/common/utils/Color.ts:10](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Color.ts#L10)

***

### fromRgb()

```ts
static fromRgb(
   r, 
   g, 
   b): Color
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

#### Source

[src/common/utils/Color.ts:6](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Color.ts#L6)

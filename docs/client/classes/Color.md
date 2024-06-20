[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Color

# Class: Color

## Constructors

### new Color()

```ts
new Color(
   a, 
   r, 
   g, 
   b): Color
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `a` | `number` | `255` |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/utils/Color.ts:25](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Color.ts#L25)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `a` | `public` | `number` | `undefined` |
| `b` | `public` | `number` | `undefined` |
| `g` | `public` | `number` | `undefined` |
| `r` | `public` | `number` | `undefined` |
| `black` | `static` | [`Color`](Color.md) | `...` |
| `empty` | `static` | [`Color`](Color.md) | `...` |
| `transparent` | `static` | [`Color`](Color.md) | `...` |
| `white` | `static` | [`Color`](Color.md) | `...` |
| `whiteSmoke` | `static` | [`Color`](Color.md) | `...` |

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

[src/client/utils/Color.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Color.ts#L8)

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

[src/client/utils/Color.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Color.ts#L16)

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

[src/client/utils/Color.ts:12](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Color.ts#L12)

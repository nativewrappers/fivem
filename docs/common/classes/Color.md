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
| ------ | ------ | ------ |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |
| `a` | `number` | `255` |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/common/utils/Color.ts:24](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L24)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `a` | `public` | `number` | [src/common/utils/Color.ts:19](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L19) |
| `b` | `public` | `number` | [src/common/utils/Color.ts:22](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L22) |
| `g` | `public` | `number` | [src/common/utils/Color.ts:21](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L21) |
| `r` | `public` | `number` | [src/common/utils/Color.ts:20](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L20) |
| `Black` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:3](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L3) |
| `Transparent` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:2](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L2) |
| `White` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:4](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L4) |
| `WhiteSmoke` | `static` | [`Color`](Color.md) | [src/common/utils/Color.ts:5](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L5) |

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
| ------ | ------ |
| `a` | `number` |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/common/utils/Color.ts:7](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L7)

***

### fromArray()

```ts
static fromArray(primitive): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `primitive` | [`number`, `number`, `number`] \| `number`[] |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/common/utils/Color.ts:15](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L15)

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
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/common/utils/Color.ts:11](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/common/utils/Color.ts#L11)

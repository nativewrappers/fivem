[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Color

# Class: Color

## Constructors

### new Color()

```ts
new Color(
   r, 
   g, 
   b, 
   a?): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `r` | `number` |
| `g` | `number` |
| `b` | `number` |
| `a`? | `number` |

#### Returns

[`Color`](Color.md)

#### Defined in

lib/common/utils/Color.d.ts:9

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `a` | `number` | lib/common/utils/Color.d.ts:5 |
| `b` | `number` | lib/common/utils/Color.d.ts:8 |
| `g` | `number` | lib/common/utils/Color.d.ts:7 |
| `r` | `number` | lib/common/utils/Color.d.ts:6 |

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

lib/common/utils/Color.d.ts:2

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

lib/common/utils/Color.d.ts:4

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

lib/common/utils/Color.d.ts:3

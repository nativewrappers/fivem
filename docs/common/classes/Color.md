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

[src/common/utils/Color.ts:19](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L19)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `a` | `public` | `number` | [src/common/utils/Color.ts:14](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L14) |
| `b` | `public` | `number` | [src/common/utils/Color.ts:17](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L17) |
| `g` | `public` | `number` | [src/common/utils/Color.ts:16](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L16) |
| `r` | `public` | `number` | [src/common/utils/Color.ts:15](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L15) |

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

[src/common/utils/Color.ts:2](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L2)

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

[src/common/utils/Color.ts:10](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L10)

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

[src/common/utils/Color.ts:6](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/common/utils/Color.ts#L6)

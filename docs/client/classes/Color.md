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
| ------ | ------ | ------ |
| `a` | `number` | `255` |
| `r` | `number` | `undefined` |
| `g` | `number` | `undefined` |
| `b` | `number` | `undefined` |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/utils/Color.ts:25](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L25)

## Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| `a` | `public` | `number` | [src/client/utils/Color.ts:20](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L20) |
| `b` | `public` | `number` | [src/client/utils/Color.ts:23](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L23) |
| `g` | `public` | `number` | [src/client/utils/Color.ts:22](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L22) |
| `r` | `public` | `number` | [src/client/utils/Color.ts:21](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L21) |
| `black` | `static` | [`Color`](Color.md) | [src/client/utils/Color.ts:4](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L4) |
| `empty` | `static` | [`Color`](Color.md) | [src/client/utils/Color.ts:2](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L2) |
| `transparent` | `static` | [`Color`](Color.md) | [src/client/utils/Color.ts:3](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L3) |
| `white` | `static` | [`Color`](Color.md) | [src/client/utils/Color.ts:5](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L5) |
| `whiteSmoke` | `static` | [`Color`](Color.md) | [src/client/utils/Color.ts:6](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L6) |

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

[src/client/utils/Color.ts:8](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L8)

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

[src/client/utils/Color.ts:16](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L16)

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

[src/client/utils/Color.ts:12](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/Color.ts#L12)

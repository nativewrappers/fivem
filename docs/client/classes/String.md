[@nativewrappers/fivem](../../README.md) / [client](../README.md) / String

# Class: `abstract` String

## Constructors

### new String()

```ts
new String(): String
```

#### Returns

[`String`](String.md)

## Methods

### measureString()

```ts
static measureString(
   str, 
   font?, 
   scale?, 
   screenWidth?): number
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `str` | `string` | `undefined` |
| `font`? | [`Font`](../enumerations/Font.md) | `undefined` |
| `scale`? | `number` | `undefined` |
| `screenWidth`? | `number` | `Screen.ScaledWidth` |

#### Returns

`number`

#### Defined in

[src/client/utils/String.ts:33](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/String.ts#L33)

***

### measureStringWidthNoConvert()

```ts
static measureStringWidthNoConvert(
   input, 
   font, 
   scale): number
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `input` | `string` | `undefined` |
| `font` | [`Font`](../enumerations/Font.md) | `Font.ChaletLondon` |
| `scale` | `number` | `0` |

#### Returns

`number`

#### Defined in

[src/client/utils/String.ts:21](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/String.ts#L21)

***

### stringToArray()

```ts
static stringToArray(input): string[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` |

#### Returns

`string`[]

#### Defined in

[src/client/utils/String.ts:5](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/utils/String.ts#L5)

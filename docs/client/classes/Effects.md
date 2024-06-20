[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Effects

# Class: `abstract` Effects

## Constructors

### new Effects()

```ts
new Effects(): Effects
```

#### Returns

[`Effects`](Effects.md)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `effects` | `private` | `string`[] | `...` |

## Methods

### effectToString()

```ts
static private effectToString(screenEffect): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `screenEffect` | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`string`

#### Source

[src/client/ui/Effects.ts:104](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Effects.ts#L104)

***

### isActive()

```ts
static isActive(screenEffect): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `screenEffect` | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`boolean`

#### Source

[src/client/ui/Effects.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Effects.ts#L16)

***

### start()

```ts
static start(
   effectName, 
   duration, 
   looped): void
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `effectName` | [`ScreenEffect`](../enumerations/ScreenEffect.md) | `undefined` |
| `duration` | `number` | `0` |
| `looped` | `boolean` | `false` |

#### Returns

`void`

#### Source

[src/client/ui/Effects.ts:4](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Effects.ts#L4)

***

### stop()

```ts
static stop(screenEffect?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `screenEffect`? | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`void`

#### Source

[src/client/ui/Effects.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Effects.ts#L8)

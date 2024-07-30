[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Effects

# Class: `abstract` Effects

## Constructors

### new Effects()

```ts
new Effects(): Effects
```

#### Returns

[`Effects`](Effects.md)

## Methods

### isActive()

```ts
static isActive(screenEffect): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect` | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`boolean`

#### Defined in

[src/client/ui/Effects.ts:16](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/Effects.ts#L16)

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
| ------ | ------ | ------ |
| `effectName` | [`ScreenEffect`](../enumerations/ScreenEffect.md) | `undefined` |
| `duration` | `number` | `0` |
| `looped` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/client/ui/Effects.ts:4](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/Effects.ts#L4)

***

### stop()

```ts
static stop(screenEffect?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `screenEffect`? | [`ScreenEffect`](../enumerations/ScreenEffect.md) |

#### Returns

`void`

#### Defined in

[src/client/ui/Effects.ts:8](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/Effects.ts#L8)

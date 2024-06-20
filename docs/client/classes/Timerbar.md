[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Timerbar

# Class: Timerbar

Create a Timerbar. It's automatically added to the internal Timerbar array and drawn in a FIFO (first in, first out) way.

```typescript
// Create simple Timerbar
const myTimerbar = new Cfx.Timerbar("Hello");
myTimerbar.Text = "World";

// Disable Timerbar later on
myTimerbar.Visible = false;
```

## Constructors

### new Timerbar()

```ts
new Timerbar(title, useProgressBar): Timerbar
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `undefined` |
| `useProgressBar` | `boolean` | `false` |

#### Returns

[`Timerbar`](Timerbar.md)

#### Source

[src/client/ui/Timerbar.ts:91](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L91)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `isVisible` | `private` | `boolean` | `false` |
| `pbarBgColor` | `private` | `number`[] | `...` |
| `pbarFgColor` | `private` | `number`[] | `...` |
| `pbarValue` | `private` | `number` | `0.0` |
| `sprite` | `private` | `null` \| [`Sprite`](Sprite.md) | `undefined` |
| `text` | `private` | `string` | `''` |
| `textColor` | `private` | `number`[] | `...` |
| `title` | `private` | `string` | `''` |
| `usePlayerStyle` | `private` | `boolean` | `false` |
| `useProgressBar` | `private` | `boolean` | `false` |

## Accessors

### PlayerStyle

```ts
get PlayerStyle(): boolean
```

```ts
set PlayerStyle(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/Timerbar.ts:212](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L212)

***

### Progress

```ts
get Progress(): number
```

```ts
set Progress(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[src/client/ui/Timerbar.ts:140](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L140)

***

### ProgressbarBgColor

```ts
get ProgressbarBgColor(): number | number[]
```

```ts
set ProgressbarBgColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Source

[src/client/ui/Timerbar.ts:182](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L182)

***

### ProgressbarFgColor

```ts
get ProgressbarFgColor(): number | number[]
```

```ts
set ProgressbarFgColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Source

[src/client/ui/Timerbar.ts:195](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L195)

***

### Sprite

```ts
get Sprite(): null | Sprite
```

#### Returns

`null` \| [`Sprite`](Sprite.md)

#### Source

[src/client/ui/Timerbar.ts:216](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L216)

***

### Text

```ts
get Text(): string
```

```ts
set Text(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/Timerbar.ts:128](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L128)

***

### TextColor

```ts
get TextColor(): number | number[]
```

```ts
set TextColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Source

[src/client/ui/Timerbar.ts:169](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L169)

***

### Title

```ts
get Title(): string
```

```ts
set Title(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/Timerbar.ts:120](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L120)

***

### UseProgressBar

```ts
get UseProgressBar(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/ui/Timerbar.ts:136](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L136)

***

### Visible

```ts
get Visible(): boolean
```

```ts
set Visible(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/Timerbar.ts:148](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/Timerbar.ts#L148)

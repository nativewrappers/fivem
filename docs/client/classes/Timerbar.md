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
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `useProgressBar` | `boolean` | `false` |

#### Returns

[`Timerbar`](Timerbar.md)

#### Defined in

[src/client/ui/Timerbar.ts:91](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L91)

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
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/Timerbar.ts:212](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L212)

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
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/ui/Timerbar.ts:140](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L140)

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
| ------ | ------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Defined in

[src/client/ui/Timerbar.ts:182](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L182)

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
| ------ | ------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Defined in

[src/client/ui/Timerbar.ts:195](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L195)

***

### Sprite

```ts
get Sprite(): null | Sprite
```

#### Returns

`null` \| [`Sprite`](Sprite.md)

#### Defined in

[src/client/ui/Timerbar.ts:216](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L216)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/Timerbar.ts:128](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L128)

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
| ------ | ------ |
| `value` | `number` \| `number`[] |

#### Returns

`number` \| `number`[]

#### Defined in

[src/client/ui/Timerbar.ts:169](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L169)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/Timerbar.ts:120](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L120)

***

### UseProgressBar

```ts
get UseProgressBar(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/ui/Timerbar.ts:136](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L136)

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
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/Timerbar.ts:148](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/ui/Timerbar.ts#L148)

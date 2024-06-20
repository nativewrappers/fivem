[@nativewrappers/fivem](../../README.md) / [client](../README.md) / InstructionalButtons

# Class: InstructionalButtons

Draw native instructional buttons in the bottom left of the screen using scaleform

Example:

```typescript
import { InstructionalButtons, Control } from '@nativewrappers/client';

const buttons = new InstructionalButtons([
 {controls: [Control.Context], label: "Interact with Bob"},
 {controls: [Control.Detonate], label: "Say hello to Alice"}
])

setTick(() => {
  buttons.draw()
})
```

## Constructors

### new InstructionalButtons()

```ts
new InstructionalButtons(buttons): InstructionalButtons
```

Draws native instructional buttons

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `buttons` | [`IButton`](../interfaces/IButton.md)[] | Array of instructional buttons to be drawn |

#### Returns

[`InstructionalButtons`](InstructionalButtons.md)

#### Source

[src/client/ui/InstructionalButtons.ts:30](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/InstructionalButtons.ts#L30)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `scaleform` | `private` | [`Scaleform`](Scaleform.md) |

## Methods

### draw()

```ts
draw(): Promise<void>
```

Renders the instructional button scaleform

#### Returns

`Promise`\<`void`\>

#### Source

[src/client/ui/InstructionalButtons.ts:60](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/InstructionalButtons.ts#L60)

***

### pushButton()

```ts
private pushButton(button, index): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `button` | [`IButton`](../interfaces/IButton.md) |
| `index` | `number` |

#### Returns

`void`

#### Source

[src/client/ui/InstructionalButtons.ts:43](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/InstructionalButtons.ts#L43)

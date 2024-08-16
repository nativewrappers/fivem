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
| ------ | ------ | ------ |
| `buttons` | [`IButton`](../interfaces/IButton.md)[] | Array of instructional buttons to be drawn |

#### Returns

[`InstructionalButtons`](InstructionalButtons.md)

#### Defined in

[src/client/ui/InstructionalButtons.ts:30](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/InstructionalButtons.ts#L30)

## Methods

### draw()

```ts
draw(): Promise<void>
```

Renders the instructional button scaleform

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/client/ui/InstructionalButtons.ts:60](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/InstructionalButtons.ts#L60)

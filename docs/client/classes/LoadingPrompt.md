[@nativewrappers/fivem](../../README.md) / [client](../README.md) / LoadingPrompt

# Class: `abstract` LoadingPrompt

Show and hide loading prompt on the bottom right of the screen.

Example:

```typescript
import { LoadingPrompt } from '@nativewrappers/client/ui';

LoadingPrompt.show("Hello World");

setTimeout(() => {
 LoadingPrompt.hide();
}, 10000)'
```

## Constructors

### new LoadingPrompt()

```ts
new LoadingPrompt(): LoadingPrompt
```

#### Returns

[`LoadingPrompt`](LoadingPrompt.md)

## Accessors

### IsActive

```ts
get static IsActive(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/ui/LoadingPrompt.ts:49](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/LoadingPrompt.ts#L49)

## Methods

### hide()

```ts
static hide(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/LoadingPrompt.ts:43](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/LoadingPrompt.ts#L43)

***

### show()

```ts
static show(loadingText, spinnerType): void
```

Shows a loading prompt.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `loadingText` | `string` | `''` | Text to be displayed inside loading prompt. |
| `spinnerType` | [`LoadingSpinnerType`](../enumerations/LoadingSpinnerType.md) | `LoadingSpinnerType.RegularClockwise` | Type of spinner. |

#### Returns

`void`

#### Defined in

[src/client/ui/LoadingPrompt.ts:25](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/LoadingPrompt.ts#L25)

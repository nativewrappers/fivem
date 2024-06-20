[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuGridPanel

# Class: UIMenuGridPanel

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuGridPanel()

```ts
new UIMenuGridPanel(
   topText?, 
   leftText?, 
   rightText?, 
   bottomText?, 
   circlePosition?): UIMenuGridPanel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `topText`? | `string` |
| `leftText`? | `string` |
| `rightText`? | `string` |
| `bottomText`? | `string` |
| `circlePosition`? | [`Point`](Point.md) |

#### Returns

[`UIMenuGridPanel`](UIMenuGridPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:27](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L27)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `_bottomText` | `private` | `undefined` \| [`Text`](Text.md) | `undefined` | - | - |
| `_circle` | `private` | [`Sprite`](Sprite.md) | `undefined` | - | - |
| `_grid` | `private` | [`Sprite`](Sprite.md) | `undefined` | - | - |
| `_isCircleLocked` | `private` | `boolean` | `false` | - | - |
| `_lastCirclePosition` | `private` | [`Point`](Point.md) | `undefined` | - | - |
| `_leftText` | `private` | `undefined` \| [`Text`](Text.md) | `undefined` | - | - |
| `_lockXAxis` | `private` | `boolean` | `false` | - | - |
| `_lockYAxis` | `private` | `boolean` | `false` | - | - |
| `_pressed` | `private` | `boolean` | `false` | - | - |
| `_rightText` | `private` | `undefined` \| [`Text`](Text.md) | `undefined` | - | - |
| `_setCirclePosition` | `private` | [`Point`](Point.md) | `undefined` | - | - |
| `_topText` | `private` | `undefined` \| [`Text`](Text.md) | `undefined` | - | - |
| `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` |
| `enabled` | `protected` | `boolean` | `true` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` |
| `id` | `readonly` | `string` | `...` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` |
| `parentItem` | `protected` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` |

## Accessors

### BottomText

```ts
get BottomText(): string
```

```ts
set BottomText(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:76](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L76)

***

### CirclePosition

```ts
get CirclePosition(): Point
```

```ts
set CirclePosition(position): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `position` | [`Point`](Point.md) |

#### Returns

[`Point`](Point.md)

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:84](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L84)

***

### CirclePositionX

```ts
set CirclePositionX(x): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:104](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L104)

***

### CirclePositionY

```ts
set CirclePositionY(y): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `y` | `number` |

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:114](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L114)

***

### Enabled

```ts
get Enabled(): boolean
```

```ts
set Enabled(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

***

### Height

```ts
get Height(): number
```

#### Returns

`number`

#### Source

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

***

### LeftText

```ts
get LeftText(): string
```

```ts
set LeftText(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:60](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L60)

***

### LockXAxis

```ts
get LockXAxis(): boolean
```

```ts
set LockXAxis(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:124](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L124)

***

### LockYAxis

```ts
get LockYAxis(): boolean
```

```ts
set LockYAxis(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:138](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L138)

***

### ParentItem

```ts
get ParentItem(): undefined | UIMenuItem
```

```ts
set ParentItem(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Source

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

***

### ParentMenu

```ts
get ParentMenu(): undefined | Menu
```

#### Returns

`undefined` \| [`Menu`](Menu.md)

#### Source

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

***

### RightText

```ts
get RightText(): string
```

```ts
set RightText(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:68](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L68)

***

### TopText

```ts
get TopText(): string
```

```ts
set TopText(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:52](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L52)

## Methods

### \_processControls()

```ts
private _processControls(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:241](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L241)

***

### \_setText()

```ts
private _setText(name, value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:217](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L217)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:181](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L181)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`setVerticalPosition`](AbstractUIMenuPanel.md#setverticalposition)

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:164](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L164)

***

### updateParentItem()

```ts
updateParentItem(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:152](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L152)

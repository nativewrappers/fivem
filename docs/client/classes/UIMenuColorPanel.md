[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuColorPanel

# Class: UIMenuColorPanel

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuColorPanel()

```ts
new UIMenuColorPanel(title, colors): UIMenuColorPanel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `title` | `string` |
| `colors` | [`Color`](Color.md)[] |

#### Returns

[`UIMenuColorPanel`](UIMenuColorPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:27](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L27)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `_bar` | `private` | [`Rectangle`](Rectangle.md)[] | `[]` | - | - |
| `_colors` | `private` | [`Color`](Color.md)[] | `[]` | - | - |
| `_index` | `private` | `number` | `0` | - | - |
| `_lastColor` | `private` | [`Color`](Color.md) | `Color.empty` | - | - |
| `_leftArrow` | `private` | [`Sprite`](Sprite.md) | `undefined` | - | - |
| `_max` | `private` | `number` | `8` | - | - |
| `_min` | `private` | `number` | `0` | - | - |
| `_rightArrow` | `private` | [`Sprite`](Sprite.md) | `undefined` | - | - |
| `_selectedRectangle` | `private` | [`Rectangle`](Rectangle.md) | `undefined` | - | - |
| `_text` | `private` | [`Text`](Text.md) | `undefined` | - | - |
| `_title` | `private` | `string` | `''` | - | - |
| `_total` | `private` | `number` | `9` | - | - |
| `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` |
| `enabled` | `protected` | `boolean` | `true` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` |
| `id` | `readonly` | `string` | `...` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` |
| `parentItem` | `protected` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` |

## Accessors

### Color

```ts
get Color(): Color
```

```ts
set Color(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:72](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L72)

***

### Colors

```ts
get Colors(): Color[]
```

```ts
set Colors(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md)[] |

#### Returns

[`Color`](Color.md)[]

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:54](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L54)

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

### Index

```ts
get Index(): number
```

```ts
set Index(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:85](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L85)

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

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:45](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L45)

## Methods

### \_goLeft()

```ts
private _goLeft(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:186](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L186)

***

### \_goRight()

```ts
private _goRight(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:208](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L208)

***

### \_processControls()

```ts
private _processControls(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:229](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L229)

***

### \_refreshIndex()

```ts
private _refreshIndex(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:161](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L161)

***

### \_updateSelection()

```ts
private _updateSelection(preventUpdate): void
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `preventUpdate` | `boolean` | `false` |

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:172](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L172)

***

### \_updateText()

```ts
private _updateText(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:182](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L182)

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

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:134](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L134)

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

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:123](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L123)

***

### updateParentItem()

```ts
updateParentItem(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:106](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L106)

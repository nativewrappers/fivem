[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuPercentagePanel

# Class: UIMenuPercentagePanel

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuPercentagePanel()

```ts
new UIMenuPercentagePanel(
   title, 
   percentage, 
   minText?, 
   maxText?): UIMenuPercentagePanel
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `''` |
| `percentage` | `number` | `0` |
| `minText`? | `string` | `undefined` |
| `maxText`? | `string` | `undefined` |

#### Returns

[`UIMenuPercentagePanel`](UIMenuPercentagePanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L20)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `_activeBar` | `private` | [`Rectangle`](Rectangle.md) | `undefined` | - | - |
| `_backgroundBar` | `private` | [`Rectangle`](Rectangle.md) | `undefined` | - | - |
| `_lastPercentage` | `private` | `number` | `undefined` | - | - |
| `_maxText` | `private` | [`Text`](Text.md) | `undefined` | - | - |
| `_minText` | `private` | [`Text`](Text.md) | `undefined` | - | - |
| `_pressed` | `private` | `boolean` | `false` | - | - |
| `_title` | `private` | [`Text`](Text.md) | `undefined` | - | - |
| `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` |
| `enabled` | `protected` | `boolean` | `true` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` |
| `id` | `readonly` | `string` | `...` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` |
| `parentItem` | `protected` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` |

## Accessors

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

### MaxText

```ts
get MaxText(): string
```

```ts
set MaxText(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:73](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L73)

***

### MinText

```ts
get MinText(): string
```

```ts
set MinText(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:65](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L65)

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

### Percentage

```ts
get Percentage(): number
```

```ts
set Percentage(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:81](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L81)

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

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:57](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L57)

## Methods

### \_getProgress()

```ts
private _getProgress(): number
```

#### Returns

`number`

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:164](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L164)

***

### \_processControls()

```ts
private _processControls(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:136](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L136)

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

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:114](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L114)

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

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:104](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L104)

***

### updateParentItem()

```ts
updateParentItem(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:92](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L92)

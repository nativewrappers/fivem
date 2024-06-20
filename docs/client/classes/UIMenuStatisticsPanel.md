[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuStatisticsPanel

# Class: UIMenuStatisticsPanel

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuStatisticsPanel()

```ts
new UIMenuStatisticsPanel(item?, divider?): UIMenuStatisticsPanel
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `item`? | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] | `undefined` |
| `divider`? | `boolean` | `true` |

#### Returns

[`UIMenuStatisticsPanel`](UIMenuStatisticsPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:11](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L11)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `_divider` | `private` | `boolean` | `true` | - | - |
| `_items` | `private` | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] | `[]` | - | - |
| `background` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` |
| `enabled` | `protected` | `boolean` | `true` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` |
| `id` | `readonly` | `string` | `...` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` |
| `parentItem` | `protected` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` |

## Accessors

### Divider

```ts
get Divider(): boolean
```

```ts
set Divider(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L20)

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

### Items

```ts
get Items(): UIMenuStatisticsPanelItem[]
```

```ts
set Items(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |

#### Returns

[`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[]

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:28](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L28)

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

## Methods

### addItem()

```ts
addItem(item): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `item` | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:36](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L36)

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

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:65](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L65)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `itemOrIndex` | `number` \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) |

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:41](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L41)

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

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:49](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L49)

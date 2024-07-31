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
| ------ | ------ | ------ |
| `item`? | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] | `undefined` |
| `divider`? | `boolean` | `true` |

#### Returns

[`UIMenuStatisticsPanel`](UIMenuStatisticsPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:11](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L11)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `background` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | - | [src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:6](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L6) |
| `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

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
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:20](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L20)

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
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`Enabled`](AbstractUIMenuPanel.md#enabled)

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

***

### Height

```ts
get Height(): number
```

#### Returns

`number`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`Height`](AbstractUIMenuPanel.md#height)

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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
| ------ | ------ |
| `value` | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |

#### Returns

[`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[]

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:28](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L28)

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
| ------ | ------ |
| `value` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`undefined` \| [`UIMenuItem`](UIMenuItem.md)

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`ParentItem`](AbstractUIMenuPanel.md#parentitem)

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

***

### ParentMenu

```ts
get ParentMenu(): undefined | Menu
```

#### Returns

`undefined` \| [`Menu`](Menu.md)

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`ParentMenu`](AbstractUIMenuPanel.md#parentmenu)

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

## Methods

### addItem()

```ts
addItem(item): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `item` | [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)[] |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:36](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L36)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:65](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L65)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | `number` \| [`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md) |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:41](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L41)

***

### setVerticalPosition()

```ts
setVerticalPosition(y): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`setVerticalPosition`](AbstractUIMenuPanel.md#setverticalposition)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts:49](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/client/ui/menu/items/panels/UIMenuStatisticsPanel.ts#L49)

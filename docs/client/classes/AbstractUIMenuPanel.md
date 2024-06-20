[@nativewrappers/fivem](../../README.md) / [client](../README.md) / AbstractUIMenuPanel

# Class: `abstract` AbstractUIMenuPanel

## Extended by

- [`UIMenuGridPanel`](UIMenuGridPanel.md)
- [`UIMenuColorPanel`](UIMenuColorPanel.md)
- [`UIMenuPercentagePanel`](UIMenuPercentagePanel.md)
- [`UIMenuStatisticsPanel`](UIMenuStatisticsPanel.md)

## Constructors

### new AbstractUIMenuPanel()

```ts
new AbstractUIMenuPanel(): AbstractUIMenuPanel
```

#### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `background` | `readonly` | `undefined` \| [`Rectangle`](Rectangle.md) \| [`Sprite`](Sprite.md) | `undefined` |
| `enabled` | `protected` | `boolean` | `true` |
| `id` | `readonly` | `string` | `...` |
| `parentItem` | `protected` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` |

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

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:42](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L42)

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

#### Source

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:38](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L38)

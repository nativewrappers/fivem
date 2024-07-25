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
| ------ | ------ |
| `title` | `string` |
| `colors` | [`Color`](Color.md)[] |

#### Returns

[`UIMenuColorPanel`](UIMenuColorPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:27](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L27)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | - | [src/client/ui/menu/items/panels/UIMenuColorPanel.ts:8](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L8) |
| `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

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
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:72](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L72)

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
| ------ | ------ |
| `value` | [`Color`](Color.md)[] |

#### Returns

[`Color`](Color.md)[]

#### Defined in

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:54](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L54)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:85](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L85)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

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

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:45](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L45)

## Methods

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`draw`](AbstractUIMenuPanel.md#draw)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:134](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L134)

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

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:123](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L123)

***

### updateParentItem()

```ts
updateParentItem(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuColorPanel.ts:106](https://github.com/nativewrappers/fivem/blob/76a4f0a0bbabe839eed05afc2b892d754096c3d3/src/client/ui/menu/items/panels/UIMenuColorPanel.ts#L106)

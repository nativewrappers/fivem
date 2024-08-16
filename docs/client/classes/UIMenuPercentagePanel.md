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
| ------ | ------ | ------ |
| `title` | `string` | `''` |
| `percentage` | `number` | `0` |
| `minText`? | `string` | `undefined` |
| `maxText`? | `string` | `undefined` |

#### Returns

[`UIMenuPercentagePanel`](UIMenuPercentagePanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:20](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L20)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | - | [src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:8](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L8) |
| `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

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
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`Enabled`](AbstractUIMenuPanel.md#enabled)

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:73](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L73)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:65](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L65)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

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
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:81](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L81)

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

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:57](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L57)

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

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:114](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L114)

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

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:104](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L104)

***

### updateParentItem()

```ts
updateParentItem(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts:92](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/ui/menu/items/panels/UIMenuPercentagePanel.ts#L92)

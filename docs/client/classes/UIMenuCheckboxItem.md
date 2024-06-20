[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuCheckboxItem

# Class: UIMenuCheckboxItem

## Extends

- [`UIMenuItem`](UIMenuItem.md)

## Constructors

### new UIMenuCheckboxItem()

```ts
new UIMenuCheckboxItem(
   text, 
   checked, 
   description?, 
   style?): UIMenuCheckboxItem
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `checked` | `boolean` | `false` |
| `description`? | `string` | `undefined` |
| `style`? | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) | `CheckboxStyle.Tick` |

#### Returns

[`UIMenuCheckboxItem`](UIMenuCheckboxItem.md)

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`constructor`](UIMenuItem.md#constructors)

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:17](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L17)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `_checkboxSprite` | `private` | [`Sprite`](Sprite.md) | `undefined` | - | - |
| `_checked` | `private` | `boolean` | `false` | - | - |
| `_style` | `private` | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) | `CheckboxStyle.Tick` | - | - |
| `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` | [`UIMenuItem`](UIMenuItem.md).`activated` | [`UIMenuItem`](UIMenuItem.md).`activated` |
| `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`badgeLeft` | [`UIMenuItem`](UIMenuItem.md).`badgeLeft` |
| `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`badgeRight` | [`UIMenuItem`](UIMenuItem.md).`badgeRight` |
| `checkboxChanged` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` | - | - |
| `enabled` | `public` | `boolean` | `true` | [`UIMenuItem`](UIMenuItem.md).`enabled` | [`UIMenuItem`](UIMenuItem.md).`enabled` |
| `hovered` | `public` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`hovered` | [`UIMenuItem`](UIMenuItem.md).`hovered` |
| `id` | `readonly` | `string` | `...` | [`UIMenuItem`](UIMenuItem.md).`id` | [`UIMenuItem`](UIMenuItem.md).`id` |
| `labelText` | `readonly` | [`Text`](Text.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`labelText` | [`UIMenuItem`](UIMenuItem.md).`labelText` |
| `offset` | `public` | [`Point`](Point.md) | `...` | [`UIMenuItem`](UIMenuItem.md).`offset` | [`UIMenuItem`](UIMenuItem.md).`offset` |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` | [`UIMenuItem`](UIMenuItem.md).`panelActivated` | [`UIMenuItem`](UIMenuItem.md).`panelActivated` |
| `parent` | `public` | `undefined` \| [`Menu`](Menu.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`parent` | [`UIMenuItem`](UIMenuItem.md).`parent` |
| `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`rectangle` | [`UIMenuItem`](UIMenuItem.md).`rectangle` |
| `selected` | `public` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`selected` | [`UIMenuItem`](UIMenuItem.md).`selected` |
| `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`selectedSprite` | [`UIMenuItem`](UIMenuItem.md).`selectedSprite` |
| `supportsDescription` | `protected` | `boolean` | `true` | [`UIMenuItem`](UIMenuItem.md).`supportsDescription` | [`UIMenuItem`](UIMenuItem.md).`supportsDescription` |
| `supportsLeftBadge` | `protected` | `boolean` | `true` | [`UIMenuItem`](UIMenuItem.md).`supportsLeftBadge` | [`UIMenuItem`](UIMenuItem.md).`supportsLeftBadge` |
| `supportsPanels` | `protected` | `boolean` | `true` | [`UIMenuItem`](UIMenuItem.md).`supportsPanels` | [`UIMenuItem`](UIMenuItem.md).`supportsPanels` |
| `supportsRightBadge` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsRightBadge` | [`UIMenuItem`](UIMenuItem.md).`supportsRightBadge` |
| `supportsRightLabel` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsRightLabel` | [`UIMenuItem`](UIMenuItem.md).`supportsRightLabel` |
| `text` | `readonly` | [`Text`](Text.md) | `undefined` | [`UIMenuItem`](UIMenuItem.md).`text` | [`UIMenuItem`](UIMenuItem.md).`text` |
| `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.empty` | [`UIMenuItem`](UIMenuItem.md).`defaultBackColor` | [`UIMenuItem`](UIMenuItem.md).`defaultBackColor` |
| `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.whiteSmoke` | [`UIMenuItem`](UIMenuItem.md).`defaultForeColor` | [`UIMenuItem`](UIMenuItem.md).`defaultForeColor` |
| `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.white` | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedBackColor` | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedBackColor` |
| `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.black` | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedForeColor` | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedForeColor` |
| `defaultHoveredBackColor` | `static` | [`Color`](Color.md) | `...` | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredBackColor` | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredBackColor` |
| `defaultHoveredForeColor` | `static` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredForeColor` | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredForeColor` |

## Accessors

### BackColor

```ts
get BackColor(): Color
```

```ts
set BackColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:439](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L439)

***

### Checked

```ts
get Checked(): boolean
```

```ts
set Checked(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:29](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L29)

***

### Description

```ts
get Description(): string
```

```ts
set Description(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:420](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L420)

***

### ForeColor

```ts
get ForeColor(): Color
```

```ts
set ForeColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:459](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L459)

***

### FormattedDescription

```ts
get FormattedDescription(): string
```

#### Returns

`string`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:435](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L435)

***

### HighlightedBackColor

```ts
get HighlightedBackColor(): Color
```

```ts
set HighlightedBackColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:449](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L449)

***

### HighlightedForeColor

```ts
get HighlightedForeColor(): Color
```

```ts
set HighlightedForeColor(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:469](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L469)

***

### IsMouseInBounds

```ts
get IsMouseInBounds(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:525](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L525)

***

### LeftBadge

```ts
get LeftBadge(): BadgeStyle
```

```ts
set LeftBadge(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:477](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L477)

***

### Panels

```ts
get Panels(): AbstractUIMenuPanel[]
```

```ts
set Panels(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[]

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:531](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L531)

***

### RightBadge

```ts
get RightBadge(): BadgeStyle
```

```ts
set RightBadge(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:494](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L494)

***

### RightLabel

```ts
get RightLabel(): string
```

```ts
set RightLabel(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:511](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L511)

***

### Style

```ts
get Style(): CheckboxStyle
```

```ts
set Style(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) |

#### Returns

[`CheckboxStyle`](../enumerations/CheckboxStyle.md)

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:37](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L37)

***

### Text

```ts
get Text(): string
```

```ts
set Text(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:412](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L412)

## Methods

### \_getSpriteColor()

```ts
private _getSpriteColor(): Color
```

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:73](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L73)

***

### \_getSpriteName()

```ts
private _getSpriteName(): string
```

#### Returns

`string`

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:58](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L58)

***

### addEvent()

```ts
addEvent(event, ...args): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `string` |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addEvent`](UIMenuItem.md#addevent)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:575](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L575)

***

### addPanel()

```ts
addPanel(panel): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addPanel`](UIMenuItem.md#addpanel)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:545](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L545)

***

### badgeToColor()

```ts
badgeToColor(badge): Color
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Color`](Color.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToColor`](UIMenuItem.md#badgetocolor)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:979](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L979)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureName`](UIMenuItem.md#badgetotexturename)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:616](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L616)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`draw`](UIMenuItem.md#draw)

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:50](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L50)

***

### findPanelIndex()

```ts
findPanelIndex(panel): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`findPanelIndex`](UIMenuItem.md#findpanelindex)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:556](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L556)

***

### fireEvent()

```ts
fireEvent(): void
```

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`fireEvent`](UIMenuItem.md#fireevent)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:579](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L579)

***

### formatDescription()

```ts
formatDescription(): void
```

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`formatDescription`](UIMenuItem.md#formatdescription)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:585](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L585)

***

### removePanel()

```ts
removePanel(panelOrIndex): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `panelOrIndex` | `number` \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`removePanel`](UIMenuItem.md#removepanel)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:564](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L564)

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

[`UIMenuItem`](UIMenuItem.md).[`setVerticalPosition`](UIMenuItem.md#setverticalposition)

#### Source

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:45](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L45)

***

### badgeToTextureDict()

```ts
static badgeToTextureDict(badge): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureDict`](UIMenuItem.md#badgetotexturedict)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:7](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L7)

***

### getBadgeSize()

```ts
static getBadgeSize(badge): Size
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Size`](Size.md)

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSize`](UIMenuItem.md#getbadgesize)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:182](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L182)

***

### getBadgeSpriteHeightOffset()

```ts
static getBadgeSpriteHeightOffset(sprite): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteHeightOffset`](UIMenuItem.md#getbadgespriteheightoffset)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:178](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L178)

***

### getBadgeSpriteWidthOffset()

```ts
static getBadgeSpriteWidthOffset(sprite): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteWidthOffset`](UIMenuItem.md#getbadgespritewidthoffset)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L174)

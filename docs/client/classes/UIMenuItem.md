[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuItem

# Class: UIMenuItem

## Extended by

- [`UIMenuCheckboxItem`](UIMenuCheckboxItem.md)
- [`UIMenuListItem`](UIMenuListItem.md)
- [`UIMenuSeparatorItem`](UIMenuSeparatorItem.md)
- [`UIMenuSliderItem`](UIMenuSliderItem.md)

## Constructors

### new UIMenuItem()

```ts
new UIMenuItem(text, description?): UIMenuItem
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |
| `description`? | `string` |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:394](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L394)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `_backColor` | `private` | [`Color`](Color.md) | `UIMenuItem.defaultBackColor` |
| `_description` | `private` | `string` | `''` |
| `_event` | `private` | \{ `args`: `unknown`[]; `event`: `string`; \} | `...` |
| `_event.args` | `private` | `unknown`[] | `undefined` |
| `_event.event` | `private` | `string` | `undefined` |
| `_foreColor` | `private` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` |
| `_formattedDescription` | `private` | `string` | `''` |
| `_highlightedBackColor` | `private` | [`Color`](Color.md) | `UIMenuItem.defaultHighlightedBackColor` |
| `_highlightedForeColor` | `private` | [`Color`](Color.md) | `UIMenuItem.defaultHighlightedForeColor` |
| `_leftBadge` | `private` | [`BadgeStyle`](../enumerations/BadgeStyle.md) | `BadgeStyle.None` |
| `_panels` | `readonly` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] | `[]` |
| `_rightBadge` | `readonly` | [`BadgeStyle`](../enumerations/BadgeStyle.md) | `BadgeStyle.None` |
| `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `badgeLeft` | `public` | [`Sprite`](Sprite.md) | `undefined` |
| `badgeRight` | `public` | [`Sprite`](Sprite.md) | `undefined` |
| `enabled` | `readonly` | `boolean` | `true` |
| `hovered` | `readonly` | `boolean` | `false` |
| `id` | `public` | `string` | `...` |
| `labelText` | `readonly` | [`Text`](Text.md) | `undefined` |
| `offset` | `public` | [`Point`](Point.md) | `...` |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `parent` | `public` | `undefined` \| [`Menu`](Menu.md) | `undefined` |
| `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` |
| `selected` | `protected` | `boolean` | `false` |
| `selectedSprite` | `protected` | [`Sprite`](Sprite.md) | `undefined` |
| `supportsDescription` | `protected` | `boolean` | `true` |
| `supportsLeftBadge` | `protected` | `boolean` | `true` |
| `supportsPanels` | `protected` | `boolean` | `true` |
| `supportsRightBadge` | `readonly` | `boolean` | `true` |
| `supportsRightLabel` | `static` | `boolean` | `true` |
| `text` | `static` | [`Text`](Text.md) | `undefined` |
| `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.empty` |
| `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.whiteSmoke` |
| `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.white` |
| `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.black` |
| `defaultHoveredBackColor` | `public` | [`Color`](Color.md) | `...` |
| `defaultHoveredForeColor` | `public` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` |

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

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:616](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L616)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:1109](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L1109)

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

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:556](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L556)

***

### fireEvent()

```ts
fireEvent(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:579](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L579)

***

### formatDescription()

```ts
formatDescription(): void
```

#### Returns

`void`

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

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:1099](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L1099)

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

#### Source

[src/client/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/UIMenuItem.ts#L174)

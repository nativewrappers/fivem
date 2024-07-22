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
| ------ | ------ |
| `text` | `string` |
| `description`? | `string` |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:394](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L394)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:361](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L361) |
| `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:374](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L374) |
| `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:375](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L375) |
| `enabled` | `public` | `boolean` | `true` | [src/client/ui/menu/items/UIMenuItem.ts:354](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L354) |
| `hovered` | `public` | `boolean` | `false` | [src/client/ui/menu/items/UIMenuItem.ts:356](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L356) |
| `id` | `readonly` | `string` | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:352](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L352) |
| `labelText` | `readonly` | [`Text`](Text.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:377](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L377) |
| `offset` | `public` | [`Point`](Point.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:358](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L358) |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:362](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L362) |
| `parent` | `public` | `undefined` \| [`Menu`](Menu.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:359](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L359) |
| `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:370](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L370) |
| `selected` | `public` | `boolean` | `false` | [src/client/ui/menu/items/UIMenuItem.ts:355](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L355) |
| `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:372](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L372) |
| `supportsDescription` | `protected` | `boolean` | `true` | [src/client/ui/menu/items/UIMenuItem.ts:364](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L364) |
| `supportsLeftBadge` | `protected` | `boolean` | `true` | [src/client/ui/menu/items/UIMenuItem.ts:366](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L366) |
| `supportsPanels` | `protected` | `boolean` | `true` | [src/client/ui/menu/items/UIMenuItem.ts:365](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L365) |
| `supportsRightBadge` | `protected` | `boolean` | `true` | [src/client/ui/menu/items/UIMenuItem.ts:367](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L367) |
| `supportsRightLabel` | `protected` | `boolean` | `true` | [src/client/ui/menu/items/UIMenuItem.ts:368](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L368) |
| `text` | `readonly` | [`Text`](Text.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:371](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L371) |
| `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.empty` | [src/client/ui/menu/items/UIMenuItem.ts:344](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L344) |
| `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.whiteSmoke` | [src/client/ui/menu/items/UIMenuItem.ts:348](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L348) |
| `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.white` | [src/client/ui/menu/items/UIMenuItem.ts:345](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L345) |
| `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.black` | [src/client/ui/menu/items/UIMenuItem.ts:350](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L350) |
| `defaultHoveredBackColor` | `static` | [`Color`](Color.md) | `undefined` | [src/client/ui/menu/items/UIMenuItem.ts:346](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L346) |
| `defaultHoveredForeColor` | `static` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` | [src/client/ui/menu/items/UIMenuItem.ts:349](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L349) |

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
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:439](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L439)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:420](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L420)

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
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:459](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L459)

***

### FormattedDescription

```ts
get FormattedDescription(): string
```

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:435](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L435)

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
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:449](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L449)

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
| ------ | ------ |
| `value` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:469](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L469)

***

### IsMouseInBounds

```ts
get IsMouseInBounds(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:525](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L525)

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
| ------ | ------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:477](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L477)

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
| ------ | ------ |
| `value` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[]

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:531](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L531)

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
| ------ | ------ |
| `value` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`BadgeStyle`](../enumerations/BadgeStyle.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:494](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L494)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:511](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L511)

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
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:412](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L412)

## Methods

### addEvent()

```ts
addEvent(event, ...args): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `event` | `string` |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:575](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L575)

***

### addPanel()

```ts
addPanel(panel): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)[] |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:545](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L545)

***

### badgeToColor()

```ts
badgeToColor(badge): Color
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:979](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L979)

***

### badgeToTextureName()

```ts
badgeToTextureName(badge): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:616](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L616)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:1109](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L1109)

***

### findPanelIndex()

```ts
findPanelIndex(panel): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panel` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:556](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L556)

***

### fireEvent()

```ts
fireEvent(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:579](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L579)

***

### formatDescription()

```ts
formatDescription(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:585](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L585)

***

### removePanel()

```ts
removePanel(panelOrIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `panelOrIndex` | `number` \| [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md) |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:564](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L564)

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

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:1099](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L1099)

***

### badgeToTextureDict()

```ts
static badgeToTextureDict(badge): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:7](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L7)

***

### getBadgeSize()

```ts
static getBadgeSize(badge): Size
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `badge` | [`BadgeStyle`](../enumerations/BadgeStyle.md) |

#### Returns

[`Size`](Size.md)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:182](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L182)

***

### getBadgeSpriteHeightOffset()

```ts
static getBadgeSpriteHeightOffset(sprite): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:178](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L178)

***

### getBadgeSpriteWidthOffset()

```ts
static getBadgeSpriteWidthOffset(sprite): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `sprite` | [`Sprite`](Sprite.md) |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/ui/menu/items/UIMenuItem.ts#L174)

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
| ------ | ------ | ------ |
| `text` | `string` | `undefined` |
| `checked` | `boolean` | `false` |
| `description`? | `string` | `undefined` |
| `style`? | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) | `CheckboxStyle.Tick` |

#### Returns

[`UIMenuCheckboxItem`](UIMenuCheckboxItem.md)

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`constructor`](UIMenuItem.md#constructors)

#### Defined in

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:17](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L17)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `activated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`activated` | [src/client/ui/menu/items/UIMenuItem.ts:361](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L361) |
| `badgeLeft` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`badgeLeft` | [src/client/ui/menu/items/UIMenuItem.ts:374](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L374) |
| `badgeRight` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`badgeRight` | [src/client/ui/menu/items/UIMenuItem.ts:375](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L375) |
| `checkboxChanged` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | - | [src/client/ui/menu/items/UIMenuCheckboxItem.ts:7](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L7) |
| `enabled` | `public` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).`enabled` | [src/client/ui/menu/items/UIMenuItem.ts:354](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L354) |
| `hovered` | `public` | `boolean` | `false` | - | [`UIMenuItem`](UIMenuItem.md).`hovered` | [src/client/ui/menu/items/UIMenuItem.ts:356](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L356) |
| `id` | `readonly` | `string` | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`id` | [src/client/ui/menu/items/UIMenuItem.ts:352](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L352) |
| `labelText` | `readonly` | [`Text`](Text.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`labelText` | [src/client/ui/menu/items/UIMenuItem.ts:377](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L377) |
| `offset` | `public` | [`Point`](Point.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`offset` | [src/client/ui/menu/items/UIMenuItem.ts:358](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L358) |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`panelActivated` | [src/client/ui/menu/items/UIMenuItem.ts:362](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L362) |
| `parent?` | `public` | [`Menu`](Menu.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`parent` | [src/client/ui/menu/items/UIMenuItem.ts:359](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L359) |
| `rectangle` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`rectangle` | [src/client/ui/menu/items/UIMenuItem.ts:370](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L370) |
| `selected` | `public` | `boolean` | `false` | - | [`UIMenuItem`](UIMenuItem.md).`selected` | [src/client/ui/menu/items/UIMenuItem.ts:355](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L355) |
| `selectedSprite` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`selectedSprite` | [src/client/ui/menu/items/UIMenuItem.ts:372](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L372) |
| `supportsDescription` | `protected` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).`supportsDescription` | [src/client/ui/menu/items/UIMenuItem.ts:364](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L364) |
| `supportsLeftBadge` | `protected` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).`supportsLeftBadge` | [src/client/ui/menu/items/UIMenuItem.ts:366](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L366) |
| `supportsPanels` | `protected` | `boolean` | `true` | - | [`UIMenuItem`](UIMenuItem.md).`supportsPanels` | [src/client/ui/menu/items/UIMenuItem.ts:365](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L365) |
| `supportsRightBadge` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsRightBadge` | - | [src/client/ui/menu/items/UIMenuCheckboxItem.ts:9](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L9) |
| `supportsRightLabel` | `protected` | `boolean` | `false` | [`UIMenuItem`](UIMenuItem.md).`supportsRightLabel` | - | [src/client/ui/menu/items/UIMenuCheckboxItem.ts:10](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L10) |
| `text` | `readonly` | [`Text`](Text.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`text` | [src/client/ui/menu/items/UIMenuItem.ts:371](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L371) |
| `defaultBackColor` | `static` | [`Color`](Color.md) | `Color.Transparent` | - | [`UIMenuItem`](UIMenuItem.md).`defaultBackColor` | [src/client/ui/menu/items/UIMenuItem.ts:344](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L344) |
| `defaultForeColor` | `static` | [`Color`](Color.md) | `Color.WhiteSmoke` | - | [`UIMenuItem`](UIMenuItem.md).`defaultForeColor` | [src/client/ui/menu/items/UIMenuItem.ts:348](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L348) |
| `defaultHighlightedBackColor` | `static` | [`Color`](Color.md) | `Color.White` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedBackColor` | [src/client/ui/menu/items/UIMenuItem.ts:345](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L345) |
| `defaultHighlightedForeColor` | `static` | [`Color`](Color.md) | `Color.Black` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHighlightedForeColor` | [src/client/ui/menu/items/UIMenuItem.ts:350](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L350) |
| `defaultHoveredBackColor` | `static` | [`Color`](Color.md) | `undefined` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredBackColor` | [src/client/ui/menu/items/UIMenuItem.ts:346](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L346) |
| `defaultHoveredForeColor` | `static` | [`Color`](Color.md) | `UIMenuItem.defaultForeColor` | - | [`UIMenuItem`](UIMenuItem.md).`defaultHoveredForeColor` | [src/client/ui/menu/items/UIMenuItem.ts:349](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L349) |

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`BackColor`](UIMenuItem.md#backcolor)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:439](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L439)

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
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:29](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L29)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Description`](UIMenuItem.md#description)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:420](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L420)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`ForeColor`](UIMenuItem.md#forecolor)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:459](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L459)

***

### FormattedDescription

```ts
get FormattedDescription(): string
```

#### Returns

`string`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`FormattedDescription`](UIMenuItem.md#formatteddescription)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:435](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L435)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`HighlightedBackColor`](UIMenuItem.md#highlightedbackcolor)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:449](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L449)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`HighlightedForeColor`](UIMenuItem.md#highlightedforecolor)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:469](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L469)

***

### IsMouseInBounds

```ts
get IsMouseInBounds(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`IsMouseInBounds`](UIMenuItem.md#ismouseinbounds)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:525](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L525)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`LeftBadge`](UIMenuItem.md#leftbadge)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:477](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L477)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Panels`](UIMenuItem.md#panels)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:531](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L531)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightBadge`](UIMenuItem.md#rightbadge)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:494](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L494)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`RightLabel`](UIMenuItem.md#rightlabel)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:511](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L511)

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
| ------ | ------ |
| `value` | [`CheckboxStyle`](../enumerations/CheckboxStyle.md) |

#### Returns

[`CheckboxStyle`](../enumerations/CheckboxStyle.md)

#### Defined in

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:37](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L37)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`Text`](UIMenuItem.md#text)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:412](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L412)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addEvent`](UIMenuItem.md#addevent)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:575](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L575)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`addPanel`](UIMenuItem.md#addpanel)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:545](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L545)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToColor`](UIMenuItem.md#badgetocolor)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:979](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L979)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureName`](UIMenuItem.md#badgetotexturename)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:616](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L616)

***

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Overrides

[`UIMenuItem`](UIMenuItem.md).[`draw`](UIMenuItem.md#draw)

#### Defined in

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:50](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L50)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`findPanelIndex`](UIMenuItem.md#findpanelindex)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:556](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L556)

***

### fireEvent()

```ts
fireEvent(): void
```

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`fireEvent`](UIMenuItem.md#fireevent)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:579](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L579)

***

### formatDescription()

```ts
formatDescription(): void
```

#### Returns

`void`

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`formatDescription`](UIMenuItem.md#formatdescription)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:585](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L585)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`removePanel`](UIMenuItem.md#removepanel)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:564](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L564)

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

[`UIMenuItem`](UIMenuItem.md).[`setVerticalPosition`](UIMenuItem.md#setverticalposition)

#### Defined in

[src/client/ui/menu/items/UIMenuCheckboxItem.ts:45](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuCheckboxItem.ts#L45)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`badgeToTextureDict`](UIMenuItem.md#badgetotexturedict)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:7](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L7)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSize`](UIMenuItem.md#getbadgesize)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:182](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L182)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteHeightOffset`](UIMenuItem.md#getbadgespriteheightoffset)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:178](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L178)

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

#### Inherited from

[`UIMenuItem`](UIMenuItem.md).[`getBadgeSpriteWidthOffset`](UIMenuItem.md#getbadgespritewidthoffset)

#### Defined in

[src/client/ui/menu/items/UIMenuItem.ts:174](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/ui/menu/items/UIMenuItem.ts#L174)

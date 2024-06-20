[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Menu

# Class: Menu

## Constructors

### new Menu()

```ts
new Menu(
   title, 
   subtitle, 
   offset, 
   spriteLibrary, 
   spriteName): Menu
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `undefined` |
| `subtitle` | `string` | `undefined` |
| `offset` | [`Point`](Point.md) | `undefined` |
| `spriteLibrary` | `string` | `'commonmenu'` |
| `spriteName` | `string` | `'interaction_bgd'` |

#### Returns

[`Menu`](Menu.md)

#### Source

[src/client/ui/menu/Menu.ts:79](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L79)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `_activeItem` | `private` | `number` | `1000` |
| `_alignment` | `private` | [`MenuAlignment`](../enumerations/MenuAlignment.md) | `MenuAlignment.Left` |
| `_background` | `private` | [`Sprite`](Sprite.md) | `undefined` |
| `_controls` | `private` | [`MenuControls`](MenuControls.md) | `...` |
| `_counterOverride` | `private` | `string` | `''` |
| `_counterPretext` | `private` | `string` | `''` |
| `_counterText` | `private` | [`Text`](Text.md) | `undefined` |
| `_descriptionBar` | `private` | [`Rectangle`](Rectangle.md) | `undefined` |
| `_descriptionRectangle` | `private` | [`Sprite`](Sprite.md) | `undefined` |
| `_descriptionText` | `private` | [`Text`](Text.md) | `undefined` |
| `_drawOffset` | `private` | [`Point`](Point.md) | `...` |
| `_extraRectangleDown` | `private` | [`Rectangle`](Rectangle.md) | `undefined` |
| `_extraRectangleUp` | `private` | [`Rectangle`](Rectangle.md) | `undefined` |
| `_justOpened` | `private` | `boolean` | `true` |
| `_lastLeftRightNavigation` | `private` | `number` | `0` |
| `_lastUpDownNavigation` | `private` | `number` | `0` |
| `_logo` | `private` | [`Sprite`](Sprite.md) | `undefined` |
| `_mainMenu` | `private` | [`Container`](Container.md) | `undefined` |
| `_maxItem` | `private` | `number` | `9` |
| `_maxItemsOnScreen` | `private` | `number` | `...` |
| `_minItem` | `private` | `number` | `0` |
| `_mousePressed` | `private` | `boolean` | `false` |
| `_navigationDelay` | `private` | `number` | `140` |
| `_offset` | `private` | [`Point`](Point.md) | `undefined` |
| `_settings` | `private` | [`MenuSettings`](MenuSettings.md) | `...` |
| `_subtitle` | `private` | [`Text`](Text.md) | `undefined` |
| `_subtitleResRectangle` | `private` | [`Rectangle`](Rectangle.md) | `undefined` |
| `_title` | `private` | [`Text`](Text.md) | `undefined` |
| `_upAndDownSprite` | `private` | [`Sprite`](Sprite.md) | `undefined` |
| `_widthOffset` | `private` | `number` | `0` |
| `checkboxChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `children` | `public` | `Map`\<`string`, [`Menu`](Menu.md)\> | `...` |
| `id` | `readonly` | `string` | `...` |
| `indexChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `itemSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `items` | `public` | [`UIMenuItem`](UIMenuItem.md)[] | `[]` |
| `listChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `listSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `menuChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `menuClose` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `menuOpen` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `parentItem` | `public` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` |
| `parentMenu` | `public` | `undefined` \| [`Menu`](Menu.md) | `undefined` |
| `sliderChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `sliderSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `...` |
| `visible` | `public` | `boolean` | `false` |
| `screenAspectRatio` | `static` | `number` | `...` |
| `screenHeight` | `static` | `number` | `1080` |
| `screenResolution` | `static` | [`Size`](Size.md) | `...` |
| `screenWidth` | `static` | `number` | `...` |

## Accessors

### Alignment

```ts
get Alignment(): MenuAlignment
```

```ts
set Alignment(alignment): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `alignment` | [`MenuAlignment`](../enumerations/MenuAlignment.md) |

#### Returns

[`MenuAlignment`](../enumerations/MenuAlignment.md)

#### Source

[src/client/ui/menu/Menu.ts:257](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L257)

***

### Controls

```ts
get Controls(): MenuControls
```

#### Returns

[`MenuControls`](MenuControls.md)

#### Source

[src/client/ui/menu/Menu.ts:304](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L304)

***

### CurrentItem

```ts
get CurrentItem(): UIMenuItem
```

```ts
set CurrentItem(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Source

[src/client/ui/menu/Menu.ts:229](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L229)

***

### CurrentSelection

```ts
get CurrentSelection(): number
```

```ts
set CurrentSelection(v): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`number`

#### Source

[src/client/ui/menu/Menu.ts:240](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L240)

***

### DrawOffset

```ts
get DrawOffset(): Point
```

#### Returns

[`Point`](Point.md)

#### Source

[src/client/ui/menu/Menu.ts:300](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L300)

***

### Settings

```ts
get Settings(): MenuSettings
```

#### Returns

[`MenuSettings`](MenuSettings.md)

#### Source

[src/client/ui/menu/Menu.ts:308](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L308)

***

### Subtitle

```ts
get Subtitle(): string
```

```ts
set Subtitle(text): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/Menu.ts:201](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L201)

***

### SubtitleBackColor

```ts
get SubtitleBackColor(): Color
```

```ts
set SubtitleBackColor(color): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/Menu.ts:225](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L225)

***

### SubtitleFont

```ts
get SubtitleFont(): Font
```

```ts
set SubtitleFont(font): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `font` | [`Font`](../enumerations/Font.md) |

#### Returns

[`Font`](../enumerations/Font.md)

#### Source

[src/client/ui/menu/Menu.ts:209](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L209)

***

### SubtitleForeColor

```ts
get SubtitleForeColor(): Color
```

```ts
set SubtitleForeColor(color): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Source

[src/client/ui/menu/Menu.ts:217](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L217)

***

### Title

```ts
get Title(): string
```

```ts
set Title(text): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/Menu.ts:185](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L185)

***

### TitleFont

```ts
get TitleFont(): Font
```

```ts
set TitleFont(font): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `font` | [`Font`](../enumerations/Font.md) |

#### Returns

[`Font`](../enumerations/Font.md)

#### Source

[src/client/ui/menu/Menu.ts:189](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L189)

***

### WidthOffset

```ts
get WidthOffset(): number
```

```ts
set WidthOffset(widthOffset): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `widthOffset` | `number` |

#### Returns

`number`

#### Source

[src/client/ui/menu/Menu.ts:265](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L265)

## Methods

### \_calculateItemHeight()

```ts
private _calculateItemHeight(): number
```

#### Returns

`number`

#### Source

[src/client/ui/menu/Menu.ts:860](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L860)

***

### \_calculatePanelPosition()

```ts
private _calculatePanelPosition(hasDescription): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hasDescription` | `boolean` |

#### Returns

`number`

#### Source

[src/client/ui/menu/Menu.ts:871](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L871)

***

### \_disEnableControls()

```ts
private _disEnableControls(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:832](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L832)

***

### \_isThereAnyItemExcludingSeparators()

```ts
private _isThereAnyItemExcludingSeparators(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/ui/menu/Menu.ts:823](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L823)

***

### \_playSoundAndReleaseId()

```ts
private _playSoundAndReleaseId(sound, set?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sound` | `string` |
| `set`? | `string` |

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:827](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L827)

***

### \_processControl()

```ts
private _processControl(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:761](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L761)

***

### \_processMouse()

```ts
private _processMouse(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:607](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L607)

***

### \_recalculateDescriptionPosition()

```ts
private _recalculateDescriptionPosition(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:846](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L846)

***

### \_recalculateUpAndDown()

```ts
private _recalculateUpAndDown(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:839](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L839)

***

### \_render()

```ts
private _render(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:879](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L879)

***

### addItem()

```ts
addItem(items): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `items` | [`UIMenuItem`](UIMenuItem.md) \| [`UIMenuItem`](UIMenuItem.md)[] |

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:350](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L350)

***

### addNewSubMenu()

```ts
addNewSubMenu(
   text, 
   description?, 
   inherit?): Menu
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

#### Source

[src/client/ui/menu/Menu.ts:312](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L312)

***

### addSubMenu()

```ts
addSubMenu(
   subMenuToAdd, 
   text, 
   description?, 
   inherit?): Menu
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `subMenuToAdd` | [`Menu`](Menu.md) | `undefined` |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

#### Source

[src/client/ui/menu/Menu.ts:336](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L336)

***

### bindMenuToItem()

```ts
bindMenuToItem(menuToBind, itemToBindTo): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `menuToBind` | [`Menu`](Menu.md) |
| `itemToBindTo` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:375](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L375)

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:418](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L418)

***

### close()

```ts
close(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:435](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L435)

***

### goBack()

```ts
goBack(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:595](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L595)

***

### goDown()

```ts
goDown(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:563](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L563)

***

### goLeft()

```ts
goLeft(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:442](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L442)

***

### goRight()

```ts
goRight(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:463](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L463)

***

### goUp()

```ts
goUp(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:530](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L530)

***

### isMouseInBounds()

```ts
isMouseInBounds(
   pos, 
   size, 
   drawOffset): boolean
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `pos` | [`Point`](Point.md) | `undefined` |
| `size` | [`Size`](Size.md) | `undefined` |
| `drawOffset` | `boolean` | `true` |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/Menu.ts:515](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L515)

***

### open()

```ts
open(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:424](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L424)

***

### refreshIndex()

```ts
refreshIndex(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:394](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L394)

***

### releaseMenuFromItem()

```ts
releaseMenuFromItem(releaseFrom): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `releaseFrom` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`boolean`

#### Source

[src/client/ui/menu/Menu.ts:381](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L381)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `itemOrIndex` | `number` \| [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:366](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L366)

***

### selectItem()

```ts
selectItem(): void
```

#### Returns

`void`

#### Source

[src/client/ui/menu/Menu.ts:481](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/Menu.ts#L481)

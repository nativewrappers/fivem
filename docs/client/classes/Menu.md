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
| ------ | ------ | ------ |
| `title` | `string` | `undefined` |
| `subtitle` | `string` | `undefined` |
| `offset` | [`Point`](Point.md) | `...` |
| `spriteLibrary` | `string` | `'commonmenu'` |
| `spriteName` | `string` | `'interaction_bgd'` |

#### Returns

[`Menu`](Menu.md)

#### Defined in

[src/client/ui/menu/Menu.ts:79](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L79)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `checkboxChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:39](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L39) |
| `children` | `public` | `Map`\<`string`, [`Menu`](Menu.md)\> | `undefined` | [src/client/ui/menu/Menu.ts:30](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L30) |
| `id` | `readonly` | `string` | `undefined` | [src/client/ui/menu/Menu.ts:23](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L23) |
| `indexChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:36](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L36) |
| `itemSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:43](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L43) |
| `items` | `public` | [`UIMenuItem`](UIMenuItem.md)[] | `[]` | [src/client/ui/menu/Menu.ts:29](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L29) |
| `listChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:37](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L37) |
| `listSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:41](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L41) |
| `menuChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:34](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L34) |
| `menuClose` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:33](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L33) |
| `menuOpen` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:32](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L32) |
| `panelActivated` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:45](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L45) |
| `parentItem?` | `public` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | [src/client/ui/menu/Menu.ts:28](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L28) |
| `parentMenu?` | `public` | [`Menu`](Menu.md) | `undefined` | [src/client/ui/menu/Menu.ts:27](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L27) |
| `sliderChange` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:38](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L38) |
| `sliderSelect` | `readonly` | [`LiteEvent`](LiteEvent.md) | `undefined` | [src/client/ui/menu/Menu.ts:42](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L42) |
| `visible` | `public` | `boolean` | `false` | [src/client/ui/menu/Menu.ts:25](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L25) |
| `screenAspectRatio` | `static` | `number` | `undefined` | [src/client/ui/menu/Menu.ts:18](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L18) |
| `screenHeight` | `static` | `number` | `1080` | [src/client/ui/menu/Menu.ts:19](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L19) |
| `screenResolution` | `static` | [`Size`](Size.md) | `undefined` | [src/client/ui/menu/Menu.ts:21](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L21) |
| `screenWidth` | `static` | `number` | `undefined` | [src/client/ui/menu/Menu.ts:20](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L20) |

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
| ------ | ------ |
| `alignment` | [`MenuAlignment`](../enumerations/MenuAlignment.md) |

#### Returns

[`MenuAlignment`](../enumerations/MenuAlignment.md)

#### Defined in

[src/client/ui/menu/Menu.ts:257](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L257)

***

### Controls

```ts
get Controls(): MenuControls
```

#### Returns

[`MenuControls`](MenuControls.md)

#### Defined in

[src/client/ui/menu/Menu.ts:304](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L304)

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
| ------ | ------ |
| `value` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

[`UIMenuItem`](UIMenuItem.md)

#### Defined in

[src/client/ui/menu/Menu.ts:229](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L229)

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
| ------ | ------ |
| `v` | `number` |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/Menu.ts:240](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L240)

***

### DrawOffset

```ts
get DrawOffset(): Point
```

#### Returns

[`Point`](Point.md)

#### Defined in

[src/client/ui/menu/Menu.ts:300](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L300)

***

### Settings

```ts
get Settings(): MenuSettings
```

#### Returns

[`MenuSettings`](MenuSettings.md)

#### Defined in

[src/client/ui/menu/Menu.ts:308](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L308)

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
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/Menu.ts:201](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L201)

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
| ------ | ------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/Menu.ts:225](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L225)

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
| ------ | ------ |
| `font` | [`Font`](../enumerations/Font.md) |

#### Returns

[`Font`](../enumerations/Font.md)

#### Defined in

[src/client/ui/menu/Menu.ts:209](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L209)

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
| ------ | ------ |
| `color` | [`Color`](Color.md) |

#### Returns

[`Color`](Color.md)

#### Defined in

[src/client/ui/menu/Menu.ts:217](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L217)

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
| ------ | ------ |
| `text` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/Menu.ts:185](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L185)

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
| ------ | ------ |
| `font` | [`Font`](../enumerations/Font.md) |

#### Returns

[`Font`](../enumerations/Font.md)

#### Defined in

[src/client/ui/menu/Menu.ts:189](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L189)

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
| ------ | ------ |
| `widthOffset` | `number` |

#### Returns

`number`

#### Defined in

[src/client/ui/menu/Menu.ts:265](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L265)

## Methods

### addItem()

```ts
addItem(items): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `items` | [`UIMenuItem`](UIMenuItem.md) \| [`UIMenuItem`](UIMenuItem.md)[] |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:350](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L350)

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
| ------ | ------ | ------ |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

#### Defined in

[src/client/ui/menu/Menu.ts:312](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L312)

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
| ------ | ------ | ------ |
| `subMenuToAdd` | [`Menu`](Menu.md) | `undefined` |
| `text` | `string` | `undefined` |
| `description`? | `string` | `undefined` |
| `inherit`? | `boolean` | `true` |

#### Returns

[`Menu`](Menu.md)

#### Defined in

[src/client/ui/menu/Menu.ts:336](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L336)

***

### bindMenuToItem()

```ts
bindMenuToItem(menuToBind, itemToBindTo): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `menuToBind` | [`Menu`](Menu.md) |
| `itemToBindTo` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:375](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L375)

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:418](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L418)

***

### close()

```ts
close(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:435](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L435)

***

### goBack()

```ts
goBack(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:595](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L595)

***

### goDown()

```ts
goDown(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:563](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L563)

***

### goLeft()

```ts
goLeft(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:442](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L442)

***

### goRight()

```ts
goRight(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:463](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L463)

***

### goUp()

```ts
goUp(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:530](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L530)

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
| ------ | ------ | ------ |
| `pos` | [`Point`](Point.md) | `undefined` |
| `size` | [`Size`](Size.md) | `undefined` |
| `drawOffset` | `boolean` | `true` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/Menu.ts:515](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L515)

***

### open()

```ts
open(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:424](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L424)

***

### refreshIndex()

```ts
refreshIndex(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:394](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L394)

***

### releaseMenuFromItem()

```ts
releaseMenuFromItem(releaseFrom): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `releaseFrom` | [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/Menu.ts:381](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L381)

***

### removeItem()

```ts
removeItem(itemOrIndex): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemOrIndex` | `number` \| [`UIMenuItem`](UIMenuItem.md) |

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:366](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L366)

***

### selectItem()

```ts
selectItem(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/Menu.ts:481](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/ui/menu/Menu.ts#L481)

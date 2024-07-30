[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuGridPanel

# Class: UIMenuGridPanel

## Extends

- [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md)

## Constructors

### new UIMenuGridPanel()

```ts
new UIMenuGridPanel(
   topText?, 
   leftText?, 
   rightText?, 
   bottomText?, 
   circlePosition?): UIMenuGridPanel
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `topText`? | `string` |
| `leftText`? | `string` |
| `rightText`? | `string` |
| `bottomText`? | `string` |
| `circlePosition`? | [`Point`](Point.md) |

#### Returns

[`UIMenuGridPanel`](UIMenuGridPanel.md)

#### Overrides

[`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).[`constructor`](AbstractUIMenuPanel.md#constructors)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:27](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L27)

## Properties

| Property | Modifier | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `background` | `readonly` | [`Sprite`](Sprite.md) | `undefined` | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`background` | - | [src/client/ui/menu/items/panels/UIMenuGridPanel.ts:9](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L9) |
| `enabled` | `protected` | `boolean` | `true` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`enabled` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| `id` | `readonly` | `string` | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`id` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| `parentItem?` | `protected` | [`UIMenuItem`](UIMenuItem.md) | `undefined` | - | [`AbstractUIMenuPanel`](AbstractUIMenuPanel.md).`parentItem` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

## Accessors

### BottomText

```ts
get BottomText(): string
```

```ts
set BottomText(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:76](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L76)

***

### CirclePosition

```ts
get CirclePosition(): Point
```

```ts
set CirclePosition(position): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | [`Point`](Point.md) |

#### Returns

[`Point`](Point.md)

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:84](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L84)

***

### CirclePositionX

```ts
set CirclePositionX(x): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:104](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L104)

***

### CirclePositionY

```ts
set CirclePositionY(y): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `y` | `number` |

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:114](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L114)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

***

### LeftText

```ts
get LeftText(): string
```

```ts
set LeftText(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:60](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L60)

***

### LockXAxis

```ts
get LockXAxis(): boolean
```

```ts
set LockXAxis(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:124](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L124)

***

### LockYAxis

```ts
get LockYAxis(): boolean
```

```ts
set LockYAxis(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:138](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L138)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

***

### RightText

```ts
get RightText(): string
```

```ts
set RightText(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:68](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L68)

***

### TopText

```ts
get TopText(): string
```

```ts
set TopText(value): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

`string`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:52](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L52)

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

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:181](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L181)

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

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:164](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L164)

***

### updateParentItem()

```ts
updateParentItem(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/panels/UIMenuGridPanel.ts:152](https://github.com/nativewrappers/fivem/blob/a8f3fbc0f47fb5552a00c18a4d0c12645ae62f70/src/client/ui/menu/items/panels/UIMenuGridPanel.ts#L152)

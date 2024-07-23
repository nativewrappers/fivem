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

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `background` | `readonly` | `undefined` \| [`Rectangle`](Rectangle.md) \| [`Sprite`](Sprite.md) | `undefined` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:12](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L12) |
| `enabled` | `protected` | `boolean` | `true` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:10](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L10) |
| `id` | `readonly` | `string` | `undefined` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:7](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L7) |
| `parentItem` | `protected` | `undefined` \| [`UIMenuItem`](UIMenuItem.md) | `undefined` | [src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:9](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L9) |

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

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:26](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L26)

***

### Height

```ts
get Height(): number
```

#### Returns

`number`

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:34](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L34)

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

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:18](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L18)

***

### ParentMenu

```ts
get ParentMenu(): undefined | Menu
```

#### Returns

`undefined` \| [`Menu`](Menu.md)

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:14](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L14)

## Methods

### draw()

```ts
draw(): void
```

#### Returns

`void`

#### Defined in

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:42](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L42)

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

[src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts:38](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/ui/menu/items/panels/AbstractUIMenuPanel.ts#L38)

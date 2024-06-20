[@nativewrappers/fivem](../../README.md) / [client](../README.md) / UIMenuStatisticsPanelItem

# Class: UIMenuStatisticsPanelItem

## Constructors

### new UIMenuStatisticsPanelItem()

```ts
new UIMenuStatisticsPanelItem(name, percentage): UIMenuStatisticsPanelItem
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `percentage` | `number` | `0` |

#### Returns

[`UIMenuStatisticsPanelItem`](UIMenuStatisticsPanelItem.md)

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts#L13)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `activeBar` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` |
| `backgroundBar` | `readonly` | [`Rectangle`](Rectangle.md) | `undefined` |
| `divider` | `readonly` | [`Rectangle`](Rectangle.md)[] | `[]` |
| `id` | `readonly` | `string` | `...` |
| `text` | `readonly` | [`Text`](Text.md) | `undefined` |

## Accessors

### Name

```ts
get Name(): string
```

```ts
set Name(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts:28](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts#L28)

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
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Source

[src/client/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts:36](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/ui/menu/items/panels/UIMenuStatisticsPanelItem.ts#L36)

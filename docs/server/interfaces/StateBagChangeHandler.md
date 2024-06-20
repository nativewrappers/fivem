[@nativewrappers/fivem](../../README.md) / [server](../README.md) / StateBagChangeHandler

# Interface: StateBagChangeHandler()\<T\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

```ts
interface StateBagChangeHandler(
   bagName, 
   key, 
   value, 
   reserved, 
   replicated): void
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `bagName` | `string` |
| `key` | `string` |
| `value` | `T` |
| `reserved` | `number` |
| `replicated` | `boolean` |

## Returns

`void`

## Source

[src/server/cfx/StateBagChangeHandler.ts:2](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/cfx/StateBagChangeHandler.ts#L2)

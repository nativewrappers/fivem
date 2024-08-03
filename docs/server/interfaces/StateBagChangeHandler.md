[@nativewrappers/fivem](../../README.md) / [server](../README.md) / StateBagChangeHandler

# Interface: StateBagChangeHandler()\<T\>

## Type Parameters

| Type Parameter |
| ------ |
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
| ------ | ------ |
| `bagName` | `string` |
| `key` | `string` |
| `value` | `T` |
| `reserved` | `number` |
| `replicated` | `boolean` |

## Returns

`void`

## Defined in

[src/server/cfx/StateBagChangeHandler.ts:2](https://github.com/nativewrappers/fivem/blob/d67d9a693907da5ce83f118218b601ceb38a88bc/src/server/cfx/StateBagChangeHandler.ts#L2)

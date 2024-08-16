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

[src/server/cfx/StateBagChangeHandler.ts:2](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/server/cfx/StateBagChangeHandler.ts#L2)

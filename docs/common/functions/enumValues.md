[@nativewrappers/fivem](../../README.md) / [common](../README.md) / enumValues

# Function: enumValues()

## enumValues(enumObj)

```ts
function enumValues<T>(enumObj): IterableIterator<T>
```

EnumValues - iterate over enum values
Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enumObj` | `object` |  |

### Returns

`IterableIterator`\<`T`\>

### Defined in

[src/common/utils/enumValues.ts:7](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/common/utils/enumValues.ts#L7)

## enumValues(enumObj)

```ts
function enumValues<T>(enumObj): IterableIterator<Exclude<T, string>>
```

### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `string` \| `number` |

### Parameters

| Parameter | Type |
| ------ | ------ |
| `enumObj` | `object` |

### Returns

`IterableIterator`\<`Exclude`\<`T`, `string`\>\>

### Defined in

[src/common/utils/enumValues.ts:8](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/common/utils/enumValues.ts#L8)

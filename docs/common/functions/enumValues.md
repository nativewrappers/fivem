[@nativewrappers/fivem](../../README.md) / [common](../README.md) / enumValues

# Function: enumValues()

## enumValues(enumObj)

```ts
function enumValues<T>(enumObj): IterableIterator<T>
```

EnumValues - iterate over enum values
Just copy&paste from https://github.com/microsoft/TypeScript/issues/4753#issuecomment-694557208

### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` |

### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enumObj` | `object` |  |

### Returns

`IterableIterator`\<`T`\>

### Source

[src/common/utils/enumValues.ts:7](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/enumValues.ts#L7)

## enumValues(enumObj)

```ts
function enumValues<T>(enumObj): IterableIterator<Exclude<T, string>>
```

### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` |

### Parameters

| Parameter | Type |
| :------ | :------ |
| `enumObj` | `object` |

### Returns

`IterableIterator`\<`Exclude`\<`T`, `string`\>\>

### Source

[src/common/utils/enumValues.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/enumValues.ts#L8)

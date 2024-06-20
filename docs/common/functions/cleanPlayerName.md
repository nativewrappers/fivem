[@nativewrappers/fivem](../../README.md) / [common](../README.md) / cleanPlayerName

# Function: cleanPlayerName()

```ts
function cleanPlayerName(original): string
```

Cleans up a player name and returns one version to be displayed, and one pure version to be used for fuzzy matching.
In case the name has no ascii characters, the pure name will be "empty name".
NOTE: this is not perfect, but took me two hours to arrive to this point.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `original` | `string` |

## Returns

`string`

## Source

[src/common/utils/cleanPlayerName.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/cleanPlayerName.ts#L9)

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
| ------ | ------ |
| `original` | `string` |

## Returns

`string`

## Defined in

[src/common/utils/cleanPlayerName.ts:9](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/common/utils/cleanPlayerName.ts#L9)

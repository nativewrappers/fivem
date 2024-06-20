[@nativewrappers/fivem](../../README.md) / [client](../README.md) / LoadAnimDict

# Function: LoadAnimDict()

```ts
function LoadAnimDict(animDict, waitTime): Promise<boolean>
```

A utility to load an animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animDict` | `string` | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<`boolean`\>

if the animation successfully loaded

## Source

[src/client/utils/Animations.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Animations.ts#L9)

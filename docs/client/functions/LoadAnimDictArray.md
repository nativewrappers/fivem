[@nativewrappers/fivem](../../README.md) / [client](../README.md) / LoadAnimDictArray

# Function: LoadAnimDictArray()

```ts
function LoadAnimDictArray(animDict, waitTime): Promise<[boolean, null | string[]]>
```

A utility to load multiple animation dictionary, anything that loads an animation should RemoveAnimDict after its finish being used.

## Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `animDict` | `string`[] | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<[`boolean`, `null` \| `string`[]]\>

if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load

## Source

[src/client/utils/Animations.ts:30](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/utils/Animations.ts#L30)

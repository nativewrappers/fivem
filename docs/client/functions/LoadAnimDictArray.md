[@nativewrappers/fivem](../../README.md) / [client](../README.md) / LoadAnimDictArray

# Function: LoadAnimDictArray()

```ts
function LoadAnimDictArray(animDict, waitTime): Promise<[boolean, null | string[]]>
```

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `animDict` | `string`[] | `undefined` | the animation dictionary to load |
| `waitTime` | `number` | `1000` | how long to wait for the dictionary to load |

## Returns

`Promise`\<[`boolean`, `null` \| `string`[]]\>

if the animation successfully loaded, if the animation failed to load it will return an array of animations that failed to load

## Defined in

[src/client/utils/Animations.ts:30](https://github.com/nativewrappers/fivem/blob/5ebb4b78605d0cb7cf468eefa811c3a586dedc74/src/client/utils/Animations.ts#L30)

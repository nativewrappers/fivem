[@nativewrappers/fivem](../../README.md) / [client](../README.md) / TaskSequence

# Class: TaskSequence

## Constructors

### new TaskSequence()

```ts
new TaskSequence(handle?): TaskSequence
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle`? | `number` |

#### Returns

[`TaskSequence`](TaskSequence.md)

#### Source

[src/client/TaskSequence.ts:10](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L10)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `count` | `private` | `number` | `undefined` |
| `handle` | `private` | `number` | `0` |
| `isClosed` | `private` | `boolean` | `undefined` |
| `nullPed` | `private` | [`Ped`](Ped.md) | `undefined` |

## Accessors

### AddTask

```ts
get AddTask(): undefined | null | Tasks
```

#### Returns

`undefined` \| `null` \| [`Tasks`](Tasks.md)

#### Source

[src/client/TaskSequence.ts:44](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L44)

***

### Count

```ts
get Count(): number
```

#### Returns

`number`

#### Source

[src/client/TaskSequence.ts:57](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L57)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Source

[src/client/TaskSequence.ts:40](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L40)

***

### IsClosed

```ts
get IsClosed(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/TaskSequence.ts:53](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L53)

## Methods

### close()

```ts
close(repeat): void
```

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `repeat` | `boolean` | `false` |

#### Returns

`void`

#### Source

[src/client/TaskSequence.ts:31](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L31)

***

### create()

```ts
private create(): void
```

#### Returns

`void`

#### Source

[src/client/TaskSequence.ts:21](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L21)

***

### dispose()

```ts
dispose(): void
```

#### Returns

`void`

#### Source

[src/client/TaskSequence.ts:26](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/TaskSequence.ts#L26)

[@nativewrappers/fivem](../../README.md) / [client](../README.md) / TaskSequence

# Class: TaskSequence

## Constructors

### new TaskSequence()

```ts
new TaskSequence(handle?): TaskSequence
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `handle`? | `number` |

#### Returns

[`TaskSequence`](TaskSequence.md)

#### Defined in

[src/client/TaskSequence.ts:10](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L10)

## Accessors

### AddTask

```ts
get AddTask(): undefined | null | Tasks
```

#### Returns

`undefined` \| `null` \| [`Tasks`](Tasks.md)

#### Defined in

[src/client/TaskSequence.ts:44](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L44)

***

### Count

```ts
get Count(): number
```

#### Returns

`number`

#### Defined in

[src/client/TaskSequence.ts:57](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L57)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/client/TaskSequence.ts:40](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L40)

***

### IsClosed

```ts
get IsClosed(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/TaskSequence.ts:53](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L53)

## Methods

### close()

```ts
close(repeat): void
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `repeat` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[src/client/TaskSequence.ts:31](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L31)

***

### dispose()

```ts
dispose(): void
```

#### Returns

`void`

#### Defined in

[src/client/TaskSequence.ts:26](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/TaskSequence.ts#L26)

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

[src/client/TaskSequence.ts:10](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L10)

## Accessors

### AddTask

```ts
get AddTask(): Tasks
```

#### Returns

[`Tasks`](Tasks.md)

#### Defined in

[src/client/TaskSequence.ts:45](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L45)

***

### Count

```ts
get Count(): number
```

#### Returns

`number`

#### Defined in

[src/client/TaskSequence.ts:58](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L58)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Defined in

[src/client/TaskSequence.ts:41](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L41)

***

### IsClosed

```ts
get IsClosed(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/TaskSequence.ts:54](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L54)

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

[src/client/TaskSequence.ts:32](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L32)

***

### dispose()

```ts
dispose(): void
```

#### Returns

`void`

#### Defined in

[src/client/TaskSequence.ts:27](https://github.com/nativewrappers/fivem/blob/23974f37709c3a4a6a2e52877548e496df556c3f/src/client/TaskSequence.ts#L27)

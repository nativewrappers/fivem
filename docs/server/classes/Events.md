[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Events

# Class: Events

## Constructors

### new Events()

```ts
new Events(): Events
```

#### Returns

[`Events`](Events.md)

## Accessors

### InvokingResource

```ts
get static InvokingResource(): string
```

#### Returns

`string`

#### Source

[src/server/Events.ts:67](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/Events.ts#L67)

## Methods

### cancel()

```ts
static cancel(): void
```

#### Returns

`void`

#### Source

[src/server/Events.ts:59](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/Events.ts#L59)

***

### on()

```ts
static on(eventName, event): void
```

An on wrapper that properly converts the classes

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` |
| `event` | [`LocalEvent`](../type-aliases/LocalEvent.md) |

#### Returns

`void`

#### Source

[src/server/Events.ts:85](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/Events.ts#L85)

***

### onNet()

```ts
static onNet(eventName, event): void
```

An onNet wrapper that properly converts the type into the correct type

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` |
| `event` | [`NetEvent`](../type-aliases/NetEvent.md) |

#### Returns

`void`

#### Source

[src/server/Events.ts:74](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/Events.ts#L74)

***

### wasCanceled()

```ts
static wasCanceled(): boolean
```

#### Returns

`boolean`

#### Source

[src/server/Events.ts:63](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/server/Events.ts#L63)

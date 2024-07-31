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

#### Defined in

[src/server/Events.ts:67](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/server/Events.ts#L67)

## Methods

### cancel()

```ts
static cancel(): void
```

#### Returns

`void`

#### Defined in

[src/server/Events.ts:59](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/server/Events.ts#L59)

***

### on()

```ts
static on(eventName, event): void
```

An on wrapper that properly converts the classes

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `event` | [`LocalEvent`](../type-aliases/LocalEvent.md) |

#### Returns

`void`

#### Defined in

[src/server/Events.ts:85](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/server/Events.ts#L85)

***

### onNet()

```ts
static onNet(eventName, event): void
```

An onNet wrapper that properly converts the type into the correct type

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `event` | [`NetEvent`](../type-aliases/NetEvent.md) |

#### Returns

`void`

#### Defined in

[src/server/Events.ts:74](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/server/Events.ts#L74)

***

### wasCanceled()

```ts
static wasCanceled(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/server/Events.ts:63](https://github.com/nativewrappers/fivem/blob/631c6d86e9569591c88ce277255e6c3e13e943cb/src/server/Events.ts#L63)

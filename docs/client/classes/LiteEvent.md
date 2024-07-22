[@nativewrappers/fivem](../../README.md) / [client](../README.md) / LiteEvent

# Class: LiteEvent

## Implements

- [`LiteEvent`](LiteEvent.md)

## Constructors

### new LiteEvent()

```ts
new LiteEvent(): LiteEvent
```

#### Returns

[`LiteEvent`](LiteEvent.md)

## Methods

### emit()

```ts
emit(...args): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/client/utils/LiteEvent.ts:20](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/LiteEvent.ts#L20)

***

### expose()

```ts
expose(): LiteEvent
```

#### Returns

[`LiteEvent`](LiteEvent.md)

#### Defined in

[src/client/utils/LiteEvent.ts:26](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/LiteEvent.ts#L26)

***

### off()

#### off(handler)

```ts
off(handler): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

##### Defined in

[src/client/utils/LiteEvent.ts:6](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/LiteEvent.ts#L6)

#### off(handler)

```ts
off(handler): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

##### Defined in

[src/client/utils/LiteEvent.ts:16](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/LiteEvent.ts#L16)

***

### on()

#### on(handler)

```ts
on(handler): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

##### Defined in

[src/client/utils/LiteEvent.ts:5](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/LiteEvent.ts#L5)

#### on(handler)

```ts
on(handler): void
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `handler` | (...`args`) => `any` |

##### Returns

`void`

##### Defined in

[src/client/utils/LiteEvent.ts:12](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/utils/LiteEvent.ts#L12)

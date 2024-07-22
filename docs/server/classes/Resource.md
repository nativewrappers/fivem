[@nativewrappers/fivem](../../README.md) / [server](../README.md) / Resource

# Class: Resource

## Constructors

### new Resource()

```ts
new Resource(name): Resource
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

[`Resource`](Resource.md)

#### Defined in

lib/common/Resource.d.ts:3

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `name` | `string` | lib/common/Resource.d.ts:2 |

## Methods

### getMetadata()

```ts
getMetadata(metadataKey, index): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `metadataKey` | `string` |
| `index` | `number` |

#### Returns

`string`

#### Defined in

lib/common/Resource.d.ts:4

***

### getPath()

```ts
getPath(): string
```

#### Returns

`string`

#### Defined in

lib/common/Resource.d.ts:5

***

### loadFile()

```ts
loadFile(fileName): string
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |

#### Returns

`string`

#### Defined in

lib/common/Resource.d.ts:6

***

### saveFile()

```ts
saveFile(
   fileName, 
   data, 
   length): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `fileName` | `string` |
| `data` | `string` |
| `length` | `number` |

#### Returns

`boolean`

#### Defined in

lib/common/Resource.d.ts:7

***

### scheduleTick()

```ts
scheduleTick(): void
```

#### Returns

`void`

#### Defined in

lib/common/Resource.d.ts:8

***

### start()

```ts
start(): void
```

#### Returns

`void`

#### Defined in

lib/common/Resource.d.ts:9

***

### stop()

```ts
stop(): void
```

#### Returns

`void`

#### Defined in

lib/common/Resource.d.ts:10

***

### resourceCount()

```ts
static resourceCount(): number
```

#### Returns

`number`

#### Defined in

lib/common/Resource.d.ts:13

***

### startResource()

```ts
static startResource(name): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

lib/common/Resource.d.ts:11

***

### stopResource()

```ts
static stopResource(name): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

lib/common/Resource.d.ts:12

[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Resource

# Class: Resource

## Constructors

### new Resource()

```ts
new Resource(name): Resource
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`Resource`](Resource.md)

#### Source

[src/common/Resource.ts:2](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L2)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `name` | `public` | `string` |

## Methods

### getMetadata()

```ts
getMetadata(metadataKey, index): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `metadataKey` | `string` |
| `index` | `number` |

#### Returns

`string`

#### Source

[src/common/Resource.ts:3](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L3)

***

### getPath()

```ts
getPath(): string
```

#### Returns

`string`

#### Source

[src/common/Resource.ts:7](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L7)

***

### loadFile()

```ts
loadFile(fileName): string
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fileName` | `string` |

#### Returns

`string`

#### Source

[src/common/Resource.ts:11](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L11)

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
| :------ | :------ |
| `fileName` | `string` |
| `data` | `string` |
| `length` | `number` |

#### Returns

`boolean`

#### Source

[src/common/Resource.ts:15](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L15)

***

### scheduleTick()

```ts
scheduleTick(): void
```

#### Returns

`void`

#### Source

[src/common/Resource.ts:19](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L19)

***

### start()

```ts
start(): void
```

#### Returns

`void`

#### Source

[src/common/Resource.ts:23](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L23)

***

### stop()

```ts
stop(): void
```

#### Returns

`void`

#### Source

[src/common/Resource.ts:27](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L27)

***

### resourceCount()

```ts
static resourceCount(): number
```

#### Returns

`number`

#### Source

[src/common/Resource.ts:39](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L39)

***

### startResource()

```ts
static startResource(name): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Source

[src/common/Resource.ts:31](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L31)

***

### stopResource()

```ts
static stopResource(name): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Source

[src/common/Resource.ts:35](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/Resource.ts#L35)

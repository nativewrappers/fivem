[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

## Constructors

### new VehicleWindowCollection()

```ts
new VehicleWindowCollection(owner): VehicleWindowCollection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Source

[src/client/models/VehicleWindowCollection.ts:12](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L12)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `_owner` | `private` | [`Vehicle`](Vehicle.md) | `undefined` |
| `_vehicleWindows` | `private` | `Map`\<[`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md), [`VehicleWindow`](VehicleWindow.md)\> | `...` |

## Accessors

### AreAllWindowsIntact

```ts
get AreAllWindowsIntact(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/VehicleWindowCollection.ts:36](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L36)

## Methods

### getAllWindows()

```ts
getAllWindows(): (undefined | null | VehicleWindow)[]
```

#### Returns

(`undefined` \| `null` \| [`VehicleWindow`](VehicleWindow.md))[]

#### Source

[src/client/models/VehicleWindowCollection.ts:23](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L23)

***

### getWindow()

```ts
getWindow(index): undefined | VehicleWindow
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

`undefined` \| [`VehicleWindow`](VehicleWindow.md)

#### Source

[src/client/models/VehicleWindowCollection.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L16)

***

### hasWindow()

```ts
hasWindow(window): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `window` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

`boolean`

#### Source

[src/client/models/VehicleWindowCollection.ts:52](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L52)

***

### rollDownAllWindows()

```ts
rollDownAllWindows(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindowCollection.ts:40](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L40)

***

### rollUpAllWindows()

```ts
rollUpAllWindows(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindowCollection.ts:46](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindowCollection.ts#L46)

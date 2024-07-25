[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleWindowCollection

# Class: VehicleWindowCollection

## Constructors

### new VehicleWindowCollection()

```ts
new VehicleWindowCollection(owner): VehicleWindowCollection
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWindowCollection`](VehicleWindowCollection.md)

#### Defined in

[src/client/models/VehicleWindowCollection.ts:12](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L12)

## Accessors

### AreAllWindowsIntact

```ts
get AreAllWindowsIntact(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/models/VehicleWindowCollection.ts:39](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L39)

## Methods

### getAllWindows()

```ts
getAllWindows(): (null | VehicleWindow)[]
```

#### Returns

(`null` \| [`VehicleWindow`](VehicleWindow.md))[]

#### Defined in

[src/client/models/VehicleWindowCollection.ts:26](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L26)

***

### getWindow()

```ts
getWindow(index): VehicleWindow
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

[`VehicleWindow`](VehicleWindow.md)

#### Defined in

[src/client/models/VehicleWindowCollection.ts:16](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L16)

***

### hasWindow()

```ts
hasWindow(window): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `window` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/VehicleWindowCollection.ts:55](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L55)

***

### rollDownAllWindows()

```ts
rollDownAllWindows(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/VehicleWindowCollection.ts:43](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L43)

***

### rollUpAllWindows()

```ts
rollUpAllWindows(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/VehicleWindowCollection.ts:49](https://github.com/nativewrappers/fivem/blob/6b247f1270087bcd3ee455389e3e7f1c86c9b619/src/client/models/VehicleWindowCollection.ts#L49)

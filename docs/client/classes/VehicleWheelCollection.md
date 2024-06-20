[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

## Constructors

### new VehicleWheelCollection()

```ts
new VehicleWheelCollection(owner): VehicleWheelCollection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Source

[src/client/models/VehicleWheelCollection.ts:9](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWheelCollection.ts#L9)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `_owner` | `private` | [`Vehicle`](Vehicle.md) | `undefined` |
| `_vehicleWheels` | `private` | `Map`\<`number`, [`VehicleWheel`](VehicleWheel.md)\> | `...` |

## Methods

### burstAllWheels()

```ts
burstAllWheels(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWheelCollection.ts:33](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWheelCollection.ts#L33)

***

### fixAllWheels()

```ts
fixAllWheels(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWheelCollection.ts:39](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWheelCollection.ts#L39)

***

### getAllWheels()

```ts
getAllWheels(): (undefined | null | VehicleWheel)[]
```

#### Returns

(`undefined` \| `null` \| [`VehicleWheel`](VehicleWheel.md))[]

#### Source

[src/client/models/VehicleWheelCollection.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWheelCollection.ts#L20)

***

### getWheel()

```ts
getWheel(index): undefined | VehicleWheel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`undefined` \| [`VehicleWheel`](VehicleWheel.md)

#### Source

[src/client/models/VehicleWheelCollection.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWheelCollection.ts#L13)

***

### hasWheel()

```ts
hasWheel(wheel): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `wheel` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`boolean`

#### Source

[src/client/models/VehicleWheelCollection.ts:45](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWheelCollection.ts#L45)

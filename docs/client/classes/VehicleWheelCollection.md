[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleWheelCollection

# Class: VehicleWheelCollection

## Constructors

### new VehicleWheelCollection()

```ts
new VehicleWheelCollection(owner): VehicleWheelCollection
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleWheelCollection`](VehicleWheelCollection.md)

#### Defined in

[src/client/models/VehicleWheelCollection.ts:9](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/models/VehicleWheelCollection.ts#L9)

## Methods

### burstAllWheels()

```ts
burstAllWheels(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/VehicleWheelCollection.ts:33](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/models/VehicleWheelCollection.ts#L33)

***

### fixAllWheels()

```ts
fixAllWheels(): void
```

#### Returns

`void`

#### Defined in

[src/client/models/VehicleWheelCollection.ts:39](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/models/VehicleWheelCollection.ts#L39)

***

### getAllWheels()

```ts
getAllWheels(): (undefined | null | VehicleWheel)[]
```

#### Returns

(`undefined` \| `null` \| [`VehicleWheel`](VehicleWheel.md))[]

#### Defined in

[src/client/models/VehicleWheelCollection.ts:20](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/models/VehicleWheelCollection.ts#L20)

***

### getWheel()

```ts
getWheel(index): undefined | VehicleWheel
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`undefined` \| [`VehicleWheel`](VehicleWheel.md)

#### Defined in

[src/client/models/VehicleWheelCollection.ts:13](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/models/VehicleWheelCollection.ts#L13)

***

### hasWheel()

```ts
hasWheel(wheel): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `wheel` | [`VehicleWheelIndex`](../enumerations/VehicleWheelIndex.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/VehicleWheelCollection.ts:45](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/models/VehicleWheelCollection.ts#L45)

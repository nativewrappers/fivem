[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleDoorCollection

# Class: VehicleDoorCollection

## Constructors

### new VehicleDoorCollection()

```ts
new VehicleDoorCollection(owner): VehicleDoorCollection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

#### Source

[src/client/models/VehicleDoorCollection.ts:12](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L12)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `_owner` | `private` | [`Vehicle`](Vehicle.md) | `undefined` |
| `_vehicleDoors` | `private` | `Map`\<[`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md), [`VehicleDoor`](VehicleDoor.md)\> | `...` |

## Methods

### breakAllDoors()

```ts
breakAllDoors(stayInTheWorld?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `stayInTheWorld`? | `boolean` |

#### Returns

`void`

#### Source

[src/client/models/VehicleDoorCollection.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L48)

***

### closeAllDoors()

```ts
closeAllDoors(instantly?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `instantly`? | `boolean` |

#### Returns

`void`

#### Source

[src/client/models/VehicleDoorCollection.ts:42](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L42)

***

### getAllDoors()

```ts
getAllDoors(): (undefined | null | VehicleDoor)[]
```

#### Returns

(`undefined` \| `null` \| [`VehicleDoor`](VehicleDoor.md))[]

#### Source

[src/client/models/VehicleDoorCollection.ts:23](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L23)

***

### getDoors()

```ts
getDoors(index): undefined | VehicleDoor
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

`undefined` \| [`VehicleDoor`](VehicleDoor.md)

#### Source

[src/client/models/VehicleDoorCollection.ts:16](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L16)

***

### hasDoor()

```ts
hasDoor(index): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

`boolean`

#### Source

[src/client/models/VehicleDoorCollection.ts:54](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L54)

***

### openAllDoors()

```ts
openAllDoors(loose?, instantly?): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `loose`? | `boolean` |
| `instantly`? | `boolean` |

#### Returns

`void`

#### Source

[src/client/models/VehicleDoorCollection.ts:36](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleDoorCollection.ts#L36)

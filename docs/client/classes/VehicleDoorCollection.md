[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleDoorCollection

# Class: VehicleDoorCollection

## Constructors

### new VehicleDoorCollection()

```ts
new VehicleDoorCollection(owner): VehicleDoorCollection
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `owner` | [`Vehicle`](Vehicle.md) |

#### Returns

[`VehicleDoorCollection`](VehicleDoorCollection.md)

#### Defined in

[src/client/models/VehicleDoorCollection.ts:12](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L12)

## Methods

### breakAllDoors()

```ts
breakAllDoors(stayInTheWorld?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `stayInTheWorld`? | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/VehicleDoorCollection.ts:48](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L48)

***

### closeAllDoors()

```ts
closeAllDoors(instantly?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `instantly`? | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/VehicleDoorCollection.ts:42](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L42)

***

### getAllDoors()

```ts
getAllDoors(): (undefined | null | VehicleDoor)[]
```

#### Returns

(`undefined` \| `null` \| [`VehicleDoor`](VehicleDoor.md))[]

#### Defined in

[src/client/models/VehicleDoorCollection.ts:23](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L23)

***

### getDoors()

```ts
getDoors(index): undefined | VehicleDoor
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

`undefined` \| [`VehicleDoor`](VehicleDoor.md)

#### Defined in

[src/client/models/VehicleDoorCollection.ts:16](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L16)

***

### hasDoor()

```ts
hasDoor(index): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | [`VehicleDoorIndex`](../enumerations/VehicleDoorIndex.md) |

#### Returns

`boolean`

#### Defined in

[src/client/models/VehicleDoorCollection.ts:54](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L54)

***

### openAllDoors()

```ts
openAllDoors(loose?, instantly?): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `loose`? | `boolean` |
| `instantly`? | `boolean` |

#### Returns

`void`

#### Defined in

[src/client/models/VehicleDoorCollection.ts:36](https://github.com/nativewrappers/fivem/blob/9c9296849bd5d47a19ca095df40cd4686e165154/src/client/models/VehicleDoorCollection.ts#L36)

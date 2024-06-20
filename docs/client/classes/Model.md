[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Model

# Class: Model

Class to create and manage entity models.

## Constructors

### new Model()

```ts
new Model(hash): Model
```

Creates a model object based on the hash key or model string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `hash` | `string` \| `number` | A number or string of the model's hash. Example: "mp_m_freemode_01" |

#### Returns

[`Model`](Model.md)

#### Source

[src/client/Model.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L20)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `hash` | `private` | `number` | Hash of this model. |

## Accessors

### Dimensions

```ts
get Dimensions(): Dimensions
```

Gets the model dimensions.

#### Returns

`Dimensions`

This model min & max dimensions.

#### Source

[src/client/Model.ts:191](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L191)

***

### Hash

```ts
get Hash(): number
```

Gets the hash of the model.

#### Returns

`number`

The hash key.

#### Source

[src/client/Model.ts:33](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L33)

***

### IsBicycle

```ts
get IsBicycle(): boolean
```

Gets if the model is a bicycle or not.

#### Returns

`boolean`

Whether this model is a bicycle.

#### Source

[src/client/Model.ts:78](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L78)

***

### IsBike

```ts
get IsBike(): boolean
```

Gets if the model is a motorbike or not.

#### Returns

`boolean`

Whether this model is a motorbike.

#### Source

[src/client/Model.ts:87](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L87)

***

### IsBoat

```ts
get IsBoat(): boolean
```

Gets if the model is a boat or not.

#### Returns

`boolean`

Whether this model is a boat.

#### Source

[src/client/Model.ts:96](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L96)

***

### IsCar

```ts
get IsCar(): boolean
```

Gets if the model is a car or not.

#### Returns

`boolean`

Whether this model is a car.

#### Source

[src/client/Model.ts:105](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L105)

***

### IsCargobob

```ts
get IsCargobob(): boolean
```

Gets if the model is a cargobob or not.

#### Returns

`boolean`

Whether this model is a cargobob.

#### Source

[src/client/Model.ts:114](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L114)

***

### IsCollisionLoaded

```ts
get IsCollisionLoaded(): boolean
```

Gets if the model collision is loaded or not.

#### Returns

`boolean`

Whether this model collision is loaded.

#### Source

[src/client/Model.ts:69](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L69)

***

### IsHelicopter

```ts
get IsHelicopter(): boolean
```

Gets if the model is a helicopter or not.

#### Returns

`boolean`

Whether this model is a helicopter.

#### Source

[src/client/Model.ts:128](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L128)

***

### IsInCdImage

```ts
get IsInCdImage(): boolean
```

Gets if the model is in cd image or not.

#### Returns

`boolean`

Whether this model is in cd image.

#### Source

[src/client/Model.ts:51](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L51)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

Gets if the model is loaded or not.

#### Returns

`boolean`

Whether this model is loaded.

#### Source

[src/client/Model.ts:60](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L60)

***

### IsPed

```ts
get IsPed(): boolean
```

Gets if the model is a Ped or not.

#### Returns

`boolean`

Whether this model is a Ped.

#### Source

[src/client/Model.ts:137](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L137)

***

### IsPlane

```ts
get IsPlane(): boolean
```

Gets if the model is a plane or not.

#### Returns

`boolean`

Whether this model is a plane.

#### Source

[src/client/Model.ts:146](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L146)

***

### IsProp

```ts
get IsProp(): boolean
```

Gets if the model is a prop or not.

#### Returns

`boolean`

Whether this model is a prop.

#### Source

[src/client/Model.ts:155](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L155)

***

### IsQuadbike

```ts
get IsQuadbike(): boolean
```

Gets if the model is a quadbike or not.

#### Returns

`boolean`

Whether this model is a quadbike.

#### Source

[src/client/Model.ts:164](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L164)

***

### IsTrain

```ts
get IsTrain(): boolean
```

Gets if the model is a train or not.

#### Returns

`boolean`

Whether this model is a train.

#### Source

[src/client/Model.ts:173](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L173)

***

### IsValid

```ts
get IsValid(): boolean
```

Gets if the model is valid or not.

#### Returns

`boolean`

Whether this model is valid.

#### Source

[src/client/Model.ts:42](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L42)

***

### IsVehicle

```ts
get IsVehicle(): boolean
```

Gets if the model is a Vehicle or not.

#### Returns

`boolean`

Whether this model is a Vehicle.

#### Source

[src/client/Model.ts:182](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L182)

## Methods

### markAsNoLongerNeeded()

```ts
markAsNoLongerNeeded(): void
```

Sets the model as no longer needed allowing the game engine to free memory.

#### Returns

`void`

#### Source

[src/client/Model.ts:223](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L223)

***

### request()

```ts
request(timeout): Promise<boolean>
```

Request and load the model with a specified timeout. Default timeout is 1000 (recommended).

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeout` | `number` | `1000` | Maximum allowed time for model to load. |

#### Returns

`Promise`\<`boolean`\>

#### Source

[src/client/Model.ts:203](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Model.ts#L203)

[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleWindow

# Class: VehicleWindow

## Constructors

### new VehicleWindow()

```ts
new VehicleWindow(owner, index): VehicleWindow
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Vehicle`](Vehicle.md) |
| `index` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

[`VehicleWindow`](VehicleWindow.md)

#### Source

[src/client/models/VehicleWindow.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L8)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `_index` | `private` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |
| `_owner` | `private` | [`Vehicle`](Vehicle.md) |

## Accessors

### Index

```ts
get Index(): VehicleWindowIndex
```

```ts
set Index(index): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `index` | [`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md) |

#### Returns

[`VehicleWindowIndex`](../enumerations/VehicleWindowIndex.md)

#### Source

[src/client/models/VehicleWindow.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L13)

***

### IsIntact

```ts
get IsIntact(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/VehicleWindow.ts:21](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L21)

***

### Vehicle

```ts
get Vehicle(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Source

[src/client/models/VehicleWindow.ts:25](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L25)

## Methods

### remove()

```ts
remove(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindow.ts:45](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L45)

***

### repair()

```ts
repair(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindow.ts:29](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L29)

***

### rollDown()

```ts
rollDown(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindow.ts:41](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L41)

***

### rollUp()

```ts
rollUp(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindow.ts:37](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L37)

***

### smash()

```ts
smash(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleWindow.ts:33](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleWindow.ts#L33)

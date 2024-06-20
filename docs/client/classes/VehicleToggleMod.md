[@nativewrappers/fivem](../../README.md) / [client](../README.md) / VehicleToggleMod

# Class: VehicleToggleMod

## Constructors

### new VehicleToggleMod()

```ts
new VehicleToggleMod(owner, modType): VehicleToggleMod
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `owner` | [`Vehicle`](Vehicle.md) |
| `modType` | [`VehicleToggleModType`](../enumerations/VehicleToggleModType.md) |

#### Returns

[`VehicleToggleMod`](VehicleToggleMod.md)

#### Source

[src/client/models/VehicleToggleMod.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleToggleMod.ts#L8)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `_modType` | `private` | [`VehicleToggleModType`](../enumerations/VehicleToggleModType.md) |
| `_owner` | `private` | [`Vehicle`](Vehicle.md) |

## Accessors

### IsInstalled

```ts
get IsInstalled(): boolean
```

```ts
set IsInstalled(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/VehicleToggleMod.ts:21](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleToggleMod.ts#L21)

***

### LocalizedModTypeName

```ts
get LocalizedModTypeName(): string
```

#### Returns

`string`

#### Source

[src/client/models/VehicleToggleMod.ts:29](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleToggleMod.ts#L29)

***

### ModType

```ts
get ModType(): VehicleToggleModType
```

```ts
set ModType(modType): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `modType` | [`VehicleToggleModType`](../enumerations/VehicleToggleModType.md) |

#### Returns

[`VehicleToggleModType`](../enumerations/VehicleToggleModType.md)

#### Source

[src/client/models/VehicleToggleMod.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleToggleMod.ts#L13)

***

### Vehicle

```ts
get Vehicle(): Vehicle
```

#### Returns

[`Vehicle`](Vehicle.md)

#### Source

[src/client/models/VehicleToggleMod.ts:33](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleToggleMod.ts#L33)

## Methods

### remove()

```ts
remove(): void
```

#### Returns

`void`

#### Source

[src/client/models/VehicleToggleMod.ts:37](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/VehicleToggleMod.ts#L37)

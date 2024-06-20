[@nativewrappers/fivem](../../README.md) / [client](../README.md) / WeaponAsset

# Class: WeaponAsset

weapon asset

## Constructors

### new WeaponAsset()

```ts
new WeaponAsset(hash): WeaponAsset
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |

#### Returns

[`WeaponAsset`](WeaponAsset.md)

#### Source

[src/client/weapon/WeaponAsset.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L13)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `hash` | `private` | [`WeaponHash`](../enumerations/WeaponHash.md) |

## Accessors

### DisplayName

```ts
get DisplayName(): string
```

get weapon display name / label

#### Returns

`string`

#### Source

[src/client/weapon/WeaponAsset.ts:87](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L87)

***

### Hash

```ts
get Hash(): WeaponHash
```

get weapon hash

#### Returns

[`WeaponHash`](../enumerations/WeaponHash.md)

#### Source

[src/client/weapon/WeaponAsset.ts:22](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L22)

***

### IsLoaded

```ts
get IsLoaded(): boolean
```

check weapon assets is loaded

#### Returns

`boolean`

#### Source

[src/client/weapon/WeaponAsset.ts:40](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L40)

***

### IsValid

```ts
get IsValid(): boolean
```

check weapon is valid

#### Returns

`boolean`

#### Source

[src/client/weapon/WeaponAsset.ts:31](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L31)

***

### LocalizedName

```ts
get LocalizedName(): string
```

get weapon localized name

#### Returns

`string`

#### Source

[src/client/weapon/WeaponAsset.ts:96](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L96)

## Methods

### dismiss()

```ts
dismiss(): void
```

unload weapon asset

#### Returns

`void`

#### Source

[src/client/weapon/WeaponAsset.ts:78](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L78)

***

### request()

```ts
request(): void
```

request weapon asset

#### Returns

`void`

#### Source

[src/client/weapon/WeaponAsset.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L48)

***

### requestAsync()

```ts
requestAsync(timeout): Promise<boolean>
```

request weapon asset async

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` |  |

#### Returns

`Promise`\<`boolean`\>

#### Source

[src/client/weapon/WeaponAsset.ts:57](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weapon/WeaponAsset.ts#L57)

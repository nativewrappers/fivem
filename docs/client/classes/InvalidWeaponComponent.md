[@nativewrappers/fivem](../../README.md) / [client](../README.md) / InvalidWeaponComponent

# Class: InvalidWeaponComponent

## Extends

- `WeaponComponent`

## Constructors

### new InvalidWeaponComponent()

```ts
new InvalidWeaponComponent(): InvalidWeaponComponent
```

#### Returns

[`InvalidWeaponComponent`](InvalidWeaponComponent.md)

#### Overrides

`WeaponComponent.constructor`

#### Source

[src/client/weaponComponent/InvalidWeaponComponent.ts:8](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/InvalidWeaponComponent.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `componentHash` | `readonly` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) | `WeaponComponent.componentHash` |
| `owner` | `readonly` | [`Ped`](Ped.md) | `WeaponComponent.owner` |
| `weapon` | `readonly` | [`Weapon`](Weapon.md) | `WeaponComponent.weapon` |

## Accessors

### Active

```ts
get Active(): boolean
```

```ts
set Active(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/weaponComponent/InvalidWeaponComponent.ts:13](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/InvalidWeaponComponent.ts#L13)

***

### AttachmentPoint

```ts
get AttachmentPoint(): ComponentAttachmentPoint
```

get component attachment point

#### Returns

[`ComponentAttachmentPoint`](../enumerations/ComponentAttachmentPoint.md)

#### Source

[src/client/weaponComponent/WeaponComponent.ts:91](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/WeaponComponent.ts#L91)

***

### ComponentHash

```ts
get ComponentHash(): WeaponComponentHash
```

get component hash

#### Returns

[`WeaponComponentHash`](../enumerations/WeaponComponentHash.md)

#### Source

[src/client/weaponComponent/WeaponComponent.ts:41](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/WeaponComponent.ts#L41)

***

### DisplayName

```ts
get DisplayName(): string
```

#### Returns

`string`

#### Source

[src/client/weaponComponent/InvalidWeaponComponent.ts:20](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/InvalidWeaponComponent.ts#L20)

***

### HudStats

```ts
get HudStats(): WeaponComponentHudStats
```

get component hud stats

#### Returns

[`WeaponComponentHudStats`](../interfaces/WeaponComponentHudStats.md)

#### Source

[src/client/weaponComponent/WeaponComponent.ts:100](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/WeaponComponent.ts#L100)

***

### IsInvalid

```ts
get IsInvalid(): boolean
```

Check WeaponComponent is invalid or not

#### Returns

`boolean`

#### Source

[src/client/weaponComponent/WeaponComponent.ts:32](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/WeaponComponent.ts#L32)

***

### LocalizedName

```ts
get LocalizedName(): string
```

#### Returns

`string`

#### Source

[src/client/weaponComponent/InvalidWeaponComponent.ts:24](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/InvalidWeaponComponent.ts#L24)

## Methods

### getAttachmentPoint()

```ts
static getAttachmentPoint(hash, componentHash): ComponentAttachmentPoint
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |
| `componentHash` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) |

#### Returns

[`ComponentAttachmentPoint`](../enumerations/ComponentAttachmentPoint.md)

#### Overrides

`WeaponComponent.getAttachmentPoint`

#### Source

[src/client/weaponComponent/InvalidWeaponComponent.ts:28](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/InvalidWeaponComponent.ts#L28)

***

### getComponentDisplayNameFromHash()

```ts
static getComponentDisplayNameFromHash(hash, componentHash): string
```

get component display name / label by hash

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |
| `componentHash` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) |  |

#### Returns

`string`

#### Inherited from

`WeaponComponent.getComponentDisplayNameFromHash`

#### Source

[src/client/weaponComponent/WeaponComponent.ts:112](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/weaponComponent/WeaponComponent.ts#L112)

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

#### Defined in

[src/client/weaponComponent/InvalidWeaponComponent.ts:8](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/InvalidWeaponComponent.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `componentHash` | `readonly` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) | `WeaponComponent.componentHash` | [src/client/weaponComponent/WeaponComponent.ts:19](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L19) |
| `owner` | `readonly` | [`Ped`](Ped.md) | `WeaponComponent.owner` | [src/client/weaponComponent/WeaponComponent.ts:17](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L17) |
| `weapon` | `readonly` | [`Weapon`](Weapon.md) | `WeaponComponent.weapon` | [src/client/weaponComponent/WeaponComponent.ts:18](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L18) |

## Accessors

### Active

```ts
get Active(): boolean
```

check ped has weapon component

```ts
set Active(value): void
```

check ped has weapon component

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Overrides

`WeaponComponent.Active`

#### Defined in

[src/client/weaponComponent/InvalidWeaponComponent.ts:13](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/InvalidWeaponComponent.ts#L13)

***

### AttachmentPoint

```ts
get AttachmentPoint(): ComponentAttachmentPoint
```

get component attachment point

#### Returns

[`ComponentAttachmentPoint`](../enumerations/ComponentAttachmentPoint.md)

#### Inherited from

`WeaponComponent.AttachmentPoint`

#### Defined in

[src/client/weaponComponent/WeaponComponent.ts:91](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L91)

***

### ComponentHash

```ts
get ComponentHash(): WeaponComponentHash
```

get component hash

#### Returns

[`WeaponComponentHash`](../enumerations/WeaponComponentHash.md)

#### Inherited from

`WeaponComponent.ComponentHash`

#### Defined in

[src/client/weaponComponent/WeaponComponent.ts:41](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L41)

***

### DisplayName

```ts
get DisplayName(): string
```

get component display name / label

#### Returns

`string`

#### Overrides

`WeaponComponent.DisplayName`

#### Defined in

[src/client/weaponComponent/InvalidWeaponComponent.ts:20](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/InvalidWeaponComponent.ts#L20)

***

### HudStats

```ts
get HudStats(): WeaponComponentHudStats
```

get component hud stats

#### Returns

[`WeaponComponentHudStats`](../interfaces/WeaponComponentHudStats.md)

#### Inherited from

`WeaponComponent.HudStats`

#### Defined in

[src/client/weaponComponent/WeaponComponent.ts:100](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L100)

***

### IsInvalid

```ts
get IsInvalid(): boolean
```

Check WeaponComponent is invalid or not

#### Returns

`boolean`

#### Inherited from

`WeaponComponent.IsInvalid`

#### Defined in

[src/client/weaponComponent/WeaponComponent.ts:32](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L32)

***

### LocalizedName

```ts
get LocalizedName(): string
```

get component localized name

#### Returns

`string`

#### Overrides

`WeaponComponent.LocalizedName`

#### Defined in

[src/client/weaponComponent/InvalidWeaponComponent.ts:24](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/InvalidWeaponComponent.ts#L24)

## Methods

### getAttachmentPoint()

```ts
static getAttachmentPoint(hash, componentHash): ComponentAttachmentPoint
```

get component attachment point by WeaponHash and WeaponComponentHash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) | - |
| `componentHash` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) |  |

#### Returns

[`ComponentAttachmentPoint`](../enumerations/ComponentAttachmentPoint.md)

#### Overrides

`WeaponComponent.getAttachmentPoint`

#### Defined in

[src/client/weaponComponent/InvalidWeaponComponent.ts:28](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/InvalidWeaponComponent.ts#L28)

***

### getComponentDisplayNameFromHash()

```ts
static getComponentDisplayNameFromHash(hash, componentHash): string
```

get component display name / label by hash

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | [`WeaponHash`](../enumerations/WeaponHash.md) |  |
| `componentHash` | [`WeaponComponentHash`](../enumerations/WeaponComponentHash.md) |  |

#### Returns

`string`

#### Inherited from

`WeaponComponent.getComponentDisplayNameFromHash`

#### Defined in

[src/client/weaponComponent/WeaponComponent.ts:112](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/WeaponComponent.ts#L112)

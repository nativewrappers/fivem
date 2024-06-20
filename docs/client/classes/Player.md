[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Player

# Class: Player

## Constructors

### new Player()

```ts
new Player(handle): Player
```

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `handle` | `number` | `-1` | the player handle, or if on the server, their source. |

#### Returns

[`Player`](Player.md)

#### Source

[src/client/models/Player.ts:25](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L25)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `handle` | `private` | `number` | `undefined` |
| `ped` | `private` | `undefined` \| [`Ped`](Ped.md) | `undefined` |
| `pvp` | `private` | `boolean` | `false` |
| `source` | `private` | `number` | `undefined` |
| `stateBagCookies` | `private` | `number`[] | `[]` |
| `type` | `private` | `ClassTypes` | `ClassTypes.Player` |

## Accessors

### Character

```ts
get Character(): Ped
```

This is here for compatibility with older versions.

#### Returns

[`Ped`](Ped.md)

#### Source

[src/client/models/Player.ts:40](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L40)

***

### DisableFiring

```ts
set DisableFiring(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Source

[src/client/models/Player.ts:118](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L118)

***

### EntityPlayerIsAimingAt

```ts
get EntityPlayerIsAimingAt(): null | BaseEntity
```

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Source

[src/client/models/Player.ts:132](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L132)

***

### FakeWantedLevel

```ts
get FakeWantedLevel(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:144](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L144)

***

### Ghosted

```ts
set Ghosted(isGhosted): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `isGhosted` | `boolean` |

#### Source

[src/client/models/Player.ts:122](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L122)

***

### Handle

```ts
get Handle(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:33](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L33)

***

### HasReserveParachute

```ts
get HasReserveParachute(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/Player.ts:152](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L152)

***

### HealthRechargeLimit

```ts
get HealthRechargeLimit(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:156](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L156)

***

### IsDead

```ts
get IsDead(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/Player.ts:114](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L114)

***

### IsInvincible

```ts
get IsInvincible(): boolean
```

#### Returns

`boolean`

#### Source

[src/client/models/Player.ts:160](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L160)

***

### MaxArmor

```ts
get MaxArmor(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:168](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L168)

***

### Name

```ts
get Name(): string
```

#### Returns

`string`

#### Source

[src/client/models/Player.ts:100](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L100)

***

### ParachuteColorTrailColor

```ts
get ParachuteColorTrailColor(): Color
```

#### Returns

[`Color`](Color.md)

#### Source

[src/client/models/Player.ts:184](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L184)

***

### ParachuteModelOverride

```ts
get ParachuteModelOverride(): Model
```

#### Returns

[`Model`](Model.md)

#### Source

[src/client/models/Player.ts:172](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L172)

***

### ParachutePackTintIndex

```ts
get ParachutePackTintIndex(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:176](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L176)

***

### ParachuteTintIndex

```ts
get ParachuteTintIndex(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:180](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L180)

***

### Ped

```ts
get Ped(): Ped
```

#### Returns

[`Ped`](Ped.md)

#### Source

[src/client/models/Player.ts:44](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L44)

***

### PlayerGroup

```ts
get PlayerGroup(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:148](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L148)

***

### PlayerRgbColour

```ts
get PlayerRgbColour(): Color
```

#### Returns

[`Color`](Color.md)

#### Source

[src/client/models/Player.ts:196](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L196)

***

### PvPEnabled

```ts
get PvPEnabled(): boolean
```

```ts
set PvPEnabled(value): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`boolean`

#### Source

[src/client/models/Player.ts:104](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L104)

***

### ReserveParachuteModelOverride

```ts
get ReserveParachuteModelOverride(): Model
```

#### Returns

[`Model`](Model.md)

#### Source

[src/client/models/Player.ts:188](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L188)

***

### ReserveParachuteTintIndex

```ts
get ReserveParachuteTintIndex(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:192](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L192)

***

### ServerId

```ts
get ServerId(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:54](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L54)

***

### SprintTimeRemaining

```ts
get SprintTimeRemaining(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:204](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L204)

***

### Stamina

```ts
get Stamina(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:200](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L200)

***

### State

```ts
get State(): StateBagInterface
```

#### Returns

`StateBagInterface`

#### Source

[src/client/models/Player.ts:61](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L61)

***

### StealthNoise

```ts
get StealthNoise(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:140](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L140)

***

### TargetEntity

```ts
get TargetEntity(): null | BaseEntity
```

The players melee target?

#### Returns

`null` \| [`BaseEntity`](BaseEntity.md)

#### Source

[src/client/models/Player.ts:211](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L211)

***

### Team

```ts
get Team(): number
```

#### Returns

`number`

#### Source

[src/client/models/Player.ts:220](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L220)

## Methods

### AddStateBagChangeHandler()

```ts
AddStateBagChangeHandler(keyFilter, handler): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `keyFilter` | `null` \| `string` |
| `handler` | `StateBagChangeHandler` |

#### Returns

`number`

#### Source

[src/client/models/Player.ts:65](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L65)

***

### CanPedHearPlayer()

```ts
CanPedHearPlayer(ped): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ped` | [`Ped`](Ped.md) |

#### Returns

`boolean`

#### Source

[src/client/models/Player.ts:226](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L226)

***

### listenForStateChange()

```ts
listenForStateChange(keyFilter, handler): number
```

A short hand function for AddStateBagChangeHandler, this gets automatically cleaned up on entity deletion.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `keyFilter` | `null` \| `string` | the key to filter for or null |
| `handler` | `StateBagChangeHandler` | the function to handle the change |

#### Returns

`number`

a cookie to be used in RemoveStateBagChangeHandler

#### Source

[src/client/models/Player.ts:82](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L82)

***

### removeAllStateListeners()

```ts
removeAllStateListeners(): void
```

#### Returns

`void`

#### Source

[src/client/models/Player.ts:94](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L94)

***

### removeStateListener()

```ts
removeStateListener(tgtCookie): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tgtCookie` | `number` |

#### Returns

`void`

#### Source

[src/client/models/Player.ts:86](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L86)

***

### fromPedHandle()

```ts
static fromPedHandle(handle): Player
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

[`Player`](Player.md)

#### Source

[src/client/models/Player.ts:14](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L14)

***

### fromServerId()

```ts
static fromServerId(serverId): Player
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `serverId` | `number` |

#### Returns

[`Player`](Player.md)

#### Source

[src/client/models/Player.ts:18](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/models/Player.ts#L18)

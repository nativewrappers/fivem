[@nativewrappers/fivem](../../README.md) / [client](../README.md) / ParticleEffect

# Class: `abstract` ParticleEffect

UNFINISHED! Class to manage particle effects.

## Constructors

### new ParticleEffect()

```ts
new ParticleEffect(asset, effectName): ParticleEffect
```

Creates a particle effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `asset` | [`ParticleEffectAsset`](ParticleEffectAsset.md) | Particle effect asset. |
| `effectName` | `string` | Name of effect. |

#### Returns

[`ParticleEffect`](ParticleEffect.md)

#### Defined in

[src/client/ParticleEffect.ts:26](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L26)

## Properties

| Property | Modifier | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `asset` | `readonly` | [`ParticleEffectAsset`](ParticleEffectAsset.md) | `undefined` | [src/client/ParticleEffect.ts:10](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L10) |
| `color` | `protected` | [`Color`](Color.md) | `Color.Transparent` | [src/client/ParticleEffect.ts:14](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L14) |
| `effectName` | `readonly` | `string` | `undefined` | [src/client/ParticleEffect.ts:11](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L11) |
| `invertAxis` | `protected` | [`InvertAxis`](../interfaces/InvertAxis.md) | `undefined` | [src/client/ParticleEffect.ts:17](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L17) |
| `offset` | `protected` | [`Vector3`](Vector3.md) | `undefined` | [src/client/ParticleEffect.ts:12](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L12) |
| `range` | `protected` | `number` | `1.0` | [src/client/ParticleEffect.ts:16](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L16) |
| `rotation` | `protected` | [`Vector3`](Vector3.md) | `undefined` | [src/client/ParticleEffect.ts:13](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L13) |
| `scale` | `protected` | `number` | `1.0` | [src/client/ParticleEffect.ts:15](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L15) |

## Accessors

### AssetName

```ts
get AssetName(): string
```

Get the name of the particle effect asset. Same as ParticleEffect.AssetName.

#### Returns

`string`

#### Defined in

[src/client/ParticleEffect.ts:132](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L132)

***

### EffectName

```ts
get EffectName(): string
```

Get the name of the particle effect.

#### Returns

`string`

#### Defined in

[src/client/ParticleEffect.ts:139](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L139)

***

### Handle

```ts
get Handle(): number
```

Get the particle effect handle.

#### Returns

`number`

#### Defined in

[src/client/ParticleEffect.ts:35](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L35)

***

### InvertAxis

```ts
get InvertAxis(): InvertAxis
```

Get the invert axis flag of the particle effect.

```ts
set InvertAxis(invertAxis): void
```

Set the inverted axis of the particle effect.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `invertAxis` | [`InvertAxis`](../interfaces/InvertAxis.md) |

#### Returns

[`InvertAxis`](../interfaces/InvertAxis.md)

#### Defined in

[src/client/ParticleEffect.ts:102](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L102)

***

### IsActive

```ts
get IsActive(): boolean
```

Get whether particle effect is currently active.

#### Returns

`boolean`

#### Defined in

[src/client/ParticleEffect.ts:42](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L42)

***

### Range

```ts
get Range(): number
```

Get the range of the particle effect.

```ts
set Range(range): void
```

Set the range of the particle effect.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `range` | `number` |

#### Returns

`number`

#### Defined in

[src/client/ParticleEffect.ts:87](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L87)

***

### Rotation

```ts
get Rotation(): Vector3
```

Get the rotation of the particle effect.

```ts
set Rotation(rotation): void
```

Set the rotation of the particle effect.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `rotation` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Defined in

[src/client/ParticleEffect.ts:61](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L61)

## Methods

### setParameter()

```ts
setParameter(parameterName, value): void
```

Set a paramaeter of a particle effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `parameterName` | `string` | Name of parameter. |
| `value` | `number` | Value of parameter. |

#### Returns

`void`

#### Defined in

[src/client/ParticleEffect.ts:123](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L123)

***

### start()

```ts
abstract start(): boolean
```

#### Returns

`boolean`

#### Defined in

[src/client/ParticleEffect.ts:46](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L46)

***

### stop()

```ts
stop(): void
```

Stop a particle effect.

#### Returns

`void`

#### Defined in

[src/client/ParticleEffect.ts:51](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L51)

***

### toString()

```ts
toString(): string
```

Return the particle effect as string. `AssetName`\`EffectName`.

#### Returns

`string`

#### Defined in

[src/client/ParticleEffect.ts:146](https://github.com/nativewrappers/fivem/blob/a98996c0c5fa01724c4f2137e7528f7f3c03bc27/src/client/ParticleEffect.ts#L146)

[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Checkpoint

# Class: Checkpoint

## Constructors

### new Checkpoint()

```ts
new Checkpoint(handle): Checkpoint
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

[`Checkpoint`](Checkpoint.md)

#### Source

[src/client/Checkpoint.ts:11](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Checkpoint.ts#L11)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `handle` | `private` | `number` | `undefined` |
| `icon` | `private` | [`CheckpointIcon`](../enumerations/CheckpointIcon.md) | `CheckpointIcon.Empty` |
| `position` | `private` | [`Vector3`](Vector3.md) | `...` |
| `radius` | `private` | `number` | `0` |
| `targetPosition` | `private` | [`Vector3`](Vector3.md) | `...` |

## Accessors

### Icon

```ts
get Icon(): CheckpointIcon
```

```ts
set Icon(icon): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `icon` | [`CheckpointIcon`](../enumerations/CheckpointIcon.md) |

#### Returns

[`CheckpointIcon`](../enumerations/CheckpointIcon.md)

#### Source

[src/client/Checkpoint.ts:31](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Checkpoint.ts#L31)

***

### Position

```ts
get Position(): Vector3
```

```ts
set Position(position): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `position` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/Checkpoint.ts:15](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Checkpoint.ts#L15)

***

### Radius

```ts
get Radius(): number
```

```ts
set Radius(radius): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `radius` | `number` |

#### Returns

`number`

#### Source

[src/client/Checkpoint.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Checkpoint.ts#L48)

***

### TargetPosition

```ts
get TargetPosition(): Vector3
```

```ts
set TargetPosition(targetPosition): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `targetPosition` | [`Vector3`](Vector3.md) |

#### Returns

[`Vector3`](Vector3.md)

#### Source

[src/client/Checkpoint.ts:23](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/Checkpoint.ts#L23)

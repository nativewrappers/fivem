[@nativewrappers/fivem](../../README.md) / [client](../README.md) / RelationshipGroup

# Class: RelationshipGroup

Class to create and manage a relationship group. Useful to manage behavior between Peds.

## Constructors

### new RelationshipGroup()

```ts
new RelationshipGroup(name): RelationshipGroup
```

Create a relationship group. Optionally pass a group hash.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of the relationship group. |

#### Returns

[`RelationshipGroup`](RelationshipGroup.md)

#### Source

[src/client/RelationshipGroup.ts:17](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/RelationshipGroup.ts#L17)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `hash` | `private` | `number` | The hash of the relationship group |

## Accessors

### Hash

```ts
get Hash(): number
```

Gets the hash of the relationship group.

#### Returns

`number`

The hash of this object.

#### Source

[src/client/RelationshipGroup.ts:27](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/RelationshipGroup.ts#L27)

## Methods

### clearRelationshipBetweenGroups()

```ts
clearRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally): void
```

Clear the relationship between this relationship group and another.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | `undefined` | The other relationship group. |
| `relationship` | [`Relationship`](../enumerations/Relationship.md) | `undefined` | The desired relationship to clear. |
| `biDirectionally` | `boolean` | `false` | Whether the target group should also clear the relationship. |

#### Returns

`void`

#### Source

[src/client/RelationshipGroup.ts:67](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/RelationshipGroup.ts#L67)

***

### getRelationshipBetweenGroups()

```ts
getRelationshipBetweenGroups(targetGroup): Relationship
```

Get the relationship between two relationship groups.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | The other relationship group. |

#### Returns

[`Relationship`](../enumerations/Relationship.md)

The relationship

#### Source

[src/client/RelationshipGroup.ts:37](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/RelationshipGroup.ts#L37)

***

### remove()

```ts
remove(): void
```

Remove this relationship group from the game. This will not delete this object.

#### Returns

`void`

#### Source

[src/client/RelationshipGroup.ts:82](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/RelationshipGroup.ts#L82)

***

### setRelationshipBetweenGroups()

```ts
setRelationshipBetweenGroups(
   targetGroup, 
   relationship, 
   biDirectionally): void
```

Set the relationship group between this relationship group and another one.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `targetGroup` | [`RelationshipGroup`](RelationshipGroup.md) | `undefined` | The other relationship group. |
| `relationship` | [`Relationship`](../enumerations/Relationship.md) | `undefined` | The desired relationship. |
| `biDirectionally` | `boolean` | `false` | If target group should have same relationship towards this. |

#### Returns

`void`

#### Source

[src/client/RelationshipGroup.ts:48](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/client/RelationshipGroup.ts#L48)

[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Vector2

# Class: Vector2

Represents a 2-dimensional vector.

## Extends

- `Vector`

## Constructors

### new Vector2()

```ts
new Vector2(x, y): Vector2
```

Constructs a new 2D vector.

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `x` | `number` | `undefined` | The x-component of the vector. |
| `y` | `number` | `x` | The y-component of the vector (optional, defaults to x). |

#### Returns

[`Vector2`](Vector2.md)

#### Overrides

`Vector.constructor`

#### Defined in

[src/common/utils/Vector.ts:670](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L670)

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
| `size` | `public` | `number` | `undefined` | The size of the vector (number of components). | - | `Vector.size` | [src/common/utils/Vector.ts:494](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L494) |
| `type` | `public` | `ClassTypes` | `ClassTypes.Vector2` | - | `Vector.type` | - | [src/common/utils/Vector.ts:661](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L661) |
| `w?` | `public` | `number` | `undefined` | The w-component of the vector (optional). | - | `Vector.w` | [src/common/utils/Vector.ts:498](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L498) |
| `x` | `public` | `number` | `0` | The x-component of the vector. | - | `Vector.x` | [src/common/utils/Vector.ts:495](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L495) |
| `y` | `public` | `number` | `x` | The y-component of the vector (optional, defaults to x). | - | `Vector.y` | [src/common/utils/Vector.ts:496](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L496) |
| `z?` | `public` | `number` | `undefined` | The z-component of the vector (optional). | - | `Vector.z` | [src/common/utils/Vector.ts:497](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L497) |
| `Zero` | `readonly` | [`Vector2`](Vector2.md) | `undefined` | - | - | - | [src/common/utils/Vector.ts:663](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L663) |

## Accessors

### Length

```ts
get Length(): number
```

Calculates the length (magnitude) of a vector.

#### Returns

`number`

The magnitude of the vector.

#### Inherited from

`Vector.Length`

#### Defined in

[src/common/utils/Vector.ts:646](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L646)

## Methods

### \[iterator\]()

```ts
iterator: Iterator<number, any, undefined>
```

#### Returns

`Iterator`\<`number`, `any`, `undefined`\>

#### Inherited from

`Vector.[iterator]`

#### Defined in

[src/common/utils/Vector.ts:501](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L501)

***

### add()

```ts
add(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.add

#### Inherited from

`Vector.add`

#### Defined in

[src/common/utils/Vector.ts:558](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L558)

***

### addAbsolute()

```ts
addAbsolute(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.addAbsolute

#### Inherited from

`Vector.addAbsolute`

#### Defined in

[src/common/utils/Vector.ts:600](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L600)

***

### addX()

```ts
addX(x): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.addX

#### Inherited from

`Vector.addX`

#### Defined in

[src/common/utils/Vector.ts:565](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L565)

***

### addY()

```ts
addY(x): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.addY

#### Inherited from

`Vector.addY`

#### Defined in

[src/common/utils/Vector.ts:572](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L572)

***

### clone()

```ts
clone(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.clone

#### Inherited from

`Vector.clone`

#### Defined in

[src/common/utils/Vector.ts:516](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L516)

***

### distance()

```ts
distance(v): number
```

The distance between two Vectors.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `VectorLike` | Vector to find distance between. |

#### Returns

`number`

Distance between this and another vector.

#### Inherited from

`Vector.distance`

#### Defined in

[src/common/utils/Vector.ts:537](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L537)

***

### distanceSquared()

```ts
distanceSquared(v): number
```

The product of the Euclidean magnitudes of this and another Vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `VectorLike` | Vector to find Euclidean magnitude between. |

#### Returns

`number`

Euclidean magnitude with another vector.

#### Inherited from

`Vector.distanceSquared`

#### Defined in

[src/common/utils/Vector.ts:526](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L526)

***

### divide()

```ts
divide(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.divide

#### Inherited from

`Vector.divide`

#### Defined in

[src/common/utils/Vector.ts:593](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L593)

***

### divideAbsolute()

```ts
divideAbsolute(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.divide

#### Inherited from

`Vector.divideAbsolute`

#### Defined in

[src/common/utils/Vector.ts:621](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L621)

***

### dotProduct()

```ts
dotProduct(v): number
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `this` |

#### Returns

`number`

#### See

Vector.dotProduct

#### Inherited from

`Vector.dotProduct`

#### Defined in

[src/common/utils/Vector.ts:551](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L551)

***

### multiply()

```ts
multiply(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.multiply

#### Inherited from

`Vector.multiply`

#### Defined in

[src/common/utils/Vector.ts:586](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L586)

***

### multiplyAbsolute()

```ts
multiplyAbsolute(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.multiply

#### Inherited from

`Vector.multiplyAbsolute`

#### Defined in

[src/common/utils/Vector.ts:614](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L614)

***

### normalize()

```ts
normalize(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.normalize

#### Inherited from

`Vector.normalize`

#### Defined in

[src/common/utils/Vector.ts:544](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L544)

***

### replace()

```ts
replace<T>(v): void
```

Replaces the components of the vector with the components of another vector object.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `v` | `T` | The object whose components will replace the current vector's components. |

#### Returns

`void`

#### Inherited from

`Vector.replace`

#### Defined in

[src/common/utils/Vector.ts:636](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L636)

***

### subtract()

```ts
subtract(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.subtract

#### Inherited from

`Vector.subtract`

#### Defined in

[src/common/utils/Vector.ts:579](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L579)

***

### subtractAbsolute()

```ts
subtractAbsolute(v): Vector2
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

[`Vector2`](Vector2.md)

#### See

Vector.subtractAbsolute

#### Inherited from

`Vector.subtractAbsolute`

#### Defined in

[src/common/utils/Vector.ts:607](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L607)

***

### toArray()

```ts
toArray<T>(): VectorArray<T>
```

Converts the vector to an array of its components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector2`](Vector2.md) |

#### Returns

`VectorArray`\<`T`\>

#### Inherited from

`Vector.toArray`

#### Defined in

[src/common/utils/Vector.ts:628](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L628)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

`Vector.toString`

#### Defined in

[src/common/utils/Vector.ts:509](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L509)

***

### Length()

```ts
static Length<T, U>(this, obj): number
```

Calculates the length (magnitude) of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector for which to calculate the length. |

#### Returns

`number`

The magnitude of the vector.

#### Inherited from

`Vector.Length`

#### Defined in

[src/common/utils/Vector.ts:472](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L472)

***

### add()

```ts
static add<T, U>(
   this, 
   a, 
   b): U
```

Adds two vectors or a scalar value to a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector or scalar value. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with incremented components.

#### Inherited from

`Vector.add`

#### Defined in

[src/common/utils/Vector.ts:189](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L189)

***

### addAbsolute()

```ts
static addAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Adds two vectors or a scalar value to a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector or scalar value. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with incremented components.

#### Inherited from

`Vector.addAbsolute`

#### Defined in

[src/common/utils/Vector.ts:322](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L322)

***

### addW()

```ts
static addW<T, U>(
   this, 
   obj, 
w): InferVector<U>
```

Adds a scalar value to the w-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec4` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `w` | `number` | The value to add to the w-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the w-component incremented.

#### Inherited from

`Vector.addW`

#### Defined in

[src/common/utils/Vector.ts:242](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L242)

***

### addX()

```ts
static addX<T, U>(
   this, 
   obj, 
x): InferVector<U>
```

Adds a scalar value to the x-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `x` | `number` | The value to add to the x-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the x-component incremented.

#### Inherited from

`Vector.addX`

#### Defined in

[src/common/utils/Vector.ts:203](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L203)

***

### addY()

```ts
static addY<T, U>(
   this, 
   obj, 
y): InferVector<U>
```

Adds a scalar value to the y-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `y` | `number` | The value to add to the y-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the y-component incremented.

#### Inherited from

`Vector.addY`

#### Defined in

[src/common/utils/Vector.ts:216](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L216)

***

### addZ()

```ts
static addZ<T, U>(
   this, 
   obj, 
z): InferVector<U>
```

Adds a scalar value to the z-component of a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec3` \| `Vec4` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `z` | `number` | The value to add to the z-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the z-component incremented.

#### Inherited from

`Vector.addZ`

#### Defined in

[src/common/utils/Vector.ts:229](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L229)

***

### clone()

```ts
static clone<T, U>(this, obj): InferVector<U>
```

Creates a deep copy of the provided vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The vector to clone. |

#### Returns

`InferVector`\<`U`\>

A new vector instance that is a copy of the provided vector.

#### Inherited from

`Vector.clone`

#### Defined in

[src/common/utils/Vector.ts:154](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L154)

***

### create()

Creates a new vector based on the provided parameters.

#### Param

The x-component of the vector.

#### Param

The y-component of the vector (optional, defaults to the value of x).

#### Param

The z-component of the vector (optional, defaults to the value of y).

#### Param

The w-component of the vector (optional, defaults to the value of z).

#### create(x, y)

```ts
protected static create(x, y?): Vector2
```

Creates a new vector based on the provided parameters.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |

##### Returns

[`Vector2`](Vector2.md)

##### Param

The x-component of the vector.

##### Param

The y-component of the vector (optional, defaults to the value of x).

##### Param

The z-component of the vector (optional, defaults to the value of y).

##### Param

The w-component of the vector (optional, defaults to the value of z).

##### Inherited from

`Vector.create`

##### Defined in

[src/common/utils/Vector.ts:92](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L92)

#### create(x, y, z)

```ts
protected static create(
   x, 
   y?, 
   z?): Vector3
```

Creates a new vector based on the provided parameters.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |

##### Returns

[`Vector3`](Vector3.md)

##### Param

The x-component of the vector.

##### Param

The y-component of the vector (optional, defaults to the value of x).

##### Param

The z-component of the vector (optional, defaults to the value of y).

##### Param

The w-component of the vector (optional, defaults to the value of z).

##### Inherited from

`Vector.create`

##### Defined in

[src/common/utils/Vector.ts:93](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L93)

#### create(x, y, z, w)

```ts
protected static create(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

Creates a new vector based on the provided parameters.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |
| `w`? | `number` |

##### Returns

[`Vector4`](Vector4.md)

##### Param

The x-component of the vector.

##### Param

The y-component of the vector (optional, defaults to the value of x).

##### Param

The z-component of the vector (optional, defaults to the value of y).

##### Param

The w-component of the vector (optional, defaults to the value of z).

##### Inherited from

`Vector.create`

##### Defined in

[src/common/utils/Vector.ts:94](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L94)

#### create(this, obj)

```ts
protected static create<T, U>(this, obj): InferVector<U>
```

Creates a new vector based on the provided vector-like object.

##### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `obj` | `U` | The object representing the vector. |

##### Returns

`InferVector`\<`U`\>

A new vector instance.

##### Inherited from

`Vector.create`

##### Defined in

[src/common/utils/Vector.ts:100](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L100)

***

### crossProduct()

```ts
static crossProduct<T, U>(
   this, 
   a, 
   b): U
```

Calculates the cross product of two vectors in three-dimensional space.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec3` \| `Vec4` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector. |
| `b` | `U` | The second vector. |

#### Returns

`U`

A new vector perpendicular to both input vectors.

#### Inherited from

`Vector.crossProduct`

#### Defined in

[src/common/utils/Vector.ts:402](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L402)

***

### divide()

```ts
static divide<T, U>(
   this, 
   a, 
   b): U
```

Divides two vectors by their components, or divides a vector by a scalar value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar vector. |

#### Returns

`U`

A new vector with divided components.

#### Inherited from

`Vector.divide`

#### Defined in

[src/common/utils/Vector.ts:283](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L283)

***

### divideAbsolute()

```ts
static divideAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Divides two vectors by their components, or divides a vector by a scalar value

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar vector. |

#### Returns

`U`

A new vector with divided components.

#### Inherited from

`Vector.divideAbsolute`

#### Defined in

[src/common/utils/Vector.ts:364](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L364)

***

### dotProduct()

```ts
static dotProduct<T, U>(
   this, 
   a, 
   b): number
```

Calculates the dot product of two vectors.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The first vector. |
| `b` | `U` | The second vector. |

#### Returns

`number`

A scalar value representing the degree of alignment between the input vectors.

#### Inherited from

`Vector.dotProduct`

#### Defined in

[src/common/utils/Vector.ts:378](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L378)

***

### fromArray()

```ts
static fromArray<T, U>(this, primitive): InferVector<U>
```

Creates a vector from an array of numbers.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `number`[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `primitive` | `U` | An array of numbers (usually returned by a native). |

#### Returns

`InferVector`\<`U`\>

#### Inherited from

`Vector.fromArray`

#### Defined in

[src/common/utils/Vector.ts:433](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L433)

***

### fromArrays()

```ts
static fromArrays<T, U>(this, primitives): InferVector<VectorArray<T>>[]
```

Creates an array of vectors from an array of number arrays

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorArray`\<`T`\>[] |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `primitives` | `U` | A multi-dimensional array of number arrays |

#### Returns

`InferVector`\<`VectorArray`\<`T`\>\>[]

#### Inherited from

`Vector.fromArrays`

#### Defined in

[src/common/utils/Vector.ts:460](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L460)

***

### fromBuffer()

```ts
static fromBuffer<T>(this, __namedParameters): InstanceType<T>
```

Creates a vector from binary data in a MsgpackBuffer.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `__namedParameters` | `MsgpackBuffer` |

#### Returns

`InstanceType`\<`T`\>

A new vector instance.

#### Inherited from

`Vector.fromBuffer`

#### Defined in

[src/common/utils/Vector.ts:141](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L141)

***

### fromObject()

```ts
static fromObject<T, U>(this, primitive): InstanceType<T>
```

Creates a vector from an array or object containing vector components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `any` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `primitive` | `MsgpackBuffer` \| `U` | The object to use as a vector. |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

`Vector.fromObject`

#### Defined in

[src/common/utils/Vector.ts:442](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L442)

***

### multiply()

```ts
static multiply<T, U>(
   this, 
   a, 
   b): U
```

Multiplies two vectors by their components, or multiplies a vector by a scalar value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with multiplied components.

#### Inherited from

`Vector.multiply`

#### Defined in

[src/common/utils/Vector.ts:269](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L269)

***

### multiplyAbsolute()

```ts
static multiplyAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Multiplies two vectors by their components, or multiplies a vector by a scalar value.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with multiplied components.

#### Inherited from

`Vector.multiplyAbsolute`

#### Defined in

[src/common/utils/Vector.ts:350](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L350)

***

### normalize()

```ts
static normalize<T, U>(this, a): U
```

Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| `a` | `U` |

#### Returns

`U`

The new normalized vector.

#### Inherited from

`Vector.normalize`

#### Defined in

[src/common/utils/Vector.ts:424](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L424)

***

### subtract()

```ts
static subtract<T, U>(
   this, 
   a, 
   b): U
```

Subtracts one vector from another or subtracts a scalar value from a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with subtracted components.

#### Inherited from

`Vector.subtract`

#### Defined in

[src/common/utils/Vector.ts:255](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L255)

***

### subtractAbsolute()

```ts
static subtractAbsolute<T, U>(
   this, 
   a, 
   b): U
```

Subtracts one vector from another or subtracts a scalar value from a vector.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with subtracted components.

#### Inherited from

`Vector.subtractAbsolute`

#### Defined in

[src/common/utils/Vector.ts:336](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/common/utils/Vector.ts#L336)

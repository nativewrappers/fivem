[@nativewrappers/fivem](../../README.md) / [common](../README.md) / Vector4

# Class: Vector4

Represents a 4-dimensional vector.

## Extends

- `Vector`

## Constructors

### new Vector4()

```ts
new Vector4(
   x, 
   y, 
   z, 
   w): Vector4
```

Constructs a new 4D vector.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | The x-component of the vector. |
| `y` | `number` | `x` | The y-component of the vector (optional, defaults to x). |
| `z` | `number` | `y` | The z-component of the vector (optional, defaults to y). |
| `w` | `number` | `z` | The w-component of the vector (optional, defaults to z). |

#### Returns

[`Vector4`](Vector4.md)

#### Overrides

`Vector.constructor`

#### Source

[src/common/utils/Vector.ts:614](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L614)

## Properties

| Property | Modifier | Type | Default value | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ | :------ |
| `size` | `public` | `number` | `undefined` | The size of the vector (number of components). | `Vector.size` | `Vector.size` |
| `type` | `public` | `ClassTypes` | `ClassTypes.Vector4` | - | `Vector.type` | `Vector.type` |
| `w` | `public` | `number` | `undefined` | - | `Vector.w` | `Vector.w` |
| `x` | `public` | `number` | `0` | The x-component of the vector. | `Vector.x` | `Vector.x` |
| `y` | `public` | `number` | `x` | The y-component of the vector (optional, defaults to x). | `Vector.y` | `Vector.y` |
| `z` | `public` | `number` | `undefined` | - | `Vector.z` | `Vector.z` |
| `Zero` | `readonly` | [`Vector4`](Vector4.md) | `...` | - | - | - |

## Accessors

### Length

```ts
get Length(): number
```

Calculates the length (magnitude) of a vector.

#### Returns

`number`

The magnitude of the vector.

#### Source

[src/common/utils/Vector.ts:536](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L536)

## Methods

### `[iterator]`()

```ts
iterator: Iterator<number, any, undefined>
```

#### Returns

`Iterator`\<`number`, `any`, `undefined`\>

#### Inherited from

`Vector.[iterator]`

#### Source

[src/common/utils/Vector.ts:419](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L419)

***

### add()

```ts
add(v): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.add`

#### See

Vector.add

#### Source

[src/common/utils/Vector.ts:476](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L476)

***

### addW()

```ts
addW(w): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addW

#### Source

[src/common/utils/Vector.ts:630](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L630)

***

### addX()

```ts
addX(x): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.addX`

#### See

Vector.addX

#### Source

[src/common/utils/Vector.ts:483](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L483)

***

### addY()

```ts
addY(x): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.addY`

#### See

Vector.addY

#### Source

[src/common/utils/Vector.ts:490](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L490)

***

### addZ()

```ts
addZ(z): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addZ

#### Source

[src/common/utils/Vector.ts:623](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L623)

***

### clone()

```ts
clone(): Vector4
```

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.clone`

#### See

Vector.clone

#### Source

[src/common/utils/Vector.ts:434](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L434)

***

### crossProduct()

```ts
crossProduct(v): Vec3 | Vec4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `Vec3` \| `Vec4` |

#### Returns

`Vec3` \| `Vec4`

#### See

Vector.crossProduct

#### Source

[src/common/utils/Vector.ts:637](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L637)

***

### distance()

```ts
distance(v): number
```

The distance between two Vectors.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `v` | `VectorLike` | Vector to find distance between. |

#### Returns

`number`

Distance between this and another vector.

#### Inherited from

`Vector.distance`

#### Source

[src/common/utils/Vector.ts:455](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L455)

***

### distanceSquared()

```ts
distanceSquared(v): number
```

The product of the Euclidean magnitudes of this and another Vector.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `v` | `VectorLike` | Vector to find Euclidean magnitude between. |

#### Returns

`number`

Euclidean magnitude with another vector.

#### Inherited from

`Vector.distanceSquared`

#### Source

[src/common/utils/Vector.ts:444](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L444)

***

### divide()

```ts
divide(v): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.divide`

#### See

Vector.divide

#### Source

[src/common/utils/Vector.ts:511](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L511)

***

### dotProduct()

```ts
dotProduct(v): number
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `this` |

#### Returns

`number`

#### Inherited from

`Vector.dotProduct`

#### See

Vector.dotProduct

#### Source

[src/common/utils/Vector.ts:469](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L469)

***

### multiply()

```ts
multiply(v): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.multiply`

#### See

Vector.multiply

#### Source

[src/common/utils/Vector.ts:504](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L504)

***

### normalize()

```ts
normalize(): Vector4
```

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.normalize`

#### See

Vector.normalize

#### Source

[src/common/utils/Vector.ts:462](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L462)

***

### replace()

```ts
replace<T>(v): void
```

Replaces the components of the vector with the components of another vector object.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `v` | `T` | The object whose components will replace the current vector's components. |

#### Returns

`void`

#### Inherited from

`Vector.replace`

#### Source

[src/common/utils/Vector.ts:526](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L526)

***

### subtract()

```ts
subtract(v): Vector4
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `VectorLike` |

#### Returns

[`Vector4`](Vector4.md)

#### Inherited from

`Vector.subtract`

#### See

Vector.subtract

#### Source

[src/common/utils/Vector.ts:497](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L497)

***

### toArray()

```ts
toArray<T>(): VectorArray<T>
```

Converts the vector to an array of its components.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Vector4`](Vector4.md) |

#### Returns

`VectorArray`\<`T`\>

#### Inherited from

`Vector.toArray`

#### Source

[src/common/utils/Vector.ts:518](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L518)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Inherited from

`Vector.toString`

#### Source

[src/common/utils/Vector.ts:427](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L427)

***

### Length()

```ts
static Length<T, U>(this, obj): number
```

Calculates the length (magnitude) of a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The vector for which to calculate the length. |

#### Returns

`number`

The magnitude of the vector.

#### Inherited from

`Vector.Length`

#### Source

[src/common/utils/Vector.ts:390](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L390)

***

### add()

```ts
static add<T, U>(
   this, 
   a, 
   b): U
```

Adds two vectors or a scalar value to a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `a` | `U` | The first vector or scalar value. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with incremented components.

#### Inherited from

`Vector.add`

#### Source

[src/common/utils/Vector.ts:190](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L190)

***

### addW()

```ts
static addW<T, U>(
   this, 
   obj, 
w): InferVector<U>
```

Adds a scalar value to the w-component of a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec4` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `w` | `number` | The value to add to the w-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the w-component incremented.

#### Inherited from

`Vector.addW`

#### Source

[src/common/utils/Vector.ts:243](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L243)

***

### addX()

```ts
static addX<T, U>(
   this, 
   obj, 
x): InferVector<U>
```

Adds a scalar value to the x-component of a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `x` | `number` | The value to add to the x-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the x-component incremented.

#### Inherited from

`Vector.addX`

#### Source

[src/common/utils/Vector.ts:204](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L204)

***

### addY()

```ts
static addY<T, U>(
   this, 
   obj, 
y): InferVector<U>
```

Adds a scalar value to the y-component of a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `y` | `number` | The value to add to the y-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the y-component incremented.

#### Inherited from

`Vector.addY`

#### Source

[src/common/utils/Vector.ts:217](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L217)

***

### addZ()

```ts
static addZ<T, U>(
   this, 
   obj, 
z): InferVector<U>
```

Adds a scalar value to the z-component of a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec3` \| `Vec4` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The vector. |
| `z` | `number` | The value to add to the z-component. |

#### Returns

`InferVector`\<`U`\>

A new vector with the z-component incremented.

#### Inherited from

`Vector.addZ`

#### Source

[src/common/utils/Vector.ts:230](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L230)

***

### clone()

```ts
static clone<T, U>(this, obj): InferVector<U>
```

Creates a deep copy of the provided vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The vector to clone. |

#### Returns

`InferVector`\<`U`\>

A new vector instance that is a copy of the provided vector.

#### Inherited from

`Vector.clone`

#### Source

[src/common/utils/Vector.ts:155](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L155)

***

### create()

#### create(x, y)

```ts
static protected create(x, y?): Vector2
```

Creates a new vector based on the provided parameters.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to the value of x). |

##### Returns

[`Vector2`](Vector2.md)

A new vector instance.

##### Inherited from

`Vector.create`

##### Source

[src/common/utils/Vector.ts:93](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L93)

#### create(x, y, z)

```ts
static protected create(
   x, 
   y?, 
   z?): Vector3
```

Creates a new vector based on the provided parameters.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to the value of x). |
| `z`? | `number` | The z-component of the vector (optional, defaults to the value of y). |

##### Returns

[`Vector3`](Vector3.md)

A new vector instance.

##### Inherited from

`Vector.create`

##### Source

[src/common/utils/Vector.ts:94](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L94)

#### create(x, y, z, w)

```ts
static protected create(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

Creates a new vector based on the provided parameters.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to the value of x). |
| `z`? | `number` | The z-component of the vector (optional, defaults to the value of y). |
| `w`? | `number` | The w-component of the vector (optional, defaults to the value of z). |

##### Returns

[`Vector4`](Vector4.md)

A new vector instance.

##### Inherited from

`Vector.create`

##### Source

[src/common/utils/Vector.ts:95](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L95)

#### create(this, obj)

```ts
static protected create<T, U>(this, obj): InferVector<U>
```

Creates a new vector based on the provided vector-like object.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `obj` | `U` | The object representing the vector. |

##### Returns

`InferVector`\<`U`\>

A new vector instance.

##### Inherited from

`Vector.create`

##### Source

[src/common/utils/Vector.ts:101](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L101)

***

### crossProduct()

```ts
static crossProduct<T, U>(
   this, 
   a, 
   b): U
```

Calculates the cross product of two vectors in three-dimensional space.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `Vec3` \| `Vec4` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `a` | `U` | The first vector. |
| `b` | `U` | The second vector. |

#### Returns

`U`

A new vector perpendicular to both input vectors.

#### Inherited from

`Vector.crossProduct`

#### Source

[src/common/utils/Vector.ts:322](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L322)

***

### divide()

```ts
static divide<T, U>(
   this, 
   a, 
   b): U
```

Divides two vectors by their components, or divides a vector by a scalar value.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar vector. |

#### Returns

`U`

A new vector with divided components.

#### Inherited from

`Vector.divide`

#### Source

[src/common/utils/Vector.ts:284](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L284)

***

### dotProduct()

```ts
static dotProduct<T, U>(
   this, 
   a, 
   b): number
```

Calculates the dot product of two vectors.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `a` | `U` | The first vector. |
| `b` | `U` | The second vector. |

#### Returns

`number`

A scalar value representing the degree of alignment between the input vectors.

#### Inherited from

`Vector.dotProduct`

#### Source

[src/common/utils/Vector.ts:298](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L298)

***

### fromArray()

```ts
static fromArray<T, U>(this, primitive): InferVector<U>
```

Creates a vector from an array of numbers.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `number`[] |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `primitive` | `U` | An array of numbers (usually returned by a native). |

#### Returns

`InferVector`\<`U`\>

#### Inherited from

`Vector.fromArray`

#### Source

[src/common/utils/Vector.ts:353](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L353)

***

### fromArrays()

```ts
static fromArrays<T, U>(this, primitives): InferVector<VectorArray<T>>[]
```

Creates an array of vectors from an array of number arrays

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorArray`\<`T`\>[] |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `primitives` | `U` | A multi-dimensional array of number arrays |

#### Returns

`InferVector`\<`VectorArray`\<`T`\>\>[]

#### Inherited from

`Vector.fromArrays`

#### Source

[src/common/utils/Vector.ts:378](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L378)

***

### fromBuffer()

```ts
static fromBuffer<T>(this, __namedParameters): InstanceType<T>
```

Creates a vector from binary data in a MsgpackBuffer.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `T` |
| `__namedParameters` | `MsgpackBuffer` |

#### Returns

`InstanceType`\<`T`\>

A new vector instance.

#### Inherited from

`Vector.fromBuffer`

#### Source

[src/common/utils/Vector.ts:142](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L142)

***

### fromObject()

```ts
static fromObject<T, U>(this, primitive): InstanceType<T>
```

Creates a vector from an array or object containing vector components.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `any` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `primitive` | `U` | The object to use as a vector. |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

`Vector.fromObject`

#### Source

[src/common/utils/Vector.ts:362](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L362)

***

### multiply()

```ts
static multiply<T, U>(
   this, 
   a, 
   b): U
```

Multiplies two vectors by their components, or multiplies a vector by a scalar value.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with multiplied components.

#### Inherited from

`Vector.multiply`

#### Source

[src/common/utils/Vector.ts:270](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L270)

***

### normalize()

```ts
static normalize<T, U>(this, a): U
```

Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `T` |
| `a` | `U` |

#### Returns

`U`

The new normalized vector.

#### Inherited from

`Vector.normalize`

#### Source

[src/common/utils/Vector.ts:344](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L344)

***

### subtract()

```ts
static subtract<T, U>(
   this, 
   a, 
   b): U
```

Subtracts one vector from another or subtracts a scalar value from a vector.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* *typeof* `Vector` |
| `U` *extends* `VectorLike` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `a` | `U` | The vector. |
| `b` | `number` \| `VectorLike` | The second vector or scalar value. |

#### Returns

`U`

A new vector with subtracted components.

#### Inherited from

`Vector.subtract`

#### Source

[src/common/utils/Vector.ts:256](https://github.com/nativewrappers/fivem/blob/dc30be651dd1d99507081f19ee3707fad2d3aa44/src/common/utils/Vector.ts#L256)

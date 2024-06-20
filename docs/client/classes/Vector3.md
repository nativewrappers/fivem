[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Vector3

# Class: Vector3

Represents a 3-dimensional vector.

## Extends

- `Vector`

## Implements

- `Vec3`

## Constructors

### new Vector3()

```ts
new Vector3(
   x, 
   y?, 
   z?): Vector3
```

Constructs a new 3D vector.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to x). |
| `z`? | `number` | The z-component of the vector (optional, defaults to y). |

#### Returns

[`Vector3`](Vector3.md)

#### Overrides

`Vector.constructor`

#### Source

lib/common/utils/Vector.d.ts:290

## Properties

| Property | Modifier | Type | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `size` | `public` | `number` | `Vector.size` | `Vector.size` |
| `type` | `public` | `ClassTypes` | `Vector.type` | `Vector.type` |
| `w?` | `public` | `number` | `Vector.w` | `Vector.w` |
| `x` | `public` | `number` | `Vec3.x`

`Vector.x` | `Vec3.x`

`Vector.x` |
| `y` | `public` | `number` | `Vec3.y`

`Vector.y` | `Vec3.y`

`Vector.y` |
| `z` | `public` | `number` | `Vec3.z`

`Vector.z` | `Vec3.z`

`Vector.z` |
| `Zero` | `readonly` | [`Vector3`](Vector3.md) | - | - |

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

lib/common/utils/Vector.d.ts:262

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

lib/common/utils/Vector.d.ts:197

***

### add()

```ts
add(v): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### Inherited from

`Vector.add`

#### See

Vector.add

#### Source

lib/common/utils/Vector.d.ts:228

***

### addX()

```ts
addX(x): Vector3
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`Vector.addX`

#### See

Vector.addX

#### Source

lib/common/utils/Vector.d.ts:232

***

### addY()

```ts
addY(x): Vector3
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`Vector.addY`

#### See

Vector.addY

#### Source

lib/common/utils/Vector.d.ts:236

***

### addZ()

```ts
addZ(z): Vector3
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `z` | `number` |

#### Returns

[`Vector3`](Vector3.md)

#### See

Vector.addZ

#### Source

lib/common/utils/Vector.d.ts:294

***

### clone()

```ts
clone(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`Vector.clone`

#### See

Vector.clone

#### Source

lib/common/utils/Vector.d.ts:202

***

### crossProduct()

```ts
crossProduct(v): Vec4 | Vec3
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `Vec4` \| `Vec3` |

#### Returns

`Vec4` \| `Vec3`

#### See

Vector.crossProduct

#### Source

lib/common/utils/Vector.d.ts:298

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

lib/common/utils/Vector.d.ts:216

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

lib/common/utils/Vector.d.ts:209

***

### divide()

```ts
divide(v): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### Inherited from

`Vector.divide`

#### See

Vector.divide

#### Source

lib/common/utils/Vector.d.ts:248

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

lib/common/utils/Vector.d.ts:224

***

### multiply()

```ts
multiply(v): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### Inherited from

`Vector.multiply`

#### See

Vector.multiply

#### Source

lib/common/utils/Vector.d.ts:244

***

### normalize()

```ts
normalize(): this
```

#### Returns

`this`

#### Inherited from

`Vector.normalize`

#### See

Vector.normalize

#### Source

lib/common/utils/Vector.d.ts:220

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

lib/common/utils/Vector.d.ts:257

***

### subtract()

```ts
subtract(v): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `v` | `VectorLike` |

#### Returns

`this`

#### Inherited from

`Vector.subtract`

#### See

Vector.subtract

#### Source

lib/common/utils/Vector.d.ts:240

***

### toArray()

```ts
toArray<T>(): VectorArray<T>
```

Converts the vector to an array of its components.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`Vector3`](Vector3.md) |

#### Returns

`VectorArray`\<`T`\>

#### Inherited from

`Vector.toArray`

#### Source

lib/common/utils/Vector.d.ts:252

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

lib/common/utils/Vector.d.ts:198

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

lib/common/utils/Vector.d.ts:187

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

lib/common/utils/Vector.d.ts:97

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

lib/common/utils/Vector.d.ts:125

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

lib/common/utils/Vector.d.ts:104

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

lib/common/utils/Vector.d.ts:111

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
| `U` *extends* `Vec4` \| `Vec3` |

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

lib/common/utils/Vector.d.ts:118

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

lib/common/utils/Vector.d.ts:82

***

### create()

#### create(x, y)

```ts
static protected create(x, y?): Vector2
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |
| `y`? | `number` |

##### Returns

[`Vector2`](Vector2.md)

##### Inherited from

`Vector.create`

##### Source

lib/common/utils/Vector.d.ts:62

#### create(x, y, z)

```ts
static protected create(
   x, 
   y?, 
   z?): Vector3
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |

##### Returns

[`Vector3`](Vector3.md)

##### Inherited from

`Vector.create`

##### Source

lib/common/utils/Vector.d.ts:63

#### create(x, y, z, w)

```ts
static protected create(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |
| `w`? | `number` |

##### Returns

[`Vector4`](Vector4.md)

##### Inherited from

`Vector.create`

##### Source

lib/common/utils/Vector.d.ts:64

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

lib/common/utils/Vector.d.ts:70

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
| `U` *extends* `Vec4` \| `Vec3` |

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

lib/common/utils/Vector.d.ts:160

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

lib/common/utils/Vector.d.ts:146

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

lib/common/utils/Vector.d.ts:153

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

lib/common/utils/Vector.d.ts:171

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

lib/common/utils/Vector.d.ts:181

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

lib/common/utils/Vector.d.ts:76

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

lib/common/utils/Vector.d.ts:176

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

lib/common/utils/Vector.d.ts:139

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

lib/common/utils/Vector.d.ts:166

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

lib/common/utils/Vector.d.ts:132

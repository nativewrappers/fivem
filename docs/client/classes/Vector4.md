[@nativewrappers/fivem](../../README.md) / [client](../README.md) / Vector4

# Class: Vector4

Represents a 4-dimensional vector.

## Extends

- `Vector`

## Constructors

### new Vector4()

```ts
new Vector4(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

Constructs a new 4D vector.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `x` | `number` | The x-component of the vector. |
| `y`? | `number` | The y-component of the vector (optional, defaults to x). |
| `z`? | `number` | The z-component of the vector (optional, defaults to y). |
| `w`? | `number` | The w-component of the vector (optional, defaults to z). |

#### Returns

[`Vector4`](Vector4.md)

#### Overrides

`Vector.constructor`

#### Defined in

lib/common/utils/Vector.d.ts:357

## Properties

| Property | Modifier | Type | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| `size` | `public` | `number` | - | `Vector.size` | lib/common/utils/Vector.d.ts:53 |
| `type` | `public` | `ClassTypes` | `Vector.type` | - | lib/common/utils/Vector.d.ts:346 |
| `w` | `public` | `number` | `Vector.w` | - | lib/common/utils/Vector.d.ts:348 |
| `x` | `public` | `number` | - | `Vector.x` | lib/common/utils/Vector.d.ts:54 |
| `y` | `public` | `number` | - | `Vector.y` | lib/common/utils/Vector.d.ts:55 |
| `z` | `public` | `number` | `Vector.z` | - | lib/common/utils/Vector.d.ts:347 |
| `Zero` | `readonly` | [`Vector4`](Vector4.md) | - | - | lib/common/utils/Vector.d.ts:349 |

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

lib/common/utils/Vector.d.ts:300

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

lib/common/utils/Vector.d.ts:223

***

### add()

```ts
add(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.add

#### Inherited from

`Vector.add`

#### Defined in

lib/common/utils/Vector.d.ts:254

***

### addW()

```ts
addW(w): Vector4
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `w` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addW

#### Defined in

lib/common/utils/Vector.d.ts:365

***

### addX()

```ts
addX(x): Vector4
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addX

#### Inherited from

`Vector.addX`

#### Defined in

lib/common/utils/Vector.d.ts:258

***

### addY()

```ts
addY(x): Vector4
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addY

#### Inherited from

`Vector.addY`

#### Defined in

lib/common/utils/Vector.d.ts:262

***

### addZ()

```ts
addZ(z): Vector4
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `number` |

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.addZ

#### Defined in

lib/common/utils/Vector.d.ts:361

***

### clone()

```ts
clone(): Vector4
```

#### Returns

[`Vector4`](Vector4.md)

#### See

Vector.clone

#### Inherited from

`Vector.clone`

#### Defined in

lib/common/utils/Vector.d.ts:228

***

### crossProduct()

```ts
crossProduct(v): Vec4 | Vec3
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `Vec4` \| `Vec3` |

#### Returns

`Vec4` \| `Vec3`

#### See

Vector.crossProduct

#### Defined in

lib/common/utils/Vector.d.ts:369

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

lib/common/utils/Vector.d.ts:242

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

lib/common/utils/Vector.d.ts:235

***

### divide()

```ts
divide(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.divide

#### Inherited from

`Vector.divide`

#### Defined in

lib/common/utils/Vector.d.ts:274

***

### divideAbsolute()

```ts
divideAbsolute(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.divide

#### Inherited from

`Vector.divideAbsolute`

#### Defined in

lib/common/utils/Vector.d.ts:286

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

lib/common/utils/Vector.d.ts:250

***

### multiply()

```ts
multiply(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.multiply

#### Inherited from

`Vector.multiply`

#### Defined in

lib/common/utils/Vector.d.ts:270

***

### multiplyAbsolute()

```ts
multiplyAbsolute(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `number` \| `VectorLike` |

#### Returns

`this`

#### See

Vector.multiply

#### Inherited from

`Vector.multiplyAbsolute`

#### Defined in

lib/common/utils/Vector.d.ts:282

***

### normalize()

```ts
normalize(): this
```

#### Returns

`this`

#### See

Vector.normalize

#### Inherited from

`Vector.normalize`

#### Defined in

lib/common/utils/Vector.d.ts:246

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

lib/common/utils/Vector.d.ts:295

***

### subtract()

```ts
subtract(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

`this`

#### See

Vector.subtract

#### Inherited from

`Vector.subtract`

#### Defined in

lib/common/utils/Vector.d.ts:266

***

### subtractAbsolute()

```ts
subtractAbsolute(v): this
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `VectorLike` |

#### Returns

`this`

#### See

Vector.subtractAbsolute

#### Inherited from

`Vector.subtractAbsolute`

#### Defined in

lib/common/utils/Vector.d.ts:278

***

### toArray()

```ts
toArray<T>(): VectorArray<T>
```

Converts the vector to an array of its components.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Vector4`](Vector4.md) |

#### Returns

`VectorArray`\<`T`\>

#### Inherited from

`Vector.toArray`

#### Defined in

lib/common/utils/Vector.d.ts:290

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

lib/common/utils/Vector.d.ts:224

***

### toVec2()

```ts
toVec2(): Vector2
```

#### Returns

[`Vector2`](Vector2.md)

the x and y values as Vec2

#### Defined in

lib/common/utils/Vector.d.ts:373

***

### toVec3()

```ts
toVec3(): Vector3
```

#### Returns

[`Vector3`](Vector3.md)

the x and y values as Vec3

#### Defined in

lib/common/utils/Vector.d.ts:377

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

lib/common/utils/Vector.d.ts:213

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

lib/common/utils/Vector.d.ts:94

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

lib/common/utils/Vector.d.ts:122

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

lib/common/utils/Vector.d.ts:101

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

lib/common/utils/Vector.d.ts:108

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
| `U` *extends* `Vec4` \| `Vec3` |

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

lib/common/utils/Vector.d.ts:115

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

lib/common/utils/Vector.d.ts:79

***

### create()

#### create(x, y)

```ts
protected static create(x, y?): Vector2
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |

##### Returns

[`Vector2`](Vector2.md)

##### Inherited from

`Vector.create`

##### Defined in

lib/common/utils/Vector.d.ts:59

#### create(x, y, z)

```ts
protected static create(
   x, 
   y?, 
   z?): Vector3
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |

##### Returns

[`Vector3`](Vector3.md)

##### Inherited from

`Vector.create`

##### Defined in

lib/common/utils/Vector.d.ts:60

#### create(x, y, z, w)

```ts
protected static create(
   x, 
   y?, 
   z?, 
   w?): Vector4
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y`? | `number` |
| `z`? | `number` |
| `w`? | `number` |

##### Returns

[`Vector4`](Vector4.md)

##### Inherited from

`Vector.create`

##### Defined in

lib/common/utils/Vector.d.ts:61

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

lib/common/utils/Vector.d.ts:67

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
| `U` *extends* `Vec4` \| `Vec3` |

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

lib/common/utils/Vector.d.ts:186

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

lib/common/utils/Vector.d.ts:143

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

lib/common/utils/Vector.d.ts:172

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

lib/common/utils/Vector.d.ts:179

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

lib/common/utils/Vector.d.ts:197

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

lib/common/utils/Vector.d.ts:207

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

lib/common/utils/Vector.d.ts:73

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
| `primitive` | `U` | The object to use as a vector. |

#### Returns

`InstanceType`\<`T`\>

#### Inherited from

`Vector.fromObject`

#### Defined in

lib/common/utils/Vector.d.ts:202

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

lib/common/utils/Vector.d.ts:136

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

lib/common/utils/Vector.d.ts:165

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

lib/common/utils/Vector.d.ts:192

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

lib/common/utils/Vector.d.ts:129

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

lib/common/utils/Vector.d.ts:158

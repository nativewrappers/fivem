// Adapted from https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts

import type { MsgpackBuffer } from '@common/types';

/**
 * Represents a 2-dimensional vector.
 */
export interface Vec2 {
	x: number;
	y: number;
}

/**
 * Represents a 3-dimensional vector.
 */
export interface Vec3 {
	x: number;
	y: number;
	z: number;
}

/**
 * Represents a 4-dimensional vector.
 */
export interface Vec4 {
	x: number;
	y: number;
	z: number;
	w: number;
}

/**
 * An object with vector components.
 */
interface VectorObject {
	x: number;
	y: number;
	z?: number;
	w?: number;
}

/**
 * An array that can be converted to a vector.
 */
type VectorArray<T extends VectorType> = T extends typeof Vector4
	? [number, number, number, number]
	: T extends typeof Vector3
	? [number, number, number]
	: T extends typeof Vector2
	? [number, number]
	: number[];

/**
 * The constructor type of the Vector class.
 */
type VectorType = typeof Vector;

/**
 * Represents an object or class that can be treated as a vector.
 */
type VectorLike = VectorObject | Vector;

type VectorKeys = keyof VectorObject;

/**
 * Utility type to get the vector type of an object based on its component.
 */
type InferVector<T> = T extends { z: number; w: number } | { length: 4 }
	? Vector4
	: T extends { z: number } | { length: 3 }
	? Vector3
	: T extends { x: number } | { length: 1 | 2 }
	? Vector2
	: T;

/**
 * A base vector class inherited by all vector classes.
 */
export class Vector {
	/**
	 * The type identifier for vectors.
	 */
	public type = 'vec';

	protected static create(x: number, y?: number): Vector2;
	protected static create(x: number, y?: number, z?: number): Vector3;
	protected static create(x: number, y?: number, z?: number, w?: number): Vector4;
	/**
	 * Creates a new vector based on the provided vector-like object.
	 * @param obj The object representing the vector.
	 * @returns A new vector instance.
	 */
	protected static create<T extends VectorType, U extends VectorLike>(this: T, obj: U): InferVector<U>;
	/**
	 * Creates a new vector based on the provided parameters.
	 * @param x The x-component of the vector.
	 * @param y The y-component of the vector (optional, defaults to the value of x).
	 * @param z The z-component of the vector (optional, defaults to the value of y).
	 * @param w The w-component of the vector (optional, defaults to the value of z).
	 * @returns A new vector instance.
	 */
	protected static create<T extends VectorType, U extends VectorLike>(
		this: T,
		x: U | number,
		y?: number,
		z?: number,
		w?: number,
	): InstanceType<T> {
		if (y === undefined && typeof x === 'number') return new Vector2(x, x) as InstanceType<T>;
		if (typeof x === 'object') ({ x, y, z, w } = x);

		const type =
			this instanceof Vector
				? this.type
				: `vec${[x, y, z, w].filter(arg => arg !== undefined).length}`;

		switch (type) {
			default:
			case 'vec':
				return new Vector2(x, y) as InstanceType<T>;
			case 'vec3':
				return new Vector3(x, y, z) as InstanceType<T>;
			case 'vec4':
				return new Vector4(x, y, z, w) as InstanceType<T>;
		}
	}

	/**
	 * Creates a vector from binary data in a MsgpackBuffer.
	 * @param msgpackBuffer The buffer containing binary data.
	 * @returns A new vector instance.
	 */
	public static fromBuffer({ buffer }: MsgpackBuffer) {
		const arr: number[] = [];

		for (let offset = 0; offset < buffer.length; offset += 4) arr.push(buffer.readFloatLE(offset));

		return this.fromArray(arr);
	}

	/**
	 * Creates a deep copy of the provided vector.
	 * @param obj The vector to clone.
	 * @returns A new vector instance that is a copy of the provided vector.
	 */
	public static clone<T extends VectorType, U extends VectorLike>(this: T, obj: U) {
		return this.create(obj);
	}

	/**
	 * Performs an operation between a vector and either another vector or scalar value.
	 * @param a - The first vector.
	 * @param b - The second vector or scalar value.
	 * @param operator - The function defining the operation to perform.
	 * @returns A new vector resulting from the operation.
	 */
	private static operate<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
		operator: (x: number, y: number) => number,
	): U {
		let { x, y, z, w } = a;
		const isNumber = typeof b === 'number';

		x = operator(x, isNumber ? b : b.x);
		y = operator(y, isNumber ? b : b.y);

		if (z) z = operator(z, isNumber ? b : b.z ?? 0);
		if (w) w = operator(w, isNumber ? b : b.w ?? 0);

		return this.create(x, y, z, w) as unknown as U;
	}

	/**
	 * Adds two vectors or a scalar value to a vector.
	 * @param a - The first vector or scalar value.
	 * @param b - The second vector or scalar value.
	 * @returns A new vector with incremented components.
	 */
	public static add<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x + y) as U;
	}

	/**
	 * Adds a scalar value to the x-component of a vector.
	 * @param obj - The vector.
	 * @param x - The value to add to the x-component.
	 * @returns A new vector with the x-component incremented.
	 */
	public static addX<T extends VectorType, U extends VectorLike>(this: T, obj: U, x: number) {
		const vec = this.clone(obj);
		vec.x += x;

		return vec;
	}

	/**
	 * Adds a scalar value to the y-component of a vector.
	 * @param obj - The vector.
	 * @param y - The value to add to the y-component.
	 * @returns A new vector with the y-component incremented.
	 */
	public static addY<T extends VectorType, U extends VectorLike>(this: T, obj: U, y: number) {
		if (typeof obj.y !== 'number') return;

		const vec = this.clone(obj);
		vec.y += y;

		return vec;
	}

	/**
	 * Adds a scalar value to the z-component of a vector.
	 * @param obj - The vector.
	 * @param z - The value to add to the z-component.
	 * @returns A new vector with the z-component incremented.
	 */
	public static addZ<T extends VectorType, U extends VectorLike>(this: T, obj: U, z: number) {
		if (typeof obj.z !== 'number') return;

		const vec = this.clone(obj);
		vec.z! += z;

		return vec;
	}

	/**
	 * Adds a scalar value to the w-component of a vector.
	 * @param obj - The vector.
	 * @param w - The value to add to the w-component.
	 * @returns A new vector with the w-component incremented.
	 */
	public static addW<T extends VectorType, U extends VectorLike>(this: T, obj: U, w: number) {
		if (typeof obj.w !== 'number') return;

		const vec = this.clone(obj);
		vec.w! += w;

		return vec;
	}

	/**
	 * Subtracts one vector from another or subtracts a scalar value from a vector.
	 * @param a - The vector.
	 * @param b - The second vector or scalar value.
	 * @returns A new vector with subtracted components.
	 */
	public static subtract<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x - y) as U;
	}

	/**
	 * Multiplies two vectors by their components, or multiplies a vector by a scalar value.
	 * @param a - The vector.
	 * @param b - The second vector or scalar value.
	 * @returns A new vector with multiplied components.
	 */
	public static multiply<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x * y) as U;
	}

	/**
	 * Divides two vectors by their components, or divides a vector by a scalar value.
	 * @param a - The vector.
	 * @param b - The second vector or scalar vector.
	 * @returns A new vector with divided components.
	 */
	public static divide<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x / y);
	}

	/**
	 * Calculates the dot product of two vectors.
	 * @param a - The first vector.
	 * @param b - The second vector.
	 * @returns A scalar value representing the degree of alignment between the input vectors.
	 */
	public static dotProduct<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: U,
	): number {
		let result = 0;

		for (const key of ['x', 'y', 'z', 'w'] as VectorKeys[]) {
			const v1 = a[key];
			const v2 = b[key];

			if (v1 && v2) result += v1 * v2;
			else if (v1 || v2) {
				throw new Error('Vectors must have the same dimensions');
			}
		}

		return result;
	}

	/**
	 * Calculates the cross product of two vectors in three-dimensional space.
	 * @param a - The first vector.
	 * @param b - The second vector.
	 * @returns A new vector perpendicular to both input vectors.
	 */
	public static crossProduct<T extends VectorType, U extends VectorObject>(this: T, a: U, b: U) {
		const { x: ax, y: ay, z: az, w: aw } = a;
		const { x: bx, y: by, z: bz } = b;

		if (
			ax === undefined ||
			ay === undefined ||
			az === undefined ||
			bx === undefined ||
			by === undefined ||
			bz === undefined
		)
			throw new Error('Vector.crossProduct requires two three-dimensional vectors.');

		return this.create(ay * bz - az * by, az * bx - ax * bz, ax * by - ay * bx, aw) as unknown as U;
	}

	/**
	 * Normalizes a vector, producing a new vector with the same direction but with a magnitude of 1.
	 * @param vector - The vector to be normalized.
	 * @returns The new normalized vector.
	 */
	public static normalize<T extends VectorType, U extends VectorLike>(this: T, a: U): U {
		const length = a instanceof Vector ? a.Length : this.Length(a);
		return this.divide(a, length) as U;
	}

	/**
	 * Creates a vector from an array of numbers.
	 * @param primitive An array of numbers (usually returned by a native).
	 */
	static fromArray<T extends VectorType, U extends VectorArray<T>>(this: T, primitive: U) {
		const [x, y, z, w] = primitive;
		return this.create(x, y, z, w) as InferVector<U>;
	}

	/**
	 * Creates an array of vectors from an array of number arrays
	 * @param primitives A multi-dimensional array of number arrays
	 */
	public static fromArrays<T extends VectorType, U extends VectorArray<T>[]>(
		this: T,
		primitives: U,
	) {
		return primitives.map(this.fromArray);
	}

	/**
	 * Calculates the length (magnitude) of a vector.
	 * @param obj - The vector for which to calculate the length.
	 * @returns The magnitude of the vector.
	 */
	public static Length<T extends VectorType, U extends VectorLike>(this: T, obj: U): number {
		let sum = 0;

		for (const key of ['x', 'y', 'z', 'w'] as VectorKeys[]) {
			if (key in obj) {
				const value = obj[key]!;
				sum += value * value;
			}
		}

		return Math.sqrt(sum);
	}

	/**
	 * Constructs a new vector.
	 * @param size The size of the vector (number of components).
	 * @param x The x-component of the vector.
	 * @param y The y-component of the vector (optional, defaults to x).
	 * @param z The z-component of the vector (optional).
	 * @param w The w-component of the vector (optional).
	 */
	constructor(
		public size: number,
		public x: number = 0,
		public y: number = x,
		public z?: number,
		public w?: number,
	) {}

	*[Symbol.iterator](): Iterator<number> {
		yield this.x;
		yield this.y;

		if (this.z) yield this.z;
		if (this.w) yield this.w;
	}

	public toString() {
		const { x, y, z, w } = this;
		return `${this.type}(${[x, y, z, w].filter(val => val !== undefined).join(', ')})`;
	}

	public toJSON() {
		return this.toString();
	}

	/**
	 * @see Vector.clone
	 */
	public clone() {
		return Vector.clone(this);
	}

	/**
	 * The product of the Euclidean magnitudes of this and another Vector.
	 *
	 * @param v Vector to find Euclidean magnitude between.
	 * @returns Euclidean magnitude with another vector.
	 */
	public distanceSquared(v: VectorLike): number {
		const w = this.subtract(v);
		return Vector.dotProduct(w, w);
	}

	/**
	 * The distance between two Vectors.
	 *
	 * @param v Vector to find distance between.
	 * @returns Distance between this and another vector.
	 */
	public distance(v: VectorLike): number {
		return Math.sqrt(this.distanceSquared(v));
	}

	/**
	 * @see Vector.normalize
	 */
	public normalize() {
		return Vector.normalize(this);
	}

	/**
	 * @see Vector.dotProduct
	 */
	public dotProduct(v: this): number {
		return Vector.dotProduct(this, v);
	}

	/**
	 * @see Vector.add
	 */
	public add(v: VectorLike | number) {
		return Vector.add(this, v);
	}

	/**
	 * @see Vector.addX
	 */
	public addX(x: number) {
		return Vector.addX(this, x);
	}

	/**
	 * @see Vector.addY
	 */
	public addY(x: number) {
		return Vector.addY(this, x);
	}

	/**
	 * @see Vector.subtract
	 */
	public subtract(v: VectorLike) {
		return Vector.subtract(this, v);
	}

	/**
	 * @see Vector.multiply
	 */
	public multiply(v: VectorLike | number) {
		return Vector.multiply(this, v);
	}

	/**
	 * @see Vector.divide
	 */
	public divide(v: VectorLike | number) {
		return Vector.divide(this, v);
	}

	/**
	 * Converts the vector to an array of its components.
	 */
	public toArray() {
		return [...this];
	}

	/**
	 * Replaces the components of the vector with the components of another vector object.
	 * @param v - The object whose components will replace the current vector's components.
	 */
	public replace<T extends VectorLike>(v: T): void {
		for (const key of ['x', 'y', 'z', 'w'] as VectorKeys[]) {
			if (key in this && key in v) this[key] = v[key] as number;
		}
	}

	/**
	 * Calculates the length (magnitude) of a vector.
	 * @returns The magnitude of the vector.
	 */
	public get Length(): number {
		let sum = 0;

		for (let value of this) sum += value * value;

		return Math.sqrt(sum);
	}
}

/**
 * Represents a 2-dimensional vector.
 */
export class Vector2 extends Vector {
	public type = 'vec2';

	public static readonly Zero: Vector2 = new Vector2(0, 0);

	/**
	 * Constructs a new 2D vector.
	 * @param x The x-component of the vector.
	 * @param y The y-component of the vector (optional, defaults to x).
	 */
	constructor(x: number, y = x) {
		super(2, x, y);
	}
}

/**
 * Represents a 3-dimensional vector.
 */
export class Vector3 extends Vector implements Vec3 {
	public type = 'vec3';
	public z: number;

	public static readonly Zero: Vector3 = new Vector3(0, 0, 0);

	/**
	 * Constructs a new 3D vector.
	 * @param x The x-component of the vector.
	 * @param y The y-component of the vector (optional, defaults to x).
	 * @param z The z-component of the vector (optional, defaults to y).
	 */
	constructor(x: number, y = x, z = y) {
		super(3, x, y, z);
		this.z = z;
	}

	/**
	 * @see Vector.addZ
	 */
	public addZ(z: number) {
		return Vector.addZ(this, z);
	}

	/**
	 * @see Vector.crossProduct
	 */
	public crossProduct(v: VectorLike) {
		return Vector.crossProduct(this, v);
	}
}
/**
 * Represents a 4-dimensional vector.
 */
export class Vector4 extends Vector {
	public type = 'vec4';
	public z: number;
	public w: number;

	public static readonly Zero: Vector4 = new Vector4(0, 0, 0, 0);

	/**
	 * Constructs a new 4D vector.
	 * @param x The x-component of the vector.
	 * @param y The y-component of the vector (optional, defaults to x).
	 * @param z The z-component of the vector (optional, defaults to y).
	 * @param w The w-component of the vector (optional, defaults to z).
	 */
	constructor(x: number, y = x, z = y, w = z) {
		super(4, x, y, z, w);
		this.z = z;
		this.w = w;
	}

	/**
	 * @see Vector.addZ
	 */
	public addZ(z: number) {
		return Vector.addZ(this, z);
	}

	/**
	 * @see Vector.addW
	 */
	public addW(w: number) {
		return Vector.addW(this, w);
	}

	/**
	 * @see Vector.crossProduct
	 */
	public crossProduct(v: VectorLike) {
		return Vector.crossProduct(this, v);
	}
}

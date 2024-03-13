// Adapted from https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts

import type { MsgpackBuffer } from '@common/types';

export interface Vec2 {
	x: number;
	y: number;
}

export interface Vec3 {
	x: number;
	y: number;
	z: number;
}

export interface Vec4 {
	x: number;
	y: number;
	z: number;
	w: number;
}

interface VectorObject {
	x: number;
	y: number;
	z?: number;
	w?: number;
}

type VectorArray = [number, number, number?, number?] | number[];
type VectorType = typeof Vector;
type VectorLike = VectorObject | Vector;
type VectorKeys = keyof VectorObject;

export class Vector {
	public type = 'vec';

	public static create(x: number, y?: number): Vector2;
	public static create(x: number, y?: number, z?: number): Vector3;
	public static create(x: number, y?: number, z?: number, w?: number): Vector4;
	public static create<U extends VectorLike>(obj: U): U;
	public static create<T extends VectorType>(
		this: T,
		x: VectorLike | number,
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

	public static fromBuffer({ buffer }: MsgpackBuffer) {
		const arr: number[] = [];

		for (let offset = 0; offset < buffer.length; offset += 4) arr.push(buffer.readFloatLE(offset));

		return this.fromArray(arr);
	}

	public static clone<T extends VectorType, U extends VectorLike>(this: T, obj: U) {
		return this.create(obj);
	}

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

	public static add<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x + y) as U;
	}

	public static addX<T extends VectorType, U extends VectorLike>(this: T, obj: U, x: number) {
		const vec = this.clone(obj);
		vec.x += x;

		return vec;
	}

	public static addY<T extends VectorType, U extends VectorLike>(this: T, obj: U, y: number) {
		if (typeof obj.y !== 'number') return;

		const vec = this.clone(obj);
		vec.y += y;

		return vec;
	}

	public static addZ<T extends VectorType, U extends VectorLike>(this: T, obj: U, z: number) {
		if (typeof obj.z !== 'number') return;

		const vec = this.clone(obj);
		vec.z! += z;

		return vec;
	}

	public static addW<T extends VectorType, U extends VectorLike>(this: T, obj: U, w: number) {
		if (typeof obj.w !== 'number') return;

		const vec = this.clone(obj);
		vec.w! += w;

		return vec;
	}

	public static subtract<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x - y) as U;
	}

	public static multiply<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x * y) as U;
	}

	public static divide<T extends VectorType, U extends VectorLike>(
		this: T,
		a: U,
		b: VectorLike | number,
	): U {
		return this.operate(a, b, (x, y) => x / y);
	}

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

	public static normalize<T extends VectorType, U extends VectorLike>(this: T, a: U): U {
		const length = a instanceof Vector ? a.Length : this.Length(a);
		return this.divide(a, length) as U;
	}

	/**
	 * Creates a vector from an array of numbers.
	 * @param primitive An array of numbers (usually returned by a native).
	 */
	static fromArray<T extends VectorType>(this: T, primitive: VectorArray): InstanceType<T> {
		const [x, y, z, w] = primitive;

		switch (
			this.name === 'Vector' ? `Vector${primitive.length < 2 ? 2 : primitive.length}` : this.name
		) {
			case 'Vector':
				return new Vector(x, y) as InstanceType<T>;
			case 'Vector3':
				return new Vector3(x, y, z) as InstanceType<T>;
			default:
			case 'Vector4':
				return new Vector4(x, y, z, w) as InstanceType<T>;
		}
	}

	/**
	 * Creates an array of vectors from an array of number arrays
	 * @param primitives A multi-dimensional array of number arrays
	 */
	public static fromArrays<T extends VectorType>(
		this: T,
		primitives: VectorArray[],
	): InstanceType<T>[] {
		return primitives.map(this.fromArray) as InstanceType<T>[];
	}

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

	public normalize() {
		return Vector.normalize(this);
	}

	public dotProduct(v: this): number {
		return Vector.dotProduct(this, v);
	}

	public add(v: VectorLike | number) {
		return Vector.add(this, v);
	}

	public addX(x: number) {
		return Vector.addX(this, x);
	}

	public addY(x: number) {
		return Vector.addY(this, x);
	}

	public subtract(v: VectorLike) {
		return Vector.subtract(this, v);
	}

	public multiply(v: VectorLike | number) {
		return Vector.multiply(this, v);
	}

	public divide(v: VectorLike | number) {
		return Vector.divide(this, v);
	}

	public toArray() {
		return [...this];
	}

	public replace<T extends VectorLike>(v: T): void {
		for (const key of ['x', 'y', 'z', 'w'] as VectorKeys[]) {
			if (key in this && key in v) this[key] = v[key] as number;
		}
	}

	public get Length(): number {
		let sum = 0;

		for (let value of this) sum += value * value;

		return Math.sqrt(sum);
	}
}

export class Vector2 extends Vector {
	public type = 'vec2';

	public static readonly Zero: Vector2 = new Vector2(0, 0);

	constructor(x: number, y = x) {
		super(2, x, y);
	}
}

export class Vector3 extends Vector implements Vec3 {
	public type = 'vec3';
	public z: number;

	public static readonly Zero: Vector3 = new Vector3(0, 0, 0);

	constructor(x: number, y = x, z = y) {
		super(3, x, y, z);
		this.z = z;
	}

	public addZ(z: number) {
		return Vector.addZ(this, z);
	}

	public crossProduct(v: VectorLike) {
		return Vector.crossProduct(this, v);
	}
}

export class Vector4 extends Vector {
	public type = 'vec4';
	public z: number;
	public w: number;

	public static readonly Zero: Vector4 = new Vector4(0, 0, 0, 0);

	constructor(x: number, y = x, z = y, w = z) {
		super(4, x, y, z, w);
		this.z = z;
		this.w = w;
	}

	public addZ(z: number) {
		return Vector.addZ(this, z);
	}

	public addW(w: number) {
		return Vector.addW(this, w);
	}

	public crossProduct(v: VectorLike) {
		return Vector.crossProduct(this, v);
	}
}

const vec = new Vector3(1);
const vec2 = Vector.crossProduct(vec, vec);

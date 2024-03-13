// Adapted from https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts

import type { MsgpackBuffer } from '@common/types';

type VectorObject = {
	x: number;
	y: number;
	z?: number;
	w?: number;
};

type VectorArray = [number, number, number?, number?] | number[];
type VectorType = typeof Vector;
type VectorLike = VectorObject | Vector;
type VectorKeys = keyof VectorObject;

export class Vector {
	public static create<T extends VectorType>(
		this: T,
		x: VectorLike | number,
		y?: number,
		z?: number,
		w?: number,
	): InstanceType<T> {
		if (!y && typeof x === 'number') return new Vector(x, x) as InstanceType<T>;
		if (typeof x === 'object') ({ x, y, z, w } = x);

		const name =
			this.name === 'Vector' ? `Vector${[x, y, z, w].filter(Boolean).length}` : this.name;

		switch (name) {
			default:
			case 'Vector':
				return new Vector(x, y) as InstanceType<T>;
			case 'Vector3':
				return new Vector3(x, y, z) as InstanceType<T>;
			case 'Vector4':
				return new Vector4(x, y, z, w) as InstanceType<T>;
		}
	}

	public static fromBuffer({ buffer }: MsgpackBuffer) {
		const arr: number[] = [];

		for (let offset = 0; offset < buffer.length; offset += 4) arr.push(buffer.readFloatLE(offset));

		return this.fromArray(arr);
	}

	public static clone<T extends VectorType>(this: T, obj: VectorLike) {
		return this.create(obj);
	}

	private static operate<T extends VectorType>(
		this: T,
		a: VectorLike,
		b: VectorLike | number,
		operator: (x: number, y: number) => number,
	) {
		let { x, y, z, w } = a;
		const isNumber = typeof b === 'number';

		x = operator(x, isNumber ? b : b.x);
		y = operator(y, isNumber ? b : b.y);

		if (z) z = operator(z, isNumber ? b : b.z ?? 0);
		if (w) w = operator(w, isNumber ? b : b.w ?? 0);

		return this.create(x, y, z, w);
	}

	public static add<T extends VectorType>(this: T, a: VectorLike, b: VectorLike | number) {
		return this.operate(a, b, (x, y) => x + y);
	}

	public static subtract<T extends VectorType>(this: T, a: VectorLike, b: VectorLike | number) {
		return this.operate(a, b, (x, y) => x - y);
	}

	public static multiply<T extends VectorType>(this: T, a: VectorLike, b: VectorLike | number) {
		return this.operate(a, b, (x, y) => x * y);
	}

	public static divide<T extends VectorType>(this: T, a: VectorLike, b: VectorLike | number) {
		return this.operate(a, b, (x, y) => x / y);
	}

	public static dotProduct<T extends VectorType>(
		this: T,
		a: InstanceType<T>,
		b: InstanceType<T>,
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

	public static normalize<T extends VectorType, U extends VectorLike>(this: T, a: U): U {
		const length = (a as Vector).Length || this.Length(a);
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
			if (typeof obj[key] === 'number') {
				const value = obj[key] as number; // because it definitely isn't undefined, typescript..
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
	) {
		this.size = size;
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}

	*[Symbol.iterator](): Iterator<[string, number]> {
		yield ['x', this.x];
		yield ['y', this.y];

		if (this.z) yield ['z', this.z];
		if (this.w) yield ['w', this.w];
	}

	public toString() {
		const { x, y, z, w } = this;
		return `${this.constructor.name}(${x}, ${y}${z ? `, ${z}` : ''}${w ? `, ${w}` : ''})`;
	}

	public toJSON() {
		return this.toString();
	}

	public clone() {
		return Vector.clone(this) as this;
	}

	/**
	 * The product of the Euclidean magnitudes of this and another Vector.
	 *
	 * @param v Vector to find Euclidean magnitude between.
	 * @returns Euclidean magnitude with another vector.
	 */
	public distanceSquared(v: VectorLike): number {
		const w: Vector = this.subtract(v);
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

	public get normalize() {
		return Vector.normalize(this);
	}

	public dotProduct(v: this): number {
		return Vector.dotProduct(this, v);
	}

	public add(v: VectorLike | number) {
		return Vector.add(this, v);
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

	public toArray(): [number, number] {
		return [this.x, this.y];
	}

	public replace(v: VectorLike): void {
		this.x = v.x;
		this.y = v.y;
	}

	public get Length(): number {
		let sum = 0;

		for (let [_, value] of this) sum += value * value;

		return Math.sqrt(sum);
	}
}

export class Vector2 extends Vector {
	constructor(x: number, y = x) {
		super(2, x, y);
	}
}

export class Vector3 extends Vector {
	public z!: number;

	constructor(x: number, y = x, z = y) {
		super(3, x, y, z);
	}
}

export class Vector4 extends Vector {
	public z!: number;
	public w!: number;

	constructor(x: number, y = x, z = y, w = z) {
		super(4, x, y, z, w);
	}
}

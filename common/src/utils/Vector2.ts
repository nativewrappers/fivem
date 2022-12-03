// Source: https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts
// This is an adjusted version of the Source
export interface Vec2 {
	x: number;
	y: number;
}

export type Vector2Type = Vector2 | Vec2;

export class Vector2 implements Vec2 {
	public type = "vec2";
	public static create(v1: Vec2 | number): Vector2 {
		if (typeof v1 === "number") return new Vector2(v1, v1);
		return new Vector2(v1.x, v1.y);
	}

	/**
	 * Creates a vector from an array of numbers
	 * @param primitive An array of numbers (usually returned by a native)
	 * ```
	 */
	public static fromArray(primitive: [number, number] | number[]): Vector2 {
		return new Vector2(primitive[0], primitive[1]);
	}

	/**
	 * Creates an array of vectors from an array number arrays
	 * @param primitives A multi-dimensional array of number arrays
	 * ```
	 */
	public static fromArrays(primitives: [number, number][] | number[][]): Vector2[] {
		return primitives.map(prim => new Vector2(prim[0], prim[1]));
	}

	public static clone(v1: Vec2): Vector2 {
		return Vector2.create(v1);
	}

	public static add(v1: Vector2Type, v2: Vector2Type | number): Vector2 {
		if (typeof v2 === "number") return new Vector2(v1.x + v2, v1.y + v2);
		return new Vector2(v1.x + v2.x, v1.y + v2.y);
	}

	public static subtract(v1: Vector2Type, v2: Vector2Type | number): Vector2 {
		if (typeof v2 === "number") return new Vector2(v1.x - v2, v1.y - v2);
		return new Vector2(v1.x - v2.x, v1.y - v2.y);
	}

	public static multiply(v1: Vector2Type, v2: Vector2Type | number): Vector2 {
		if (typeof v2 === "number") return new Vector2(v1.x * v2, v1.y * v2);
		return new Vector2(v1.x * v2.x, v1.y * v2.y);
	}

	public static divide(v1: Vector2Type, v2: Vector2Type | number): Vector2 {
		if (typeof v2 === "number") return new Vector2(v1.x / v2, v1.y / v2);
		return new Vector2(v1.x / v2.x, v1.y / v2.y);
	}

	public static dotProduct(v1: Vector2Type, v2: Vector2Type): number {
		return v1.x * v2.x + v1.y * v2.y;
	}

	public static normalize(v: Vector2): Vector2 {
		return Vector2.divide(v, v.Length);
	}

	constructor(public x: number, public y: number) {}

	public clone(): Vector2 {
		return new Vector2(this.x, this.y);
	}

	/**
	 * The product of the Euclidean magnitudes of this and another Vector2.
	 *
	 * @param v Vector2 to find Euclidean magnitude between.
	 * @returns Euclidean magnitude with another vector.
	 */
	public distanceSquared(v: Vector2Type): number {
		const w: Vector2 = this.subtract(v);
		return Vector2.dotProduct(w, w);
	}

	/**
	 * The distance between two Vectors.
	 *
	 * @param v Vector2 to find distance between.
	 * @returns Distance between this and another vector.
	 */
	public distance(v: Vector2Type): number {
		return Math.sqrt(this.distanceSquared(v));
	}

	public get normalize(): Vector2 {
		return Vector2.normalize(this);
	}

	public dotProduct(v: Vector2Type): number {
		return Vector2.dotProduct(this, v);
	}

	public add(v: Vector2Type | number): Vector2 {
		return Vector2.add(this, v);
	}

	public subtract(v: Vector2Type): Vector2 {
		return Vector2.subtract(this, v);
	}

	public multiply(v: Vector2Type | number): Vector2 {
		return Vector2.multiply(this, v);
	}

	public divide(v: Vector2Type | number): Vector2 {
		return Vector2.divide(this, v);
	}

	public toArray(): [number, number] {
		return [this.x, this.y];
	}

	public replace(v: Vector2Type): void {
		this.x = v.x;
		this.y = v.y;
	}

	public get Length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

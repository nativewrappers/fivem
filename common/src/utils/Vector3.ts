// Source: https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts
export interface Vec3 {
	x: number;
	y: number;
	z: number;
}

export type Vector = Vector3 | Vec3;

export class Vector3 implements Vec3 {
	public type = "vec3";
	public static readonly Zero: Vector3 = new Vector3(0, 0, 0);

	public static create(v1: Vec3 | number): Vector3 {
		if (typeof v1 === "number") return new Vector3(v1, v1, v1);
		return new Vector3(v1.x, v1.y, v1.z);
	}

	/**
	 * Creates a vector from an array of numbers
	 * @param primitive An array of numbers (usually returned by a native)
	 * @example ```ts
	 * const entityPos = Vector3.fromArray(GetEntityCoords(entity))
	 * ```
	 */
	public static fromArray(primitive: [number, number, number] | number[]): Vector3 {
		return new Vector3(primitive[0], primitive[1], primitive[2]);
	}

	/**
	 * Creates an array of vectors from an array number arrays
	 * @param primitives A multi-dimensional array of number arrays
	 * @example ```ts
	 * const [forward, right, up, position] = Vector3.fromArrays(GetEntityMatrix(entity))
	 * ```
	 */
	public static fromArrays(primitives: [number, number, number][] | number[][]): Vector3[] {
		return primitives.map(prim => new Vector3(prim[0], prim[1], prim[2]));
	}

	public static clone(v1: Vec3): Vector3 {
		return Vector3.create(v1);
	}

	public static add(v1: Vector, v2: Vector | number): Vector3 {
		if (typeof v2 === "number") return new Vector3(v1.x + v2, v1.y + v2, v1.z + v2);
		return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
	}

	public static addX(vec: Vector, x: number): Vector3 {
		return new Vector3(vec.x + x, vec.y, vec.z);
	}

	public static addY(vec: Vector, y: number): Vector3 {
		return new Vector3(vec.x, vec.y + y, vec.z);
	}

	public static addZ(vec: Vector, z: number): Vector3 {
		return new Vector3(vec.x, vec.y, vec.z + z);
	}

	public static subtract(v1: Vector, v2: Vector | number): Vector3 {
		if (typeof v2 === "number") return new Vector3(v1.x - v2, v1.y - v2, v1.z - v2);
		return new Vector3(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
	}

	public static multiply(v1: Vector, v2: Vector | number): Vector3 {
		if (typeof v2 === "number") return new Vector3(v1.x * v2, v1.y * v2, v1.z * v2);
		return new Vector3(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z);
	}

	public static divide(v1: Vector, v2: Vector | number): Vector3 {
		if (typeof v2 === "number") return new Vector3(v1.x / v2, v1.y / v2, v1.z / v2);
		return new Vector3(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z);
	}

	public static dotProduct(v1: Vector, v2: Vector): number {
		return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
	}

	public static crossProduct(v1: Vector, v2: Vector): Vector3 {
		const x = v1.y * v2.z - v1.z * v2.y;
		const y = v1.z * v2.x - v1.x * v2.z;
		const z = v1.x * v2.y - v1.y * v2.x;
		return new Vector3(x, y, z);
	}

	public static normalize(v: Vector3): Vector3 {
		return Vector3.divide(v, v.Length);
	}

	constructor(public x: number, public y: number, public z: number) {}

	public clone(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	/**
	 * The product of the Euclidean magnitudes of this and another Vector3.
	 *
	 * @param v Vector3 to find Euclidean magnitude between.
	 * @returns Euclidean magnitude with another vector.
	 */
	public distanceSquared(v: Vector): number {
		const w: Vector3 = this.subtract(v);
		return Vector3.dotProduct(w, w);
	}

	/**
	 * The distance between two Vectors.
	 *
	 * @param v Vector3 to find distance between.
	 * @returns Distance between this and another vector.
	 */
	public distance(v: Vector): number {
		return Math.sqrt(this.distanceSquared(v));
	}

	public get normalize(): Vector3 {
		return Vector3.normalize(this);
	}

	public crossProduct(v: Vector): Vector3 {
		return Vector3.crossProduct(this, v);
	}

	public dotProduct(v: Vector): number {
		return Vector3.dotProduct(this, v);
	}

	public add(v: Vector | number): Vector3 {
		return Vector3.add(this, v);
	}

	public addX(x: number): Vector3 {
		return Vector3.addX(this, x);
	}
	public addY(y: number): Vector3 {
		return Vector3.addY(this, y);
	}
	public addZ(z: number): Vector3 {
		return Vector3.addZ(this, z);
	}

	public subtract(v: Vector): Vector3 {
		return Vector3.subtract(this, v);
	}

	public multiply(v: Vector | number): Vector3 {
		return Vector3.multiply(this, v);
	}

	public divide(v: Vector | number): Vector3 {
		return Vector3.divide(this, v);
	}

	public toArray(): [number, number, number] {
		return [this.x, this.y, this.z];
	}

	public replace(v: Vector): void {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
	}

	public get Length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
}

// Source: https://raw.githubusercontent.com/you21979/typescript-vector/master/vector3.ts

import { Vector3 } from "./Vector3";

// This is an adjusted version of the Source
export interface Vec4 {
	x: number;
	y: number;
	z: number;
	w: number;
}

export type Vector4Type = Vector4 | Vec4;

export class Vector4 implements Vec4 {
	public type = "vec4";
	public static create(v1: Vec4 | number): Vector4 {
		if (typeof v1 === "number") return new Vector4(v1, v1, v1, v1);
		return new Vector4(v1.x, v1.y, v1.z, v1.w);
	}

	/**
	 * Creates a vector from an array of numbers
	 * @param primitive An array of numbers (usually returned by a native)
	 * ```
	 */
	public static fromArray(primitive: [number, number, number, number] | number[]): Vector4 {
		return new Vector4(primitive[0], primitive[1], primitive[2], primitive[3]);
	}

	/**
	 * Creates an array of vectors from an array number arrays
	 * @param primitives A multi-dimensional array of number arrays
	 * ```
	 */
	public static fromArrays(
		primitives: [number, number, number, number][] | number[][],
	): Vector4[] {
		return primitives.map(prim => new Vector4(prim[0], prim[1], prim[2], prim[3]));
	}

	public static clone(v1: Vec4): Vector4 {
		return Vector4.create(v1);
	}

	public static add(v1: Vector4Type, v2: Vector4Type | number): Vector4 {
		if (typeof v2 === "number") return new Vector4(v1.x + v2, v1.y + v2, v1.z + v2, v1.w + v2);
		return new Vector4(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z, v1.w + v2.w);
	}

	public static subtract(v1: Vector4Type, v2: Vector4Type | number): Vector4 {
		if (typeof v2 === "number") return new Vector4(v1.x - v2, v1.y - v2, v1.z - v2, v1.w - v2);
		return new Vector4(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z, v1.w - v2.w);
	}

	public static multiply(v1: Vector4Type, v2: Vector4Type | number): Vector4 {
		if (typeof v2 === "number") return new Vector4(v1.x * v2, v1.y * v2, v1.z * v2, v1.w * v2);
		return new Vector4(v1.x * v2.x, v1.y * v2.y, v1.z * v2.z, v1.w * v2.w);
	}

	public static divide(v1: Vector4Type, v2: Vector4Type | number): Vector4 {
		if (typeof v2 === "number") return new Vector4(v1.x / v2, v1.y / v2, v1.z / v2, v1.w / v2);
		return new Vector4(v1.x / v2.x, v1.y / v2.y, v1.z / v2.z, v1.w / v2.w);
	}

	public static dotProduct(v1: Vector4Type, v2: Vector4Type): number {
		return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z + v1.w * v2.w;
	}

	public static crossProduct(v1: Vector4Type, v2: Vector4Type): Vector4 {
		const x = v1.y * v2.z - v1.z * v2.y;
		const y = v1.z * v2.x - v1.x * v2.z;
		const z = v1.x * v2.y - v1.y * v2.x;
		return new Vector4(x, y, z, v1.w);
	}

	public static normalize(v: Vector4): Vector4 {
		return Vector4.divide(v, v.Length);
	}

	constructor(public x: number, public y: number, public z: number, public w: number) {}

	public clone(): Vector4 {
		return new Vector4(this.x, this.y, this.z, this.w);
	}

	/**
	 * The product of the Euclidean magnitudes of this and another Vector4.
	 *
	 * @param v Vector4 to find Euclidean magnitude between.
	 * @returns Euclidean magnitude with another vector.
	 */
	public distanceSquared(v: Vector4Type): number {
		const w: Vector4 = this.subtract(v);
		return Vector4.dotProduct(w, w);
	}

	/**
	 * The distance between two Vectors.
	 *
	 * @param v Vector4 to find distance between.
	 * @returns Distance between this and another vector.
	 */
	public distance(v: Vector4Type): number {
		return Math.sqrt(this.distanceSquared(v));
	}

	public get normalize(): Vector4 {
		return Vector4.normalize(this);
	}

	public crossProduct(v: Vector4Type): Vector4 {
		return Vector4.crossProduct(this, v);
	}

	public dotProduct(v: Vector4Type): number {
		return Vector4.dotProduct(this, v);
	}

	public add(v: Vector4Type | number): Vector4 {
		return Vector4.add(this, v);
	}

	public subtract(v: Vector4Type): Vector4 {
		return Vector4.subtract(this, v);
	}

	public multiply(v: Vector4Type | number): Vector4 {
		return Vector4.multiply(this, v);
	}

	public divide(v: Vector4Type | number): Vector4 {
		return Vector4.divide(this, v);
	}

	public toArray(): [number, number, number, number] {
		return [this.x, this.y, this.z, this.w];
	}

	public toVec3(): Vector3 {
		return new Vector3(this.x, this.y, this.z);
	}

	public replace(v: Vector4Type): void {
		this.x = v.x;
		this.y = v.y;
		this.z = v.z;
		this.w = v.w;
	}

	public get Length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
}

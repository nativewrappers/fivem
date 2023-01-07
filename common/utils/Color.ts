export class Color {
	public static fromArgb(a: number, r: number, g: number, b: number): Color {
		return new Color(a, r, g, b);
	}

	public static fromRgb(r: number, g: number, b: number): Color {
		return new Color(255, r, g, b);
	}

	public static fromArray(primitive: [number, number, number] | number[]): Color {
		return new Color(primitive[0], primitive[1], primitive[2], 255);
	}

	public a: number;
	public r: number;
	public g: number;
	public b: number;

	constructor(r: number, g: number, b: number, a = 255) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.a = a;
	}
}

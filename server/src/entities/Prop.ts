import { ClassTypes } from "../enum/ClassTypes";
import { Entity } from "./Entity";

export class Prop extends Entity {
	protected type = ClassTypes.Prop;
	constructor(handle: number) {
		super(handle);
	}

	/**
	 * Get an interable list of props currently on the server
	 * @returns Iterable list of Props.
	 */
	public static *AllProps(): IterableIterator<Prop> {
		for (const prop of GetAllObjects() as unknown as number[]) {
			yield new Prop(prop);
		}
	}

	public static fromNetworkId(netId: number): Prop {
		return new Prop(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Prop {
		return new Prop(handle);
	}
}

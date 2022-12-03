import { ClassTypes } from "../enum/ClassTypes";
import { Entity } from "./Entity";

export class Prop extends Entity {
	protected type = ClassTypes.Prop;
	constructor(handle: number) {
		super(handle);
	}

	public static fromNetworkId(netId: number): Prop {
		return new Prop(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Prop {
		return new Prop(handle);
	}
}

import { ClassTypes } from '../enums/ClassTypes';
import { Entity } from './';

export class Prop extends Entity {
	public static exists(prop: Prop): boolean {
		return typeof prop !== 'undefined' && prop.exists();
	}

	public static fromHandle(handle: number): Prop | null {
		return new Prop(handle);
	}

	public static fromNetworkId(networkId: number, errorOnInvalid = false): Prop | null {
		if (errorOnInvalid && NetworkDoesEntityExistWithNetworkId(networkId)) {
			throw new Error(`Entity with ${networkId} doesn't exist`);
		}

		return new Prop(NetworkGetEntityFromNetworkId(networkId));
	}
	protected type = ClassTypes.Prop;

	constructor(handle: number) {
		super(handle);
	}

	public exists(): boolean {
		return super.exists() && GetEntityType(this.handle) === 3;
	}

	public placeOnGround(): void {
		PlaceObjectOnGroundProperly(this.handle);
	}
}

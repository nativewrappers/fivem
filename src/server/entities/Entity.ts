import { BaseEntity } from './BaseEntity';

export class Entity extends BaseEntity {
	constructor(private handle: number) {
		super(this);
	}
	public static fromNetworkId(netId: number): Entity {
		return new Entity(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Entity {
		return new Entity(handle);
	}
}

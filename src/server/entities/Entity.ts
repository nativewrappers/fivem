import { BaseEntity } from './BaseEntity';

export class Entity extends BaseEntity {
	constructor(handle: number) {
		super(handle);
	}
	public static fromNetworkId(netId: number): Entity {
		return new Entity(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Entity {
		return new Entity(handle);
	}
}

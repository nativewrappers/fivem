import { ClassTypes } from "../enum/ClassTypes";
import { Hash } from "../type/Hash";
import { Entity } from "./Entity";
import { EntityType, EntityWrapper } from "./EntityWrapper";
import type { Vehicle } from "./Vehicle";

export class Ped extends Entity {
	protected type = ClassTypes.Ped;
	constructor(handle: number) {
		super(handle);
	}

	public static fromNetworkId(netId: number): Ped {
		return new Ped(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Ped {
		return new Ped(handle);
	}

	public get Armour(): number {
		return GetPedArmour(this.handle);
	}

	public get CauseOfDeath(): Hash {
		return GetPedCauseOfDeath(this.handle);
	}

	public get DesiredHeading(): number {
		return GetPedDesiredHeading(this.handle);
	}

	public get MaxHealth(): number {
		return GetPedMaxHealth(this.handle);
	}

	public get TaskCommand(): Hash {
		return GetPedScriptTaskCommand(this.handle);
	}

	public get TaskStage(): number {
		return GetPedScriptTaskStage(this.handle);
	}

	public get LastSourceOfDamage(): EntityType {
		return EntityWrapper.fromHandle(this.handle);
	}

	public get DeathCause(): EntityType {
		return EntityWrapper.fromHandle(this.handle);
	}

	public get Weapon(): Hash {
		return GetSelectedPedWeapon(this.handle);
	}

	public get LastVehicle(): Vehicle {
		return EntityWrapper.fromHandle(this.handle) as Vehicle;
	}

	public get IsPlayer(): boolean {
		return IsPedAPlayer(this.handle);
	}

	public specificTaskType(index: number): number {
		return GetPedSpecificTaskType(this.handle, index);
	}
}

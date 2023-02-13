import { ClassTypes } from "../enum/ClassTypes";
import { Hash } from "../type/Hash";
import { BaseEntity } from "./BaseEntity";

export class Ped extends BaseEntity {
	protected type = ClassTypes.Ped;
	constructor(handle: number) {
		super(handle);
	}

	/**
	 * Get an interable list of peds currently on the server
	 * @returns Iterable list of Peds.
	 */
	public static *AllPeds(): IterableIterator<Ped> {
		for (const pedId of GetAllPeds() as unknown as number[]) {
			yield new Ped(pedId);
		}
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

	public get LastSourceOfDamage(): number {
		return GetPedSourceOfDamage(this.handle);
	}

	public get DeathCause(): number {
		return GetPedCauseOfDeath(this.handle);
	}

	public get Weapon(): Hash {
		return GetSelectedPedWeapon(this.handle);
	}

	public get Vehicle(): number {
		return GetVehiclePedIsIn(this.handle, false);
	}

	public get LastVehicle(): number {
		return GetVehiclePedIsIn(this.handle, true);
	}

	public get IsPlayer(): boolean {
		return IsPedAPlayer(this.handle);
	}

	public specificTaskType(index: number): number {
		return GetPedSpecificTaskType(this.handle, index);
	}
}

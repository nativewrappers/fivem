import { ClassTypes } from "../enum/ClassTypes";
import { VehicleLockStatus } from "../enum/VehicleLockStatus";
import { VehicleType } from "../enum/VehicleType";
import { Hash } from "../type/Hash";
import { Color } from "../utils/Color";
import { Entity } from "./Entity";
import { EntityWrapper } from "./EntityWrapper";
import type { Ped } from "./Ped";

export class Vehicle extends Entity {
	protected type = ClassTypes.Vehicle;
	constructor(handle: number) {
		super(handle);
	}
	public static fromNetworkId(netId: number): Vehicle {
		return new Vehicle(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Entity {
		return new Vehicle(handle);
	}

	public get IsEngineRunning(): boolean {
		return GetIsVehicleEngineRunning(this.handle);
	}

	public get IsPrimaryColourCustom(): boolean {
		return GetIsVehiclePrimaryColourCustom(this.handle);
	}

	public get IsSecondaryColourCuston(): boolean {
		return GetIsVehicleSecondaryColourCustom(this.handle);
	}

	public get BodyHealth(): number {
		return GetVehicleBodyHealth(this.handle);
	}

	public get VehicleColours(): [number, number] {
		return GetVehicleColours(this.handle);
	}

	public get CustomPrimaryColour(): Color {
		return Color.fromArray(GetVehicleCustomPrimaryColour(this.handle));
	}

	public get CustomSecondaryColour(): Color {
		return Color.fromArray(GetVehicleCustomSecondaryColour(this.handle));
	}

	public get DashboardColour(): number {
		return GetVehicleDashboardColour(this.handle);
	}

	public get DirtLevel(): number {
		return GetVehicleDirtLevel(this.handle);
	}

	public get LockStatus(): VehicleLockStatus {
		return GetVehicleDoorLockStatus(this.handle);
	}

	public get DoorStatus(): number {
		return GetVehicleDoorStatus(this.handle);
	}

	public get DoorsLockedForPlayer(): number {
		return GetVehicleDoorsLockedForPlayer(this.handle);
	}

	public get EngineHealth(): number {
		return GetVehicleEngineHealth(this.handle);
	}

	public get ExtraColours(): [number, number] {
		return GetVehicleExtraColours(this.handle);
	}

	public get FlightNozzlePosition(): number {
		return GetVehicleFlightNozzlePosition(this.handle);
	}

	public get Handbrake(): boolean {
		return GetVehicleHandbrake(this.handle);
	}

	public get HeadlightsColour(): number {
		return GetVehicleHeadlightsColour(this.handle);
	}

	public get HomingLockonState(): number {
		return GetVehicleHomingLockonState(this.handle);
	}

	public get InteriorColour(): number {
		return GetVehicleInteriorColour(this.handle);
	}

	public get LightsState(): [boolean, boolean] {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const [_, lightsOn, highbeansOn] = GetVehicleLightsState(this.handle);
		return [lightsOn, highbeansOn];
	}

	public get Livery(): number {
		return GetVehicleLivery(this.handle);
	}

	public get LockOnTarget(): Vehicle {
		return new Vehicle(GetVehicleLockOnTarget(this.handle));
	}

	public get Plate(): string {
		return GetVehicleNumberPlateText(this.handle);
	}

	public get PlateIndex(): number {
		return GetVehicleNumberPlateTextIndex(this.handle);
	}

	public get PetrolTankHealth(): number {
		return GetVehiclePetrolTankHealth(this.handle);
	}

	public get RadioStation(): number {
		return GetVehicleRadioStationIndex(this.handle);
	}

	public get RoofLivery(): number {
		return GetVehicleRoofLivery(this.handle);
	}

	public get SteeringAngle(): number {
		return GetVehicleSteeringAngle(this.handle);
	}

	public get VehicleType(): VehicleType {
		return GetVehicleType(this.handle) as VehicleType;
	}

	public get TyreSmokeColour(): Color {
		return Color.fromArray(GetVehicleTyreSmokeColor(this.handle));
	}

	public get WheelType(): number {
		return GetVehicleWheelType(this.handle);
	}

	public get WindowTint(): number {
		return GetVehicleWindowTint(this.handle);
	}

	public get HasBeenOwnedByPlayer(): boolean {
		return HasVehicleBeenOwnedByPlayer(this.handle);
	}

	public get IsEngineStarting(): boolean {
		return IsVehicleEngineStarting(this.handle);
	}

	public get IsSirenOn(): boolean {
		return IsVehicleSirenOn(this.handle);
	}

	public get MaxHealth(): number {
		return GetPedMaxHealth(this.handle);
	}

	public get ScriptTaskCommand(): Hash {
		return GetPedScriptTaskCommand(this.handle);
	}

	public get ScriptTaskStage(): Hash {
		return GetPedScriptTaskStage(this.handle);
	}

	public get MainRotorHealth(): number {
		return GetHeliMainRotorHealth(this.handle);
	}

	public get TailRotorHealth(): number {
		return GetHeliTailRotorHealth(this.handle);
	}

	/**
	 * This might supposed to be TrainEngineHealth?
	 */
	public get TrainCarriageEngine(): number {
		return GetTrainCarriageEngine(this.handle);
	}

	public get TrainCarriageIndex(): number {
		return GetTrainCarriageIndex(this.handle);
	}

	public isTyreBurst(wheelId: number, completely: boolean): boolean {
		return IsVehicleTyreBurst(this.handle, wheelId, completely);
	}

	public isExtraTurnedOn(extraId: number): boolean {
		return IsVehicleExtraTurnedOn(this.handle, extraId);
	}

	public getPedInSeat(seatIndex: number): Ped {
		return EntityWrapper.fromHandle(GetPedInVehicleSeat(this.handle, seatIndex)) as Ped;
	}

	public getLastPedInSeat(seatIndex: number): Ped {
		return EntityWrapper.fromHandle(GetLastPedInVehicleSeat(this.handle, seatIndex)) as Ped;
	}
}

import cfx from "../cfx";
import { ClassTypes } from "../enum/ClassTypes";
import { eEntityType } from "../enum/eEntityType";
import { PopulationType } from "../enum/PopulationType";
import { Hash } from "../type/Hash";
import { Vector4 } from "../utils";
import { Vector3 } from "../utils/Vector3";
import { EntityType, EntityWrapper } from "./EntityWrapper";
import { Player } from "./Player";

export class Entity {
	protected type = ClassTypes.Entity;
	constructor(protected handle: number) {}

	public static fromNetworkId(netId: number): Entity {
		return new Entity(NetworkGetEntityFromNetworkId(netId));
	}

	public static fromHandle(handle: number): Entity {
		return new Entity(handle);
	}

	public get State(): StateBagInterface {
		return cfx.Entity(this.handle).state;
	}

	public get Handle(): number {
		return this.Handle;
	}

	public get Exists(): boolean {
		return this.handle !== 0 && DoesEntityExist(this.handle);
	}

	public get AttachedTo(): EntityType {
		return EntityWrapper.fromHandle(GetEntityAttachedTo(this.handle));
	}

	public get Position(): Vector3 {
		return Vector3.fromArray(GetEntityCoords(this.handle));
	}

	public get Heading(): number {
		return GetEntityHeading(this.handle);
	}

	public get PositionAndHeading(): Vector4 {
		return Vector4.fromArray([...GetEntityCoords(this.handle), GetEntityHeading(this.handle)]);
	}

	public get Health(): number {
		return GetEntityHealth(this.handle);
	}

	public get MaxHealth(): number {
		return GetEntityMaxHealth(this.handle);
	}

	public get Model(): Hash {
		return GetEntityModel(this.handle);
	}

	public get PopulationType(): PopulationType {
		return GetEntityPopulationType(this.handle);
	}

	public get Rotation(): Vector3 {
		return Vector3.fromArray(GetEntityRotation(this.handle));
	}

	public get RotationVelocity(): Vector3 {
		return Vector3.fromArray(GetEntityRotationVelocity(this.handle));
	}

	public get RoutingBucket(): number {
		return GetEntityRoutingBucket(this.handle);
	}

	/**
	 * @returns The script that made the entity
	 */
	public get Script(): string {
		return GetEntityScript(this.handle);
	}

	public get Speed(): number {
		return GetEntitySpeed(this.handle);
	}

	public get Type(): eEntityType {
		return GetEntityType(this.handle);
	}

	/**
	 * @returns the entitys velocity, if the entity is a ped it will return Vector3(0, 0, 0)
	 */
	public get Velocity(): Vector3 {
		return Vector3.fromArray(GetEntityVelocity(this.handle));
	}

	public get Owner(): Player {
		return new Player(NetworkGetEntityOwner(this.handle));
	}

	public get IsVisible(): boolean {
		return IsEntityVisible(this.handle);
	}

	public get NetworkId(): number {
		return NetworkGetNetworkIdFromEntity(this.handle);
	}

	public get IsNoLongerNeeded(): boolean {
		return HasEntityBeenMarkedAsNoLongerNeeded(this.handle);
	}

	public delete() {
		DeleteEntity(this.handle);
	}
}

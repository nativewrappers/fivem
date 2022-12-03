import { eEntityType } from "../enum/eEntityType";
import { Entity } from "./Entity";
import { Ped } from "./Ped";
import { Prop } from "./Prop";
import { Vehicle } from "./Vehicle";

export type EntityType = Ped | Prop | Vehicle | Entity;

export class EntityWrapper {
	public static fromHandle(handle: number): EntityType {
		switch (GetEntityType(handle)) {
			case eEntityType.Ped:
				return new Ped(handle);
			case eEntityType.Automobile:
				return new Vehicle(handle);
			case eEntityType.Prop:
				return new Prop(handle);
			default:
				return new Entity(handle);
		}
	}
}

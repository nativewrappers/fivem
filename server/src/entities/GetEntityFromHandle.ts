import { eEntityType } from "../enum/eEntityType";
import { Ped } from "./Ped";
import { Prop } from "./Prop";
import { Vehicle } from "./Vehicle";

export type EntityType = Ped | Prop | Vehicle | null;

export const GetEntityFromHandle = (handle: number): EntityType => {
	switch (GetEntityType(handle)) {
		case eEntityType.Ped:
			return new Ped(handle);
		case eEntityType.Automobile:
			return new Vehicle(handle);
		case eEntityType.Prop:
			return new Prop(handle);
		default:
			return null;
	}
};

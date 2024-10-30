export enum ForceType {
    MinForce = 0,
    MaxForceRot = 1,
    MinForce2 = 2,
    MaxForceRot2 = 3,
    ForceNoRot = 4,
    ForceRotPlusForce = 5,
}

export enum EntityType {
    Invalid = 0,
    Ped,
    Vehicle,
    Object,
}

// TODO: Proper enum for bone indicies
export type BoneIndex = number;

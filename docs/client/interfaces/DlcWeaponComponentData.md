[@nativewrappers/fivem](../../README.md) / [client](../README.md) / DlcWeaponComponentData

# Interface: DlcWeaponComponentData

DlcWeaponComponentData
refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/DlcWeaponStructs.cs#L130
refer2: https://docs.fivem.net/natives/?_0x6CF598A2957C2BF8
p0 seems to be the weapon index
p1 seems to be the weapon component index
struct DlcComponentData{
int attachBone;
int padding1;
int bActiveByDefault;
int padding2;
int unk;
int padding3;
int componentHash;
int padding4;
int unk2;
int padding5;
int componentCost;
int padding6;
char nameLabel[64];
char descLabel[64];
};

## Properties

| Property | Type |
| :------ | :------ |
| `attachBone` | `number` |
| `bActiveByDefault` | `number` |
| `componentCost` | `number` |
| `componentHash` | `number` |
| `desc` | `string` |
| `name` | `string` |
| `unk` | `number` |
| `unk2` | `number` |

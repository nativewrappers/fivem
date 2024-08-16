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

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `attachBone` | `number` | [src/client/weaponComponent/DlcWeaponComponentData.ts:29](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L29) |
| `bActiveByDefault` | `number` | [src/client/weaponComponent/DlcWeaponComponentData.ts:30](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L30) |
| `componentCost` | `number` | [src/client/weaponComponent/DlcWeaponComponentData.ts:34](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L34) |
| `componentHash` | `number` | [src/client/weaponComponent/DlcWeaponComponentData.ts:32](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L32) |
| `desc` | `string` | [src/client/weaponComponent/DlcWeaponComponentData.ts:36](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L36) |
| `name` | `string` | [src/client/weaponComponent/DlcWeaponComponentData.ts:35](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L35) |
| `unk` | `number` | [src/client/weaponComponent/DlcWeaponComponentData.ts:31](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L31) |
| `unk2` | `number` | [src/client/weaponComponent/DlcWeaponComponentData.ts:33](https://github.com/nativewrappers/fivem/blob/34b8061c177c9481c4691efcaef7602a414ca976/src/client/weaponComponent/DlcWeaponComponentData.ts#L33) |

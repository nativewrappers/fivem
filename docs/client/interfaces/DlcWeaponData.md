[@nativewrappers/fivem](../../README.md) / [client](../README.md) / DlcWeaponData

# Interface: DlcWeaponData

DlcWeaponData
refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/DlcWeaponStructs.cs#L10
refer2: https://docs.fivem.net/natives/?_0xBF0FD6E56C964FCB

int emptyCheck; //use DLC1::_IS_DLC_DATA_EMPTY on this
int padding1;
int weaponHash;
int padding2;
int unk;
int padding3;
int weaponCost;
int padding4;
int ammoCost;
int padding5;
int ammoType;
int padding6;
int defaultClipSize;
int padding7;
char nameLabel[64];
char descLabel[64];
char desc2Label[64]; // usually "the" + name
char upperCaseNameLabel[64];

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `ammoCost` | `number` | [src/client/weapon/DlcWeaponData.ts:35](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L35) |
| `ammoType` | `number` | [src/client/weapon/DlcWeaponData.ts:36](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L36) |
| `defaultClipSize` | `number` | [src/client/weapon/DlcWeaponData.ts:37](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L37) |
| `desc` | `string` | [src/client/weapon/DlcWeaponData.ts:39](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L39) |
| `name` | `string` | [src/client/weapon/DlcWeaponData.ts:38](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L38) |
| `simpleDesc` | `string` | [src/client/weapon/DlcWeaponData.ts:40](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L40) |
| `unk` | `number` | [src/client/weapon/DlcWeaponData.ts:33](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L33) |
| `upperCaseName` | `string` | [src/client/weapon/DlcWeaponData.ts:41](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L41) |
| `validCheck` | `number` | [src/client/weapon/DlcWeaponData.ts:31](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L31) |
| `weaponCost` | `number` | [src/client/weapon/DlcWeaponData.ts:34](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L34) |
| `weaponHash` | `number` | [src/client/weapon/DlcWeaponData.ts:32](https://github.com/nativewrappers/fivem/blob/09478da418b400a28e2cc17ab86f47c957997aed/src/client/weapon/DlcWeaponData.ts#L32) |

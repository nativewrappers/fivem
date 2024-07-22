[@nativewrappers/fivem](../../README.md) / [client](../README.md) / WeaponHudStats

# Interface: WeaponHudStats

WeaponHudStats
refer1: https://github.com/citizenfx/fivem/blob/master/code/client/clrcore/External/Game.cs#L900
refer2: https://docs.fivem.net/natives/?_0xD92C739EE34C9EBA
// members should be aligned to 8 bytes by default but it's best to use alignas here, just to be sure
struct WeaponHudStatsData
{
	alignas(8) uint8_t hudDamage; // 0x0000
	alignas(8) uint8_t hudSpeed; // 0x0008
	alignas(8) uint8_t hudCapacity; // 0x0010
	alignas(8) uint8_t hudAccuracy; // 0x0018
	alignas(8) uint8_t hudRange; // 0x0020
};

## Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| `hudAccuracy` | `number` | [src/client/weapon/WeaponHudStats.ts:23](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/weapon/WeaponHudStats.ts#L23) |
| `hudCapacity` | `number` | [src/client/weapon/WeaponHudStats.ts:22](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/weapon/WeaponHudStats.ts#L22) |
| `hudDamage` | `number` | [src/client/weapon/WeaponHudStats.ts:20](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/weapon/WeaponHudStats.ts#L20) |
| `hudRange` | `number` | [src/client/weapon/WeaponHudStats.ts:24](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/weapon/WeaponHudStats.ts#L24) |
| `hudSpeed` | `number` | [src/client/weapon/WeaponHudStats.ts:21](https://github.com/nativewrappers/fivem/blob/87bcb6b348baa538f549670f784fcd3ed14240d8/src/client/weapon/WeaponHudStats.ts#L21) |

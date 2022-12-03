/**
 * List of possible entity intersections. Used for raycasting.
 */
export enum IntersectOptions {
	Everything = -1,
	None = 0,
	World = 1,
	Vehicles = 2,
	PedsSimpleCollision = 4,
	Peds = 8,
	Objects = 16,
	Water = 32,
	Unk3 = 128,
	Foliage = 256,
}

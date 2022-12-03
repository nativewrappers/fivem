import { Entity, EntityBone } from './';

export class EntityBoneCollection {
	protected readonly owner: Entity;

	private readonly _collection: Enumerator<EntityBone> | undefined;
	private _currentIndex = -1;

	constructor(owner: Entity) {
		this.owner = owner;
	}

	public hasBone(name: string): boolean {
		return GetEntityBoneIndexByName(this.owner.Handle, name) !== -1;
	}

	public getBone(boneIndex?: number, boneName?: string): EntityBone {
		return new EntityBone(
			this.owner,
			boneIndex ? boneIndex : GetEntityBoneIndexByName(this.owner.Handle, boneName ?? ''),
		);
	}

	public get Core(): EntityBone {
		return new EntityBone(this.owner, -1);
	}
}

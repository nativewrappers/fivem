import { EntityBone } from './';
import type { BaseEntity } from './BaseEntity';

export class EntityBoneCollection {
	protected readonly owner: BaseEntity;

	private readonly _collection: Enumerator<EntityBone> | undefined;
	private _currentIndex = -1;

	constructor(owner: BaseEntity) {
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

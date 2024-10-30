export class BaseEntity {
    private handle: number;
    constructor(entHandle: number) {
        this.handle = entHandle;
    }

    get Handle(): number {
        return this.handle;
    }

    set Health(amount: number) {
        SetEntityHealth(this.Handle, amount, 0);
    }

    get Health(): number {
        return GetEntityHealth(this.Handle);
    }
}

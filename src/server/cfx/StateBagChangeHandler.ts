export interface StateBagChangeHandler<T> {
	(bagName: string, key: string, value: T, reserved: number, replicated: boolean): void;
}

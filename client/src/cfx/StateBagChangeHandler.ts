/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface StateBagChangeHandler {
	(bagName: string, key: string, value: any, reserved: number, replicated: boolean): void;
}

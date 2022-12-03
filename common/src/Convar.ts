export class Convar {
	public buffer(): string {
		return GetConsoleBuffer();
	}

	public get(variable: string, defaultVar: string): string {
		return GetConvar(variable, defaultVar);
	}

	public getInt(variable: string, defaultVar: number): number {
		return GetConvarInt(variable, defaultVar);
	}

	public set(variable: string, value: string): void {
		SetConvar(variable, value);
	}

	public setReplicated(variable: string, value: string): void {
		SetConvarReplicated(variable, value);
	}

	public setServerInfo(variable: string, value: string): void {
		SetConvarServerInfo(variable, value);
	}
}

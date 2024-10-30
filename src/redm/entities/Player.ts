import { _N } from "../utils/Native";

const handleUpgrade = (name: string, amount: number): void => {
    const b1 = new ArrayBuffer(8 * 24);
    const a2 = new DataView(b1);
    const b2 = new ArrayBuffer(8 * 12);
    const a3 = new DataView(b2);
    _N("0xCB5D11F9508A928D", 1, a2, a3, GetHashKey(name), 1084182731, amount, 752097756);
};

export class Player {
    private handle: number;

    public static fromPedHandle(handle: number): Player {
        return new Player(NetworkGetPlayerIndexFromPed(handle));
    }

    public static fromServerId(serverId: number): Player {
        return new Player(GetPlayerFromServerId(serverId));
    }

    /**
     * @param handle the player handle
     */
    constructor(handle: number) {
        this.handle = handle;
    }

    get Handle(): number {
        return this.handle;
    }

    /**
     * Adds the amount of stamina player has on the hud
     * @param amount the amount of upgrade to give 6 is half the bar while 12 is the full bar
     */
    addStaminaUpgrade(amount: number): void {
        handleUpgrade("UPGRADE_STAMINA_TANK_1", amount);
    }

    addHealthUpgrade(amount: number): void {
        handleUpgrade("UPGRADE_HEALTH_TANK_1", amount);
    }

    /**
     * Doesn't seem to work :*
     * @param amount
     */
    addDeadeyeUpgrade(amount: number): void {
        handleUpgrade("UPGRADE_DEADEYE_TANK_1", amount);
    }
}

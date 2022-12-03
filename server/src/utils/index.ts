export { Vector2 } from "./Vector2";
export { Vector3 } from "./Vector3";
export { Vector4 } from "./Vector4";
export { PointF } from "./PointF";
export { Maths } from "./Maths";
export { Quaternion } from "./Quaternion";
export { Color } from "./Color";

export const Delay = (milliseconds: number): Promise<void> =>
	new Promise(resolve => setTimeout(resolve, milliseconds));

export { enumValues } from "./enumValues";
export { getStringFromUInt8Array } from "./getStringFromUInt8Array";
export { getUInt32FromUint8Array } from "./getUInt32FromUint8Array";

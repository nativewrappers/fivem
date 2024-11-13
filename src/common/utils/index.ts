export * from "./Vector2";
export * from "./Vector3";
export * from "./Vector4";
export * from "./PointF";
export * from "./Maths";
export * from "./Quaternion";
export * from "./Color";

export { cleanPlayerName } from "./cleanPlayerName";

export const Delay = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export { enumValues } from "./enumValues";
export { getStringFromUInt8Array } from "./getStringFromUInt8Array";
export { getUInt32FromUint8Array } from "./getUInt32FromUint8Array";

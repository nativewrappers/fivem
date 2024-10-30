export class GlobalData {
  static IS_SERVER = IsDuplicityVersion();
  static IS_CLIENT = !GlobalData.IS_SERVER;
  static NetworkTick: number | null = null;
  static GlobalTicks: (() => void)[] = [];
}

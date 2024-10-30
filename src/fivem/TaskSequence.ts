import { Tasks } from './Tasks';

// TODO: Figure out why this uses 'null ped'
export class TaskSequence {
  private static nullTask: Tasks;
  private handle = 0;
  private isClosed: boolean;
  private count: number;

  constructor(handle?: number) {
    handle === undefined ? this.create() : (this.handle = handle);

    if (!TaskSequence.nullTask) {
      TaskSequence.nullTask = new Tasks(null);
    }

    this.isClosed = false;
    this.count = 0;
  }

  private create(): void {
    // Docs generate this as 'void' even though it returns a number
    // @ts-ignore ignore the fact that OpenSequenceTask expects a paramater
    this.handle = OpenSequenceTask() as unknown as number;
  }

  public dispose(): void {
    ClearSequenceTask(this.handle);
    this.handle = 0;
  }

  public close(repeat = false): void {
    if (this.isClosed) return;

    SetSequenceToRepeat(this.handle, repeat);
    CloseSequenceTask(this.handle);

    this.isClosed = true;
  }

  public get Handle(): number {
    return this.handle;
  }

  public get AddTask(): Tasks {
    if (this.isClosed) {
      throw new Error("You can't add tasks to a closed sequence!");
    }

    this.count += 1;
    return TaskSequence.nullTask;
  }

  public get IsClosed(): boolean {
    return this.isClosed;
  }

  public get Count(): number {
    return this.count;
  }
}

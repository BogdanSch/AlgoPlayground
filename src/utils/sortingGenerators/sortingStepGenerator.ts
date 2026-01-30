import type { SortStep } from "../../types";

export default abstract class SortingStepGenerator {
  public displayName: string;
  public name: string;
  public path: string;

  public constructor(displayName: string, name: string, path: string) {
    this.displayName = displayName;
    this.name = name;
    this.path = path;
  }
  public abstract generate(numbers: number[]): SortStep[];
}

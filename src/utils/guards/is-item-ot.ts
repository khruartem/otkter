import { TProject } from "../types/projects";
import { TService } from "../types/services";
import { TEmployee } from "../types/team";

export function isItemOT(
  item: unknown
): item is TProject | TService | TEmployee {
  return (item as TProject | TService | TEmployee).kind !== undefined;
}

import { TItemOT } from "../types/common";

export function isItemOT(item: unknown): item is TItemOT {
  return (item as TItemOT).kind !== undefined;
}

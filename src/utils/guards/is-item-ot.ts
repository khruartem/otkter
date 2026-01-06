import { TItemOT } from "../types/item-ot";

export function isItemOT(item: unknown): item is TItemOT {
  return (item as TItemOT).kind !== undefined;
}

import { TEmployee } from "../types";
import { TItemOT } from "../types/common";

export function isMedia(
  value: string | string[] | TEmployee | TItemOT
): value is TItemOT {
  return (value as TItemOT).active !== undefined;
}

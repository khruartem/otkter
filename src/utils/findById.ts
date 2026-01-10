import { TItemOT } from "./types/item-ot";

export const findById = <T extends TItemOT>(array: T[], currentId: number) => {
  return array.find((element) => {
    return element.id === currentId;
  });
};

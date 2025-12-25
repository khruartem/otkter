import { TItemOT } from "./types/common";

export const findById = <T extends TItemOT>(array: T[], currentId: number) => {
  return array.find((element) => {
    return element.id === currentId;
  });
};

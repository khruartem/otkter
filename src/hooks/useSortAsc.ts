import { TProject, TService } from "../utils/types";

export const useSortAsc = (array: TProject[] | TService[]) => {
  return [...array].sort((a, b) => {
    if (a.order && b.order) return a.order - b.order;
    else return 0;
  });
};

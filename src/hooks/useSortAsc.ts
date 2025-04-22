import { TProject, TService } from "../utils/types";

export const useSortAsc = (
  array: TProject[] & TService[],
  key: keyof (TProject & TService)
) => {
  return [...array].sort((a, b) => {
    if (
      (a[key] !== null && b[key] !== null) ||
      (a[key] !== undefined && b[key] !== undefined)
    )
      return Number(a[key]) - Number(b[key]);
    else return 0;
  });
};

// import { TProject, TService } from "../utils/types";

// export const useSortDesc = (
//   array: TProject[] & TService[],
//   key: keyof (TProject & TService)
// ) => {
//   return [...array].sort((a, b) => {
//     if (
//       (a[key] !== null && b[key] !== null) ||
//       (a[key] !== undefined && b[key] !== undefined)
//     )
//       return Number(b[key]) - Number(a[key]);
//     else return 0;
//   });
// };

import { TService } from "../utils/types";
import { TProject, TShowHistoryItem } from "../utils/types/projects";

export const useSortDesc = <T extends TProject | TService | TShowHistoryItem>(
  array: T[],
  key: keyof T
) => {
  return [...array].sort((a, b) => {
    if (
      (a[key] !== null && b[key] !== null) ||
      (a[key] !== undefined && b[key] !== undefined)
    )
      return Number(b[key]) - Number(a[key]);
    else return 0;
  });
};


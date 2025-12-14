// import { TProjectCategories } from "../features/categories/categoriesSlice";
// import { TControls } from "../features/controls/controlsSlice";
// import { TPhotos } from "../features/photos/photosSlice";
// import { TProjectInfo } from "../features/projectsInfo/projectsInfoSlice";
// import { TServiceInfo } from "../features/projectsInfo/infosSlice";
// import { TEmployee, TProject, TService } from "./types";
// import { TProject as _TProject } from "../utils/types/projects";
import { TItemOT } from "./types/common";

// export const findById = <
//   T extends
//     | TProject
//     | _TProject
//     | TService
//     | TProjectInfo
//     | TProjectCategories
//     | TPhotos
//     | TControls
//     | TServiceInfo
//     | TEmployee
// >(
//   array: T[],
//   currentId: number
// ) => {
export const findById = <
  T extends TItemOT>(
  array: T[],
  currentId: number
) => {
  return array.find((element) => {
    return element.id === currentId;
  });
};

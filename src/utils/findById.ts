import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TControls } from "../features/controls/controlsSlice";
import { TPhotos } from "../features/photos/photosSlice";
import { TProjectInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TServiceInfo } from "../features/projectsInfo/infosSlice";
import { TEmployee, TProject, TService } from "./types";

export const findById = <
  T extends
    | TProject[]
    | TService[]
    | TProjectInfo[]
    | TProjectCategories[]
    | TPhotos[]
    | TControls[]
    | TServiceInfo[]
    | TEmployee[]
>(
  array: T,
  currentId: number
) => {
  return array.find((element) => {
    return element.id === currentId;
  });
};

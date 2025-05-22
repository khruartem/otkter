import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TControls } from "../features/controls/controlsSlice";
import { TProjectPhotos, TServicePhotos } from "../features/photos/photosSlice";
import { TProjectInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TServiceInfo } from "../features/projectsInfo/infosSlice";
import { TProject, TService } from "./types";

export const findById = <
  T extends
    | TProject[]
    | TService[]
    | TProjectInfo[]
    | TProjectCategories[]
    | TProjectPhotos[]
    | TControls[]
    | TServicePhotos[]
    | TServiceInfo[]
>(
  array: T,
  currentId: number
) => {
  return array.find((element) => {
    return element.id === currentId;
  });
};

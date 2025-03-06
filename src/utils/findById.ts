import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TProjectControls, TServiceControls } from "../features/controls/controlsSlice";
import { TProjectPhotos, TServicePhotos } from "../features/photos/photosSlice";
import { TProjectInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TServiceInfo } from "../features/projectsInfo/infosSlice";
import { TProject, TService } from "./types";

export const findById = (
  array:
    | TProject[]
    | TService[]
    | TProjectInfo[]
    | TProjectCategories[]
    | TProjectPhotos[]
    | TProjectControls[]
    | TServiceControls[]
    | TServicePhotos[]
    | TServiceInfo[],
  currentId: number
) => {
  return array.find((element) => {
    if ((element as TProject)?.projectId) return (element as TProject)?.projectId === currentId;
    if ((element as TService)?.serviceId) return (element as TService)?.serviceId === currentId;
  });
};

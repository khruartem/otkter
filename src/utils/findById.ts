import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TProjectControls } from "../features/controls/controlsSlice";
import { TProjectPhotos } from "../features/photos/photosSlice";
import { TInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TProject, TService } from "./types";

export const findById = (
  array:
    | TProject[]
    | TService[]
    | TInfo[]
    | TProjectCategories[]
    | TProjectPhotos[]
    | TProjectControls[],
  currentId: number
) => {
  return array.find((element) => {
    if ((element as TProject)?.projectId) return (element as TProject)?.projectId === currentId;
    if ((element as TService)?.serviceId) return (element as TService)?.serviceId === currentId;
  });
};

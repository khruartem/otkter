import { TProjectCategories } from "../features/categories/categoriesSlice";
import { TProjectControls } from "../features/controls/controlsSlice";
import { TProjectPhotos } from "../features/photos/photosSlice";
import { TInfo } from "../features/projectsInfo/projectsInfoSlice";
import { TProject } from "./types";

export const findById = (
  array:
    | TProject[]
    | TInfo[]
    | TProjectCategories[]
    | TProjectPhotos[]
    | TProjectControls[],
  currentId: number
) => {
  return array.find((element) => {
    return element?.projectId === currentId;
  });
};

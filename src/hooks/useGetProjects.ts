import { getProjectsSelector } from "../features/projects/projectsSlice"
import { RootState, useSelector } from "../services/store"
import { TProjectTabMode } from "../utils/types";

export const useGetProjects = (type: TProjectTabMode | "main") => {
  return useSelector((state: RootState) => getProjectsSelector(state, type));
}
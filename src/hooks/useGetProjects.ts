import { getProjectsSelector } from "../features/projects/projectsSlice"
import { useSelector } from "../services/store"

export const useGetProjects = () => {
  return useSelector(getProjectsSelector);
}
import { getProjectColorsSelector } from "../../features/projects/projectsSlice"
import { useSelector } from "../../services/store"

export const useGetProjectColors = () => {
  return useSelector(getProjectColorsSelector);
}
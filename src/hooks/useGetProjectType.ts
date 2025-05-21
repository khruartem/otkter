import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getTypeSelector } from "../features/projects/projectsSlice";

export const useGetProjectType = (id: number) => {
  return useSelector((state: RootState) => getTypeSelector(state, id));
}
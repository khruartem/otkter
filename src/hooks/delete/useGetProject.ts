import { getProjectSelector } from "../../features/projects/projectsSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetProject = (id: number) => {
  return useSelector((state: RootState) => getProjectSelector(state, id));
};

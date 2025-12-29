import { getProjectSelector } from "../../features/projects/projectsSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetProjectById = (id?: number) => {
  return useSelector((state: RootState) => {
    if (id) {
      return getProjectSelector(state, id);
    }
  });
};

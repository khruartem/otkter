import { getIsMainSelector } from "../../features/projects/projectsSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetProjectIsMain = (id: number) => {
  return useSelector((state: RootState) => getIsMainSelector(state, id));
};

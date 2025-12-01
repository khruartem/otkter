import { getProjectSelector } from "../../features/_projects/projectsSlice";
import { useSelector, RootState } from "../../services/store";

export const useGetProject = (id: number) => {
  return useSelector((state: RootState) => getProjectSelector(state, id));
};

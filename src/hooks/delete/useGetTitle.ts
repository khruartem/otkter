import { useSelector } from "react-redux";
import { getTitleSelector } from "../../features/projects/projectsSlice";
import { RootState } from "../../services/store";

export const useGetTitle = (id: number) => {
  return useSelector((state: RootState) => getTitleSelector(state, id));
};

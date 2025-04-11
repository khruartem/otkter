import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getShortTextSelector } from "../features/projects/projectsSlice";

export const useGetProjectShortText = (id: number) => {
  return useSelector((state: RootState) => getShortTextSelector(state, id));
}
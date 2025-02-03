import { useSelector } from "react-redux";
import { getProjectInfoSelector } from "../features/projectsInfo/projectsInfoSlice";
import { RootState } from "../services/store";

export const useGetProjectInfo = (id: number) => {
  return useSelector((state: RootState) => getProjectInfoSelector(state, id))!;
};

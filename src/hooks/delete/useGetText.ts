import { useSelector } from "react-redux";
import { getTextSelector } from "../../features/projectsInfo/projectsInfoSlice";
import { RootState } from "../../services/store";

export const useGetText = (id: number) => {
  return useSelector((state: RootState) => getTextSelector(state, id));
};

import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPreviewImgSelector } from "../features/projectsInfo/projectsInfoSlice";

export const useGetProjectPreviewImg = (id: number) => {
  return useSelector((state: RootState) => getPreviewImgSelector(state, id));
}
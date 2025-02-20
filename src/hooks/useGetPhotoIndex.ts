import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotoIndexSelector } from "../features/photos/photosSlice";

export const useGetPhotoIndex = (projectId: number, imgId: number) => {
  return useSelector((state: RootState) => getPhotoIndexSelector(state, projectId, imgId));
};

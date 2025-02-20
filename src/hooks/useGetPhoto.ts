import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotoSelector } from "../features/photos/photosSlice";

export const useGetPhoto = (projectId: number, imgId: number) => {
  return useSelector((state: RootState) => getPhotoSelector(state, projectId, imgId));
};

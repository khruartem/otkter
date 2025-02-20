import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotosSelector } from "../features/photos/photosSlice";

export const useGetPhotos = (id: number) => {
  return useSelector((state: RootState) => getPhotosSelector(state, id));
};

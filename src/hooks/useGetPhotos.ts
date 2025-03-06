import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotosSelector } from "../features/photos/photosSlice";
import { TSectionType } from "../utils/types";

export const useGetPhotos = (id: number, type: TSectionType) => {
  return useSelector((state: RootState) => getPhotosSelector(state, id, type));
};

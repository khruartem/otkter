import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotoSelector } from "../features/photos/photosSlice";
import { TSectionType } from "../utils/types";

export const useGetPhoto = (
  id: number,
  imgId: number,
  type: TSectionType
) => {
  return useSelector((state: RootState) =>
    getPhotoSelector(state, id, imgId, type)
  );
};

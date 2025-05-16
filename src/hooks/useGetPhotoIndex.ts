import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotoIndexSelector } from "../features/photos/photosSlice";
import { TSectionType } from "../utils/types";

export const useGetPhotoIndex = (
  id: number,
  imgId: number,
  type: TSectionType
) => {
  return useSelector((state: RootState) =>
    getPhotoIndexSelector(state, id, imgId, type)
  );
};

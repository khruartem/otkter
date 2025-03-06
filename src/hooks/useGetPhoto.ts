import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPhotoSelector } from "../features/photos/photosSlice";
import { TSectionType } from "../utils/types";

export const useGetPhoto = (
  projectId: number,
  imgId: number,
  type: TSectionType
) => {
  return useSelector((state: RootState) =>
    getPhotoSelector(state, projectId, imgId, type)
  );
};

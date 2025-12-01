import { getPreviewImageSelector } from "../../features/projectsInfo/infosSlice";
import { RootState, useSelector } from "../../services/store";
import { TSectionType } from "../../utils/types";

export const useGetPreviewImage = (id: number, infosType: TSectionType) => {
  return useSelector((state: RootState) =>
    getPreviewImageSelector(state, id, infosType)
  );
};

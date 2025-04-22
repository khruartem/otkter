import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getInfosSelector } from "../features/projectsInfo/infosSlice";
import { TSectionType } from "../utils/types";

export const useGetInfos = (id: number, infosType: TSectionType) => {
  return useSelector((state: RootState) =>
    getInfosSelector(state, id, infosType)
  );
};

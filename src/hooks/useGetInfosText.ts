import { useSelector } from "react-redux";
import { getTextSelector } from "../features/projectsInfo/infosSlice";
import { RootState } from "../services/store";
import { TSectionType } from "../utils/types";

export const useGetInfosText = (id: number, infosType: TSectionType) => {
  return useSelector((state: RootState) => getTextSelector(state, id, infosType));
};

import { useSelector } from "react-redux";
import { RootState } from "../services/store";
import { getPosterSelector } from "../features/projectsInfo/infosSlice";
import { TSectionType } from "../utils/types";

export const useGetPoster = (id: number, infosType: TSectionType) => {
  return useSelector((state: RootState) =>
    getPosterSelector(state, id, infosType)
  );
};

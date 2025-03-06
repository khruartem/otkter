import { RootState } from "../services/store";
import { useSelector } from "react-redux";
import { getIsEmployeesSelector } from "../features/projectsInfo/infosSlice";
import { TSectionType } from "../utils/types";

export const useGetInfosIsEmployees = (id: number, infosType: TSectionType) => {
  return useSelector((state: RootState) => getIsEmployeesSelector(state, id, infosType));
};

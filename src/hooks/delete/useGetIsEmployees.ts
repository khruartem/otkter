import { RootState } from "../../services/store";
import { useSelector } from "react-redux";
import { getIsEmployeesSelector } from "../../features/projectsInfo/projectsInfoSlice";

export const useGetIsEmployees = (id: number) => {
  return useSelector((state: RootState) => getIsEmployeesSelector(state, id));
};

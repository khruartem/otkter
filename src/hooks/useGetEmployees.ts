import { RootState } from "../services/store";
import { useSelector } from "react-redux";
import { getEmployeesSelector } from "../features/projectsInfo/projectsInfoSlice";

export const useGetEmployees = (id: number) => {
  return useSelector((state: RootState) => getEmployeesSelector(state, id));
};

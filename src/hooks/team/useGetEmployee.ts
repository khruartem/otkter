import { getEmployeeSelector } from "../../features/team/teamSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetEmployee = (id: number) => {
  return useSelector((state: RootState) => getEmployeeSelector(state, id));
};

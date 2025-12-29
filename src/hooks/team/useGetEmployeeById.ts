import { getEmployeeSelector } from "../../features/team/teamSlice";
import { RootState, useSelector } from "../../services/store";

export const useGetEmployeeById = (id?: number) => {
  return useSelector((state: RootState) => {
    if (id) {
      return getEmployeeSelector(state, id);
    }
  });
};

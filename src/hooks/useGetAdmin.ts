import { getAdminSelector } from "../features/teams/teamsSlice";
import { RootState, useSelector } from "../services/store";

export const useGetAdmin = (id: number) => {
  return useSelector((state: RootState) => getAdminSelector(state, id));
};

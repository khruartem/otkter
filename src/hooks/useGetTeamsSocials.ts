import { useSelector } from "react-redux";
import { getTeamsSocialsSelector } from "../features/socials/socialsSlice";
import { RootState } from "../services/store";
import { TEmployeesType } from "../utils/types";

export const useGetTeamsSocials = (id: number, type: TEmployeesType) => {
  return useSelector((state: RootState) => getTeamsSocialsSelector(state, type, id));
};

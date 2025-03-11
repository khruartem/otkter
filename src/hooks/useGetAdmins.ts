import { useSelector } from "react-redux";
import { getAdminsSelector } from "../features/teams/teamsSlice";

export const useGetAdmins = () => {
  return useSelector(getAdminsSelector);
};

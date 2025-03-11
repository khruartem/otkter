import { useSelector } from "react-redux";
import { getTeamsSelector } from "../features/teams/teamsSlice";

export const useGetTeams = () => {
  return useSelector(getTeamsSelector);
};

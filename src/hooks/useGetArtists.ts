import { useSelector } from "react-redux";
import { getArtistsSelector } from "../features/teams/teamsSlice";

export const useGetArtists = () => {
  return useSelector(getArtistsSelector);
};

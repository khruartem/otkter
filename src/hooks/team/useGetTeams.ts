import { getTeamsSelector } from "../../features/team/teamSlice";
import { useSelector } from "../../services/store";
import { TEmployeeType } from "../../utils/types/team";

export const useGetTeams = (type?: TEmployeeType) => {
  const teams = useSelector(getTeamsSelector);

  if (type) {
    return teams.filter((employee) => employee.type === type)!;
  }

  return teams;
};

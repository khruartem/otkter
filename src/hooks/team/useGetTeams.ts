import { getTeamsSelector } from "../../features/team/teamSlice";
import { useSelector } from "../../services/store";
import { TEmployee, TEmployeeType } from "../../utils/types/team";

export const useGetTeams = (type?: TEmployeeType) => {
  const teams = useSelector(getTeamsSelector);

  if (type) {
    return hasEmployee(teams, type)
      ? teams.filter((employee) => employee.type === type)
      : undefined;
  }
  
  return teams;
};

const hasEmployee = (teams: TEmployee[], type: TEmployeeType) => {
  return teams.some((employee) => employee.type === type);
};

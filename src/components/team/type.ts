import { TEmployee, TEmployeesType, TTeamViewRef } from "../../utils/types"

export type TTeamProps = {
  team: TEmployee[];
  type: TEmployeesType;
  teamsViewRefs: TTeamViewRef[];
  teamRef: React.RefObject<HTMLDivElement>;
  minTeamLength?: number;
}
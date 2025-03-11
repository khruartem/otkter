import { TEmployee, TRole, TTeamViewRef } from "../../utils/types"

export type TTeamProps = {
  team: TEmployee[];
  type: TRole;
  teamsViewRefs: TTeamViewRef[];
  teamRef: React.RefObject<HTMLUListElement>;
  gridRowsCount?: number;
}
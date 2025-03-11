import { TTeamViewRef, TEmployees } from "../../../utils/types";

export type TTeamsListUIProps = {
  adminsRef: React.RefObject<HTMLUListElement> | undefined;
  artistsRef: React.RefObject<HTMLUListElement> | undefined;
  teamsViewRefs: TTeamViewRef[];
  teams: TEmployees;
  tabsCount: number;
}
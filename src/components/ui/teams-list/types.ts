import { TTeamViewRef, TEmployees } from "../../../utils/types";

export type TTeamsListUIProps = {
  adminsRef: React.RefObject<HTMLDivElement> | undefined;
  artistsRef: React.RefObject<HTMLDivElement> | undefined;
  teamsViewRefs: TTeamViewRef[];
  teams: TEmployees;
  tabsCount: number;
}
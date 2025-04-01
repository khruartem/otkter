import { TTeamViewRef, TEmployee } from "../../../utils/types";

export type TTeamsListUIProps = {
  adminsRef: React.RefObject<HTMLDivElement> | undefined;
  artistsRef: React.RefObject<HTMLDivElement> | undefined;
  teamsViewRefs: TTeamViewRef[];
  admins: TEmployee[];
  artists: TEmployee[];
  tabsCount: number;
  minTeamLength?: number;
}
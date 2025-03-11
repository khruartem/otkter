import { FC } from "react";

import { TTeamsListProps } from "./types";
import { useGetTeams } from "../../hooks/useGetTeams";
import { TeamsListUI } from "../ui/teams-list";
import { useGetTabs } from "../../hooks/useGetTabs";

export const TeamsList: FC<TTeamsListProps> = ({
  teamsRefs,
  teamsViewRefs,
}) => {
  const teams = useGetTeams();
  const adminsRef = teamsRefs.find((ref) => ref.type === "admins")?.ref;
  const artistsRef = teamsRefs.find((ref) => ref.type === "artists")?.ref;
  const tabsCount = useGetTabs("team").length;

  return (
    <TeamsListUI
      adminsRef={adminsRef}
      artistsRef={artistsRef}
      teamsViewRefs={teamsViewRefs}
      teams={teams}
      tabsCount={tabsCount}
    />
  );
};

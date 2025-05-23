import { FC, useMemo } from "react";
// import { FC } from "react";

import { TeamsListUI } from "../ui/teams-list";

import { TTeamsListProps } from "./types";
import { useGetTeams } from "../../hooks/useGetTeams";
import { useGetTabs } from "../../hooks/useGetTabs";
import { useGetTeamRefs } from "../../hooks/useGetTeamRefs";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const TeamsList: FC<TTeamsListProps> = ({
  teamsRefs,
  teamsViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  const teams = useGetTeams();
  const admins = teams.administrators?.employees || [];
  const artists = teams.artists?.length === 1 ? teams.artists[0].employees : [];

  const { adminsRef, artistsRef } = useGetTeamRefs(teamsRefs);
  const tabsCount = useGetTabs("team")?.length;

  const minTeamLength = useMemo(
    () => (admins.length < artists.length ? admins.length : artists.length),
    [admins.length, artists.length]
  );

  return (
    <TeamsListUI
      adminsRef={adminsRef}
      artistsRef={artistsRef}
      teamsViewRefs={teamsViewRefs}
      admins={admins}
      artists={artists}
      tabsCount={tabsCount || 0}
      minTeamLength={isMobile ? undefined : minTeamLength}
    />
  );
};

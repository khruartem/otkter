import { FC, useMemo } from "react";

import { TeamsUI } from "../../components/ui/sections/teams";

import { useGetTeams } from "../../hooks/useGetTeams";

export const Teams: FC = () => {
  const teamsGroup = useGetTeams();
  const admins = teamsGroup.administrators?.employees || [];
  const artists =
    teamsGroup.artists?.length === 1 ? teamsGroup.artists[0].employees : [];

  const teams = admins.concat(artists);

  const minTeamLength = useMemo(
    () => (admins.length < artists.length ? admins.length : artists.length),
    [admins.length, artists.length]
  );

  return <TeamsUI teams={teams} minTeamLength={minTeamLength} />;
};

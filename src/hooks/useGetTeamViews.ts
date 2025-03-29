import { TTeamViewRef } from "../utils/types";

export const useGetTeamViews = (teamsViewRefs: TTeamViewRef[]) => {
  const inViewAdmins = teamsViewRefs.find(
    ({ type }) => type === "admins"
  )?.inView;
  const inViewArtists = teamsViewRefs.find(
    ({ type }) => type === "artists"
  )?.inView;

  return { inViewAdmins, inViewArtists };
};

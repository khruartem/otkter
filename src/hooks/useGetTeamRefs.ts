import { TTeamRef } from "../utils/types";

export const useGetTeamRefs = (teamsRefs: TTeamRef[]) => {
  const adminsRef = teamsRefs.find((ref) => ref.type === "admins")?.ref;
  const artistsRef = teamsRefs.find((ref) => ref.type === "artists")?.ref;

  return { adminsRef, artistsRef };
};

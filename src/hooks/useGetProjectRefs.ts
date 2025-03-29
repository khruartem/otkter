import { TProjectRef } from "../utils/types";

export const useGetProjectRefs = (projectsRefs: TProjectRef[]) => {
  const allRef = projectsRefs.find((project) => project.type === "all")?.ref;
  const playRef = projectsRefs.find((project) => project.type === "play")?.ref;
  const contestRef = projectsRefs.find(
    (project) => project.type === "contest"
  )?.ref;
  const masterClassRef = projectsRefs.find(
    (project) => project.type === "master-class"
  )?.ref;
  const shortFilmRef = projectsRefs.find(
    (project) => project.type === "short-film"
  )?.ref;

  return { allRef, playRef, contestRef, masterClassRef, shortFilmRef };
};

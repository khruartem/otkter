import { TProjectViewRef } from "../utils/types";

export const useGetProjectViews = (projectsViewRefs: TProjectViewRef[]) => {
  const inViewAll = projectsViewRefs.find(
    (project) => project.type === "all"
  )?.inView;
  const inViewPlay = projectsViewRefs.find(
    (project) => project.type === "play"
  )?.inView;
  const inViewContest = projectsViewRefs.find(
    (project) => project.type === "contest"
  )?.inView;
  const inViewMasterClass = projectsViewRefs.find(
    (project) => project.type === "master-class"
  )?.inView;
  const inViewShortFilm = projectsViewRefs.find(
    (project) => project.type === "short-film"
  )?.inView;

  return {
    inViewAll,
    inViewPlay,
    inViewContest,
    inViewMasterClass,
    inViewShortFilm,
  };
};

import { TProjectTabMode, TProjectViewRef } from "../../../utils/types";

type TProjectRefs = {
  allRef: React.RefObject<HTMLDivElement> | undefined;
  playRef: React.RefObject<HTMLDivElement> | undefined;
  contestRef: React.RefObject<HTMLDivElement> | undefined;
  masterClassRef: React.RefObject<HTMLDivElement> | undefined;
  shortFilmRef: React.RefObject<HTMLDivElement> | undefined;
};

export type TProjectGroupsListUIProps = {
  tabs: TProjectTabMode[];
  projectRefs: TProjectRefs;
  projectsViewRefs: TProjectViewRef[];
};

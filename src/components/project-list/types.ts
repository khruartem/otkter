import { TProjectTabMode, TProjectViewRef } from "../../utils/types";

export type TProjectListProps = {
  type: TProjectTabMode | "main";
  projectRef?: React.RefObject<HTMLDivElement>;
  projectsViewRefs?: TProjectViewRef[];
};

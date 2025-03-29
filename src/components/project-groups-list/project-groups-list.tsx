import { FC } from "react";

import { ProjectGroupsListUI } from "../ui/project-groups-list";

import { TProjectGroupsListProps } from "./types";
import { useGetProjectRefs } from "../../hooks/useGetProjectRefs";
import { useGetTabs } from "../../hooks/useGetTabs";
import { TProjectTabMode } from "../../utils/types";

export const ProjectGroupsList: FC<TProjectGroupsListProps> = ({
  projectsRefs,
  projectsViewRefs,
}) => {
  const projectRefs = useGetProjectRefs(projectsRefs);
  const tabs = useGetTabs("projects");

  return (
    <ProjectGroupsListUI
      tabs={tabs as TProjectTabMode[]}
      projectRefs={projectRefs}
      projectsViewRefs={projectsViewRefs}
    />
  );
};

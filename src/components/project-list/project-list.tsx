import { FC } from "react";

import { ProjectListUI } from "../ui/project-list";

import { useGetProjects } from "../../hooks/useGetProjects";
import { TProjectListProps } from "./types";
import { useGetViewRefByType } from "../../hooks/useGetViewRefByType";

export const ProjectList: FC<TProjectListProps> = ({
  type,
  projectRef,
  projectsViewRefs,
}) => {
  const projects = useGetProjects(type);
  const projectViewRef = useGetViewRefByType(projectsViewRefs || [], type);
  const sortedProjects = [...projects].sort((a, b) => {
    return Number(b.isActive) - Number(a.isActive);
  });
  //const projectViewRef = projectsViewRefs?.find(projectsViewRef => projectsViewRef.type === type)?.ref;

  return (
    <ProjectListUI
      projects={sortedProjects}
      projectRef={projectRef}
      ref={projectViewRef}
    />
  );
};

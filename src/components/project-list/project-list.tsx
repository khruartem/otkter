import { FC } from "react";

import { ProjectListUI } from "../ui/project-list";

import { useGetProjects } from "../../hooks/useGetProjects";
import { TProjectListProps } from "./types";
import { useGetViewRefByType } from "../../hooks/useGetViewRefByType";
import { useSortAsc } from "../../hooks/useSortAsc";

export const ProjectList: FC<TProjectListProps> = ({
  type,
  projectRef,
  projectsViewRefs,
}) => {
  const projects = useGetProjects(type);
  const projectViewRef = useGetViewRefByType(projectsViewRefs || [], type);
  const sortedActiveProjects = [...projects].sort((a, b) => {
    return Number(b.isActive) - Number(a.isActive);
  });
  const sortedOrderedProjects = useSortAsc(projects);
  console.log(sortedOrderedProjects);
  //const projectViewRef = projectsViewRefs?.find(projectsViewRef => projectsViewRef.type === type)?.ref;

  return (
    <ProjectListUI
      projects={type === "main" ? sortedOrderedProjects : sortedActiveProjects}
      projectRef={projectRef}
      ref={projectViewRef}
    />
  );
};

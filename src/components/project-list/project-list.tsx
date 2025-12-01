import { FC } from "react";

import { ProjectListUI } from "../ui/project-list";

import { useGetProjects } from "../../hooks/delete/useGetProjects";
import { TProjectListProps } from "./types";
import { useGetViewRefByType } from "../../hooks/useGetViewRefByType";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useSortDesc } from "../../hooks/useSortDesc";

export const ProjectList: FC<TProjectListProps> = ({
  type,
  projectRef,
  projectsViewRefs,
}) => {
  const projects = useGetProjects(type);
  const projectViewRef = useGetViewRefByType(projectsViewRefs || [], type);
  // const sortedActiveProjects = [...projects].sort((a, b) => {
  //   return Number(b.isActive) - Number(a.isActive);
  // });
  const sortedActiveProjects = useSortDesc(projects, "isActive");
  const sortedOrderedProjects = useSortAsc(projects, "order");
  //const projectViewRef = projectsViewRefs?.find(projectsViewRef => projectsViewRef.type === type)?.ref;

  return (
    <ProjectListUI
      projects={type === "main" ? sortedOrderedProjects : sortedActiveProjects}
      projectRef={projectRef}
      ref={projectViewRef}
    />
  );
};

import { FC } from "react";

import { ProjectListUI } from "../ui/project-list";
import { GroupListUI } from "../ui/group-list";

import { TProjectListProps } from "./types";

import { TProject, TProjectType } from "../../utils/types/projects";

import { useGetProjects } from "../../hooks/projects/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useSortDesc } from "../../hooks/useSortDesc";

export const ProjectList: FC<TProjectListProps> = ({
  type,
  projectListRef,
  projectListViewRef,
}) => {
  const projects = useGetProjects(type as TProjectType);

  const sortedActiveProjects = useSortDesc<TProject>(projects, "active");
  const sortedOrderedProjects = useSortAsc<TProject>(projects, "order");

  return type === "main" ? (
    <ProjectListUI projects={sortedOrderedProjects} />
  ) : (
    <GroupListUI ref={projectListRef}>
      <ProjectListUI projects={sortedActiveProjects} ref={projectListViewRef} />
    </GroupListUI>
  );
};

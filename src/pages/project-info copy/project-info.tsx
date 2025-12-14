import { FC } from "react";

import { Info } from "../../components/pages/info";
import { NotFound404 } from "../not-found-404";

import { useGetId } from "../../hooks/useGetId";
import { useGetProject } from "../../hooks/projects/useGetProject";
import { useGetProjects } from "../../hooks/projects/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";

export const ProjectInfo: FC = () => {
  const projectId = useGetId();
  const projects = useGetProjects();
  const sortedProjects = useSortAsc(projects, "order");
  const project = useGetProject(projectId);

  return project ? (
    <Info currentItem={project} items={sortedProjects} />
  ) : (
    <NotFound404 />
  );
};

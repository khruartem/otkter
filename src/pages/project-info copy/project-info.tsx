import { FC } from "react";

import { InfoRenderer } from "../info-renderer";

import { useGetProject } from "../../hooks/projects/useGetProject";
import { useGetProjects } from "../../hooks/projects/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";

export const ProjectInfo: FC = () => {
  const projects = useGetProjects();
  const sortedProjects = useSortAsc(projects, "order");
  const project = useGetProject();

  return <InfoRenderer items={sortedProjects} currentItem={project} />;
};

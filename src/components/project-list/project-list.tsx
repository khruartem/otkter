import { FC } from "react";

import { useGetProjects } from "../../hooks/useGetProjects";
import { ProjectListUI } from "../ui/project-list";

export const ProjectList: FC = () => {
  const projects = useGetProjects();
  
  return (
    <ProjectListUI projects={projects} />
  )
}
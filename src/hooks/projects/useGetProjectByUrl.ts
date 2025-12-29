import { useGetCode } from "../useGetCode";
import { useGetProjects } from "./useGetProjects";

export const useGetProjectByUrl = () => {
  const url = useGetCode();
  const projects = useGetProjects();

  return projects.find((project) => project.url === url);
};

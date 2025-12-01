import { useSelector } from "../../services/store";
import { getProjectsSelector } from "../../features/_projects/projectsSlice";
import { TProjectType } from "../../utils/types/projects";

export const useGetProjects = (type?: TProjectType) => {
  const projectsAll = useSelector(getProjectsSelector);
  const projectsWithOutHero = projectsAll.filter(project => project.type !== "hero");

  if (!type) {
    return projectsWithOutHero;
  } else {
    switch (type) {
      case "master-class":
      case "play":
      case "contest":
      case "short-film":
      case "hero":
        return projectsAll.filter((project) => project.type === type);
      case "main":
        return projectsAll.filter((project) => project.main === true);
      case "all":
      default:
        return projectsWithOutHero;
    }
  }
};

import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { TabBarUI } from "../ui/tab-bar";

import { useGetId } from "../../hooks/useGetId";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";
import { TProject } from "../../utils/types";
import { findById } from "../../utils/findById";

export const ProjectsTabBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const id = useGetId();
  const projects = useGetProjects("all");
  const project = findById(projects, id) as TProject;
  const sortedProjects = useSortAsc(projects, "order");

  const [currentProject, setCurrentProject] = useState<TProject>(project);
  const [index, setIndex] = useState<number>(
    sortedProjects.findIndex((element) => element.id === id)
  );

  // TODO: Перенести в хук и использовать в слайдере
  const onSwitch: (arg: number) => void = (index: number) => {
    if (index > projects.length - 1) {
      setIndex(0);
      setCurrentProject(sortedProjects[0]);
      navigate(`/projects/${sortedProjects[0].url}`, {
        state: {
          ...location.state,
          id: sortedProjects[0].id,
          url: sortedProjects[0].url,
        },
      });
    } else if (index < 0) {
      setIndex(projects.length - 1);
      setCurrentProject(sortedProjects[projects.length - 1]);
      navigate(`/projects/${sortedProjects[projects.length - 1].url}`, {
        state: {
          ...location.state,
          id: sortedProjects[projects.length - 1].id,
          url: sortedProjects[projects.length - 1].url,
        },
      });
    } else {
      setIndex(index);
      setCurrentProject(sortedProjects[index]);
      navigate(`/projects/${sortedProjects[index].url}`, {
        state: {
          ...location.state,
          id: sortedProjects[index].id,
          url: sortedProjects[index].url,
        },
      });
    }
  };

  return (
    <TabBarUI
      current={currentProject}
      type="projects"
      index={index}
      items={sortedProjects}
      onSwitch={onSwitch}
      setCurrentItem={setCurrentProject}
      setIndex={setIndex}
      location={location}
    />
  );
};

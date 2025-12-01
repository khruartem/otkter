import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import { TabBarUI } from "../ui/tab-bar";

import { useGetId } from "../../hooks/useGetId";
import { useGetProjects } from "../../hooks/delete/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useGetOnSwitch } from "../../hooks/useGetOnSwitch";

import { TEmployee, TProject, TService } from "../../utils/types";
import { findById } from "../../utils/findById";

export const ProjectsTabBar: FC = () => {
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
  const onSwitch = useGetOnSwitch<TProject>(
    sortedProjects,
    setIndex,
    setCurrentProject,
    "projects"
  );

  return (
    <TabBarUI
      current={currentProject}
      type="projects"
      index={index}
      items={sortedProjects}
      onSwitch={onSwitch}
      setCurrentItem={
        setCurrentProject as (
          value: React.SetStateAction<TProject | TService | TEmployee>
        ) => void
      }
      setIndex={setIndex}
      location={location}
    />
  );
};

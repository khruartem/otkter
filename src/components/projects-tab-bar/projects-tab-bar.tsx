import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TabBarUI } from "../ui/tab-bar";

import { useGetId } from "../../hooks/useGetId";
import { useGetProjects } from "../../hooks/useGetProjects";
import { useSortAsc } from "../../hooks/useSortAsc";
import { TProject } from "../../utils/types";
import { findById } from "../../utils/findById";

export const ProjectsTabBar: FC = () => {
  const navigate = useNavigate();

  const id = useGetId();
  const projects = useGetProjects("main");
  const project = findById(projects, id) as TProject;
  const sortedProjects = useSortAsc(projects, "order");

  const [currentProject, setCurrentProject] = useState<TProject>(project);
  const [index, setIndex] = useState<number>(0);

  const onSwitch: (arg: number) => void = (index: number) => {
    if (index > projects.length - 1) {
      setIndex(0);
      setCurrentProject(sortedProjects[0]);
      navigate(`/projects/${sortedProjects[0].id}`);
    } else if (index < 0) {
      setIndex(projects.length);
      setCurrentProject(sortedProjects[projects.length - 1]);
      navigate(`/projects/${sortedProjects[projects.length - 1].id}`);
    } else {
      setIndex(index);
      setCurrentProject(sortedProjects[index]);
      navigate(`/projects/${sortedProjects[index].id}`);
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
    />
  );
};

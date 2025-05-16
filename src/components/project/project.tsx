import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ProjectUI } from "../ui/project";

import { TProjectProps } from "./types";

export const Project: FC<TProjectProps> = ({ project }) => {
  const location = useLocation();
  const { id } = project;
  const hash = location.hash;

  const projectRef = useRef<HTMLAnchorElement>(null);

  const locationFrom: string =
    location.pathname === "/projects/all" ? "all-projects" : "project";

  useEffect(() => {
    if (hash === `#projects-${id}`) {
      projectRef.current?.scrollIntoView({
        block: "center",
        inline: "center",
        behavior: "instant",
      });
      location.state = null;
    }
  });

  return (
    <ProjectUI
      project={project}
      projectRef={projectRef}
      locationFrom={locationFrom}
    />
  );
};

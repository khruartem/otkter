import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ProjectUI } from "../ui/project";

import { TProjectProps } from "./types";

export const Project: FC<TProjectProps> = ({ project }) => {
  const location = useLocation();
  // const locationFrom = location.pathname;
  const { id } = project;
  const hash = window.location.hash;

  const projectRef = useRef<HTMLAnchorElement>(null);

  const locationFrom: string =
    location.pathname === "/projects/all" ? "all-projects" : "project";

  useEffect(() => {
    // switch (location.hash) {
    //   case `#projects-${id}`:
    //     scrollIntoElementView(projectRef, "instant");
    //     break;
    // }
    // if (location.hash === `#projects-${id}`) {
    // scrollIntoElementView(projectRef, "instant");
    //scrollIntoElementView(projectRef, "smooth");
    // projectRef.current?.scrollIntoView({block: "center", inline: "center", behavior: "smooth"})
    // };
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

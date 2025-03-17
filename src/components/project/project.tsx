import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ProjectUI } from "../ui/project";

import { TProjectProps } from "./types";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

export const Project: FC<TProjectProps> = ({ project }) => {
  const location = useLocation();
  const { projectId } = project;

  const projectRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    switch (location.hash) {
      case `#projects-${projectId}`:
        scrollIntoElementView(projectRef, "instant", "center");
        break;
    }
  }, [location.hash, projectId]);

  return <ProjectUI project={project} projectRef={projectRef} />;
};

import { FC, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ItemOTCardUI } from "../ui/item-ot-card";

import { TProjectProps } from "./types";

export const Project: FC<TProjectProps> = ({ project }) => {
  const location = useLocation();
  const { id } = project;
  const hash = location.hash;

  const url = {
    to: `/projects/${project.url}/`,
    from: location.pathname === "/projects/all" ? "all-projects" : "project",
    code: project.url,
  };

  const projectRef = useRef<HTMLAnchorElement>(null);

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

  return <ItemOTCardUI item={project} url={url} ref={projectRef} />;
};

import { FC, useEffect, useRef } from "react";

import { CardProps } from "./types";

import { ProjectUI } from "../ui/project";
import { TeamMateUI } from "../ui/team-mate";
import { useLocation } from "react-router-dom";
import { scrollIntoElementView } from "../../utils/scrollIntoElementView";

export const Card: FC<CardProps> = ({ card }) => {
  const location = useLocation();
  const { type, projectId } = card;

  const cardRef = useRef<HTMLAnchorElement>(null);
  
    useEffect(() => {
      switch (location.hash) {
        case `#projects-${projectId}`:
          scrollIntoElementView(cardRef, "instant", "center");
          break;
      }
    }, [location.hash, projectId]);

  if (type === "projects") return <ProjectUI project={card} projectRef={cardRef} />
  if (type === "team") return <TeamMateUI teammate={card} />
};

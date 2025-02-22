import { FC, useEffect, useRef } from "react";

import { CardProps } from "./types";

import { ProjectUI } from "../ui/project";
import { TeamUI } from "../ui/team";
import { useLocation } from "react-router-dom";

export const Card: FC<CardProps> = ({ card }) => {
  const location = useLocation();
  const { type, projectId } = card;

  const cardRef = useRef<HTMLAnchorElement>(null);
  
    useEffect(() => {
      switch (location.hash) {
        case `#projects-${projectId}`:
          cardRef.current?.scrollIntoView({ behavior: "instant" });
          window.scrollTo({
            top: window.scrollY - 70,
            behavior: "instant",
          });
          break;
        default:
          break;
      }
    }, [location.hash, projectId]);

  if (type === "projects") return <ProjectUI project={card} projectRef={cardRef} />
  if (type === "team") return <TeamUI teammate={card} />
};

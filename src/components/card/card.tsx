import { FC } from "react";

import { CardProps } from "./types";

import { ProjectUI } from "../ui/project";
import { TeamUI } from "../ui/team";

export const Card: FC<CardProps> = ({ card }) => {
  const { type } = card

  if (type === "projects") return <ProjectUI project={card} />
  if (type === "team") return <TeamUI teammate={card} />
};

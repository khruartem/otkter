import { FC } from "react";

import { CardListUI } from "../ui/card-list";
import { TCardListProps } from "./types";
import { useGetProjects } from "../../hooks/useGetProjects";

export const CardList: FC<TCardListProps> = ({ type }) => {
  let cards;
  const projects = useGetProjects();
  const team = undefined;

  switch (type) {
    case "projects":
      cards = projects;
      break;
    case "team":
      cards = team;
      break;
    default:
      cards = undefined;
  }

  return <CardListUI cards={cards} />;
};

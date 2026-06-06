import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { HeroCardUI } from "../ui/hero-card";

import { THeroCardProps } from "./types";

import { buyTickets } from "../../utils/buyTickets";
import { useFinished } from "./useFinished";

export const HeroCard: FC<THeroCardProps> = ({
  project,
  index,
  ticket,
  currentPaginatorIndex,
  onSwitch,
}) => {
  const onTicketClick = ticket ? () => buyTickets(ticket) : undefined;
  const finished = useFinished(project.startTs || "");

  const [cardViewRef, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    onSwitch(index, currentPaginatorIndex, inView);
  });

  return (
    <HeroCardUI
      project={project}
      ticket={ticket}
      finished={finished}
      onTicketClick={onTicketClick}
      ref={cardViewRef}
    />
  );
};

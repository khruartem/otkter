import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { HeroCardUI } from "../ui/hero-card";

import { THeroCardProps } from "./types";

import { buyTickets } from "../../utils/buyTickets";

export const HeroCard: FC<THeroCardProps> = ({
  project,
  index,
  ticket,
  currentPaginatorIndex,
  onSwitch,
}) => {
  const onTicketClick = ticket ? () => buyTickets(ticket) : undefined;

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
      onTicketClick={onTicketClick}
      ref={cardViewRef}
    />
  );
};

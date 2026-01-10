import { FC, useEffect } from "react";
import { buyTickets } from "../../utils/buyTickets";
import { buyTicketsLinkEsenin } from "../../utils/constants/projects";
import { HeroCardUI } from "../ui/hero-card";
import { THeroCardProps } from "./types";
import { useInView } from "react-intersection-observer";

export const HeroCard: FC<THeroCardProps> = ({
  project,
  index,
  ticket,
  currentPaginatorIndex,
  onSwitch,
}) => {
  const onTicketClick = () => buyTickets(buyTicketsLinkEsenin);

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

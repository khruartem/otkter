import { FC, useEffect, useState } from "react";
import { TeamUI } from "../ui/team";
import { TTeamProps } from "./type";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const Team: FC<TTeamProps> = ({
  team,
  teamRef,
  teamsViewRefs,
  type,
  gridRowsCount,
}) => {
  const teamViewRef = teamsViewRefs.find(
    (viewRef) => viewRef.type === type
  )?.ref;

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const [cardsCount, setCardsCount] = useState(team.length);

  const containerHeight = gridRowsCount
    ? `calc(${Math.ceil(gridRowsCount / cardsCount)} * 486px + ${
        Math.ceil(gridRowsCount / cardsCount) - 1
      } * 24px)`
    : undefined;

  useEffect(() => {
    if (team.length < 5) {
      if (isLarge) setCardsCount(team.length);
      else if (isMobile) setCardsCount(1);
      else setCardsCount(2);
    } else {
      if (isLarge) setCardsCount(5);
      else if (isDesktop) setCardsCount(3);
      else if (isLaptop) setCardsCount(3);
      else if (isTablet) setCardsCount(2);
      else if (isMobile) setCardsCount(1);
    }
  }, [isLarge, isMobile, isDesktop, isLaptop, isTablet, team.length]);

  return (
    <TeamUI
      team={team}
      type={type}
      teamRef={teamRef}
      cardsCount={cardsCount}
      containerHeight={containerHeight}
      ref={teamViewRef}
    />
  );
};

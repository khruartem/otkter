import { FC, memo, useEffect, useState } from "react";

import { TeamUI } from "../ui/team copy";

import { TTeamProps } from "./type";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import clsx from "clsx";

export const Team: FC<TTeamProps> = memo(
  ({ team, teamRef, teamViewRef, type, minTeamLength }) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();
    const [columnsCount, setColumnsCount] = useState(0);

    const containerHeight =
      minTeamLength && !isMobile
        ? `calc(${Math.ceil(minTeamLength / columnsCount)} * 486px + ${
            Math.ceil(minTeamLength / columnsCount) - 1
          } * ${clsx(
            (isLarge || isDesktop) && "24px",
            isLaptop && "20px",
            (isTablet || isMobile) && "12px"
          )})`
        : "486px";

    useEffect(() => {
      if (team.length < 5) {
        if (isLarge) setColumnsCount(team.length);
        else if (isMobile) setColumnsCount(1);
        else setColumnsCount(2);
      } else {
        if (isLarge) setColumnsCount(5);
        else if (isDesktop) setColumnsCount(3);
        else if (isLaptop) setColumnsCount(3);
        else if (isTablet) setColumnsCount(2);
        else if (isMobile) setColumnsCount(1);
      }
    }, [isLarge, isMobile, isDesktop, isLaptop, isTablet, team.length]);

    return (
      <TeamUI
        team={team}
        type={type}
        teamRef={teamRef}
        containerHeight={containerHeight}
        ref={teamViewRef}
      />
    );
  }
);

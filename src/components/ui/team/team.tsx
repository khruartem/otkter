import React, { CSSProperties } from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { TeamEmployee } from "../../team-employee";

import { TTeamUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./team.module.css";

export const TeamUI = React.forwardRef<HTMLUListElement, TTeamUIProps>(
  ({ team, type, teamRef, cardsCount, containerHeight }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } = useGetMediaQuery();
    const largeResolution = isLarge || isDesktop || isLaptop;
    const smallResolution = isTablet || isMobile;

    return (
      <div
        className={styles.wrapper}
        ref={teamRef}
      >
        <ul
          className={clsx(
            styles.team,
            type === "artists" && styles["team_overflowed-y"],
            largeResolution && styles["team_large-gap"],
            smallResolution && styles["team_small-gap"],
            //isMobile && styles["team_mobile"]
          )}
          ref={ref}
          style={{
            "--columns-count": `repeat(${cardsCount}, 1fr)`,
            "--height": containerHeight
          } as CSSProperties}
        >
          {team.map(employee => {
            return (
              <TeamEmployee
                key={nanoid()}
                employee={employee}
              />
            );
          })}
        </ul>
      </div>
    );
  }
);

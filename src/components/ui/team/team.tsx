import React from "react";
import clsx from "clsx";
import { CSSProperties } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { EmployeeUI } from "../employee";
import { GroupListUI } from "../group-list";

import { TTeamUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./team.module.css";
import scrollStyle from "../../../styles/scroll.module.css";

export const TeamUI = React.forwardRef<HTMLUListElement, TTeamUIProps>(
  ({ team, type, teamRef, containerHeight }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    const setFade = () => {
      if (type === "artists") return true;
      if (type === "admins") return false;
    };

    return (
      <GroupListUI
        ref={teamRef}
        fade={setFade()}
        className={clsx(
          type === "artists" &&
            styles["group-list_artists"] &&
            !isMobile &&
            scrollStyle.scrolled
        )}
      >
        <ul
          className={clsx(
            styles.team,
            (type === "artists" || isMobile) && styles["team_overflowed-y"],
            (isLarge || isDesktop) && styles["team_large-gap"],
            isLaptop && styles["team_middle-gap"],
            (isTablet || isMobile) && styles["team_small-gap"],
            !isMobile && [scrollStyle.scrolled, styles.team_widthed],
            // !isMobile && styles["team_no-scrollbar"]
          )}
          style={
            {
              "--height": containerHeight,
            } as CSSProperties
          }
          ref={ref}
        >
          {team.map((employee) => {
            return (
              <EmployeeUI key={nanoid()} type={"team"} employee={employee} />
            );
          })}
        </ul>
      </GroupListUI>
    );
  }
);

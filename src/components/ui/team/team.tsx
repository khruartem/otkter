import React from "react";
import { CSSProperties } from "react";
import clsx from "clsx";
import { nanoid } from "@reduxjs/toolkit";

import { Employee } from "../../employee";
import { GroupListUI } from "../group-list";

import { TTeamUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./team.module.css";
import scrollStyle from "../../../styles/scroll.module.css";

export const TeamUI = React.forwardRef<HTMLUListElement, TTeamUIProps>(
  ({ team, type, teamRef, containerHeight }, ref) => {
    // ({ team, type, teamRef }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    const setFade = () => {
      if (type === "artists") return true;
      if (type === "admins") return false;
    }

    return (
      // <div className={clsx(
      //   styles.wrapper,
      //   type === "artists" && styles.team_faded,
      //   (type === "admins" && isMobile) && styles.team_faded,
      // )} 
      // ref={teamRef}
      // >
      <GroupListUI ref={teamRef} fade={setFade()}>
        <ul
          className={clsx(
            styles.team,
            (type === "artists" || isMobile) && styles["team_overflowed-y"],
            (isLarge || isDesktop) && styles["team_large-gap"],
            isLaptop && styles["team_middle-gap"],
            (isTablet || isMobile) && styles["team_small-gap"],
            // isMobile && styles["team_mobile"],
            !isMobile && scrollStyle.scrolled
          )}
          style={
            {
              // "--columns-count": `repeat(${columnsCount}, 1fr)`,
              "--height": containerHeight,
            } as CSSProperties
          }
          ref={ref}
        >
          {team.map((employee) => {
            return <Employee key={nanoid()} employee={employee} />;
          })}
        </ul>
      </GroupListUI>
      // </div>
    );
  }
);

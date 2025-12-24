import React from "react";
import clsx from "clsx";
import { CSSProperties } from "react";

import { GroupListUI } from "../group-list";
import { ItemOTListUI } from "../items-ot-list";
import { EmployeeUI } from "../employee";

import { TTeamUIProps } from "./types";

import { TEmployee } from "../../../utils/types/team";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./team.module.css";
import scrollStyle from "../../../styles/scroll.module.css";

export const TeamUI = React.forwardRef<HTMLUListElement, TTeamUIProps>(
  ({ team, type, teamRef, containerHeight }, ref) => {
    const { isMobile } = useGetMediaQuery();

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
        <ItemOTListUI
          itemsOT={team}
          renderItemOT={(itemOt, key) => (
            <EmployeeUI
              key={key}
              type={"team"}
              employee={itemOt as TEmployee}
            />
          )}
          className={clsx(
            styles["item-ot-list_team"],
            (type === "artists" || isMobile) &&
              styles["item-ot-list_team_overflowed-y"],
            type === "artists" &&
              !isMobile && [
                scrollStyle.scrolled,
                styles["item-ot-list_team_scrolled"],
              ]
          )}
          style={
            {
              "--height": containerHeight,
            } as CSSProperties
          }
          ref={ref}
        />
      </GroupListUI>
    );
  }
);

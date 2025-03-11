import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { Team } from "../../team";

import { TTeamsListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./teams-list.module.css";

export const TeamsListUI: FC<TTeamsListUIProps> = ({
  teams,
  tabsCount,
  adminsRef,
  artistsRef,
  teamsViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["teams-list"],
        isMobile && styles["teams-list_mobile"]
      )}
      style={
        {
          "--tabs-count": `repeat(${tabsCount}, 100vw)`,
        } as CSSProperties
      }
    >
      {teams.administrators && adminsRef && (
        <Team
          team={teams.administrators}
          type={"admins"}
          teamsViewRefs={teamsViewRefs}
          teamRef={adminsRef}
          gridRowsCount={teams.administrators.length}
        />
      )}
      {teams.artists && artistsRef && (
        <Team
          team={teams.artists}
          type={"artists"}
          teamsViewRefs={teamsViewRefs}
          teamRef={artistsRef}
          gridRowsCount={teams.administrators!.length}
        />
      )}
    </div>
  );
};

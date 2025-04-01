import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { Team } from "../../team";

import { TTeamsListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./teams-list.module.css";

export const TeamsListUI: FC<TTeamsListUIProps> = ({
  admins,
  artists,
  tabsCount,
  adminsRef,
  artistsRef,
  teamsViewRefs,
  minTeamLength
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
      {admins && adminsRef && (
        <Team
          team={admins}
          type={"admins"}
          teamsViewRefs={teamsViewRefs}
          teamRef={adminsRef}
          minTeamLength={minTeamLength}
        />
      )}
      {artists && artistsRef && (
        <Team
          team={artists}
          type={"artists"}
          teamsViewRefs={teamsViewRefs}
          teamRef={artistsRef}
          minTeamLength={minTeamLength}
        />
      )}
    </div>
  );
};

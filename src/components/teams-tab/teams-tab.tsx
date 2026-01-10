import { FC } from "react";
import { TTeamsTabProps } from "./types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { Colors } from "../../utils/types";
import { Admins, Artists } from "../icons";

export const TeamsTab: FC<TTeamsTabProps> = ({ tab }) => {
  const { isTablet, isMobile } = useGetMediaQuery();

  return (
    <>
      {tab === "admins" && (
        <Admins
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "artists" && (
        <Artists
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
    </>
  );
};

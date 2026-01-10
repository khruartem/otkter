import { FC } from "react";
import { TProjectTabProps } from "./types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { Colors } from "../../utils/types";
import { Play, Contest, ShortFilm, All, MasterClass } from "../icons";

export const ProjectTab: FC<TProjectTabProps> = ({ tab }) => {
  const { isTablet, isMobile } = useGetMediaQuery();

  return (
    <>
      {tab === "all" && (
        <All
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "play" && (
        <Play
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "contest" && (
        <Contest
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "short-film" && (
        <ShortFilm
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "master-class" && (
        <MasterClass
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

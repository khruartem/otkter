import { FC } from "react";
import { TMerchTabProps } from "./types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { Colors } from "../../utils/types";
import { All, Cloths, Souvenirs } from "../icons";

export const MerchTab: FC<TMerchTabProps> = ({ tab }) => {
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
      {tab === "cloths" && (
        <Cloths
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "souvenirs" && (
        <Souvenirs
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

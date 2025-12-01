import { FC } from "react";
import { TServiceTabProps } from "./types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { Colors } from "../../utils/types";
import {
  OpenSea,
  Events,
  Design,
  Content,
  Lamp,
  SMM,
  MasterClass,
} from "../icons";

export const ServiceTab: FC<TServiceTabProps> = ({ tab }) => {
  const { isTablet, isMobile } = useGetMediaQuery();

  return (
    <>
      {tab === "open-sea" && (
        <OpenSea
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "events" && (
        <Events
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "design" && (
        <Design
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "content" && (
        <Content
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "master-class" && (
        <MasterClass
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "lamp" && (
        <Lamp
          iconType="tab"
          mainColor={Colors.Nephritis100}
          hoverColor={
            isTablet || isMobile ? Colors.Nephritis100 : Colors.Nephritis120
          }
          activeColor={Colors.Navy}
        />
      )}
      {tab === "smm" && (
        <SMM
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

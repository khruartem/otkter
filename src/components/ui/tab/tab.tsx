import React from "react";
import clsx from "clsx";

import {
  Content,
  Design,
  Events,
  Lamp,
  MasterClasses,
  OpenSea,
  SMM,
} from "../../icons/icons";

import { TTabUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "../../icons/icons.module.css";

export const TabUI = React.forwardRef<HTMLLIElement, TTabUIProps>(({ tab, current, onClick }, ref) => {
  const { isTablet, isMobile } = useGetMediaQuery();
  
  return (
    <li ref={ref}>
      {tab === "open-sea" && (
        <OpenSea
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "events" && (
        <Events
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "design" && (
        <Design
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "content" && (
        <Content
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "master-class" && (
        <MasterClasses
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "lamp" && (
        <Lamp
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "smm" && (
        <SMM
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={(isTablet || isMobile) ? Colors.Nephritis100 : Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
    </li>
  );
});

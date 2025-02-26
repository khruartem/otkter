import { FC } from "react";

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

import styles from "./tab.module.css";
import clsx from "clsx";

export const TabUI: FC<TTabUIProps> = ({ tab, current, onClick }) => {
  return (
    <>
      {tab === "open-sea" && (
        <OpenSea
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "events" && (
        <Events
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "design" && (
        <Design
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "content" && (
        <Content
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "master-class" && (
        <MasterClasses
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "lamp" && (
        <Lamp
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
      {tab === "smm" && (
        <SMM
          className={clsx(current && styles.service_active)}
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onClick}
        />
      )}
    </>
  );
};

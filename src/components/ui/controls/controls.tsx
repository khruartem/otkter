import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

import { Button } from "../../button";
import { TrickCircle } from "../../icons/icons";
import { Text } from "../../text";

import { TControlsUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./controls.module.css";
import stylesLink from "../../link/link.module.css";
import { Colors } from "../../../utils/types";
import clsx from "clsx";

export const ControlsUI: FC<TControlsUIProps> = ({ controls, isExtraLink }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div className={isMobile ? styles.controls_mobile : styles.controls}>
      {controls &&
        controls.map(({ label, type, onClick, url, state }) => {
          switch (type) {
            case "link":
              return (
                <Link
                  key={nanoid()}
                  className={stylesLink.link}
                  to={url}
                  state={state}
                >
                  {label}
                </Link>
              );
            case "button":
              return (
                <Button
                  key={nanoid()}
                  type="button"
                  disabled={false}
                  onClick={onClick}
                  className={isMobile ? styles.button_mobile : undefined}
                >
                  {label}
                </Button>
              );
          }
        })}
      {isExtraLink && (
        <div
          className={clsx(
            styles["extra-link"],
            isLarge && styles["extra-link_large-screen"],
            isDesktop && styles["extra-link_desktop"],
            isLaptop && styles["extra-link_laptop"],
            isTablet && styles["extra-link_tablet"],
            isMobile && styles["extra-link_mobile"]
          )}
        >
          <TrickCircle mainColor={Colors.Orange100} />
          <Text
            as={"span"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={16}
            fontWeight={400}
            lineHeight={28}
            textTransform={"none"}
            color={Colors.Navy}
          >
            {"Первое занятие бесплатно"}
          </Text>
        </div>
      )}
    </div>
  );
};

import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Button } from "../../button";
import { Telegram, TrickCircle, VK } from "../../icons/icons";
import { Text } from "../../text";

import { TControlsUIProps } from "./types";
import { Colors, TControlsItem } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./controls.module.css";
import stylesLink from "../../link/link.module.css";

export const ControlsUI: FC<TControlsUIProps> = ({
  controls,
  isExtraLink,
  type,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const renderControls = (controls: TControlsItem[] | undefined) => {
    return controls?.map(({ label, type, onClick, url, state, icon }) => {
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
              className={clsx(
                isMobile &&
                  // (!controls[index+1]?.type || controls[index+1]?.type === "link") &&
                  styles["button_max-width"],
                isMobile && icon && styles["button_min-width"],
                icon && styles.button_icon
              )}
            >
              {icon === "telegram" && <Telegram mainColor={Colors.Light100} />}
              {icon === "vk" && <VK mainColor={Colors.Light100} />}
              {label}
            </Button>
          );
      }
    });
  };

  return controls?.length && controls.length > 1 && !isExtraLink ? (
    <div
      className={clsx(
        styles.controls,
        isMobile && styles.controls_mobile,
        isMobile &&
          controls?.length &&
          type !== "services" &&
          styles.controls_mobile_group,
        type === "team" && styles["controls_large-gap"],
        isMobile && type === "services" && styles["controls_small-gap"]
      )}
    >
      {renderControls(controls)}
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
  ) : (
    renderControls(controls)
  );
};

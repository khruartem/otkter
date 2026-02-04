import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Button } from "../../button";
import { FilmToolz, GitHub, Kinopoisk, Telegram, VK } from "../../icons";

import { TControlsUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { TControlsItem } from "../../../utils/types/controls";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./controls.module.css";
import stylesLink from "../../link/link.module.css";

export const ControlsUI: FC<TControlsUIProps> = ({
  controls,
  extraInfo,
  kind,
}) => {
  const { isMobile } = useGetMediaQuery();

  const renderControls = (controls: TControlsItem[]) => {
    return controls.map(({ label, type, onClick, url, state, icon }) => {
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
                isMobile && styles["button_max-width"],
                isMobile && icon && styles["button_min-width"],
                icon && styles.button_icon,
              )}
            >
              {icon === "telegram" && <Telegram mainColor={Colors.Light100} />}
              {icon === "vk" && <VK mainColor={Colors.Light100} />}
              {icon === "github" && <GitHub mainColor={Colors.Light100} />}
              {icon === "film-toolz" && (
                <FilmToolz mainColor={Colors.Light100} />
              )}
              {icon === "kinopoisk" && (
                <Kinopoisk mainColor={Colors.Light100} />
              )}
              {label}
            </Button>
          );
      }
    });
  };

  return (
    <div
      className={clsx(
        styles.controls,
        isMobile && styles.controls_mobile,
        isMobile &&
          controls?.length &&
          kind !== "services" &&
          styles.controls_mobile_group,
        kind === "team" && styles["controls_large-gap"],
        isMobile && kind === "services" && styles["controls_small-gap"],
      )}
    >
      {extraInfo ? (
        <>
          {renderControls(controls)}
          {extraInfo}
        </>
      ) : (
        renderControls(controls)
      )}
    </div>
  );
};

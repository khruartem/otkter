import { FC } from "react";
import { TControlsUIProps } from "./types";
import { Button } from "../../button";

import styles from "./controls.module.css";
import stylesLink from "../../link/link.module.css";
import { nanoid } from "@reduxjs/toolkit";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

export const ControlsUI: FC<TControlsUIProps> = ({ buttons, links }) => {
  const { isMobile } = useGetMediaQuery();
  return (
    <div className={isMobile ? styles.controls_mobile : styles.controls}>
      {buttons &&
        buttons.map(({ label, onClick }) => {
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
        })}
      {links &&
        links.map(({ label, href }) => {
          return (
            <a
              key={nanoid()}
              className={stylesLink.link}
              href={href}
              target="_blank"
            >
              {label}
            </a>
          );
        })}
    </div>
  );
};

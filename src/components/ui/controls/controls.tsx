import { FC } from "react";
import { TControlsUIProps } from "./types";
import { Button } from "../../button";

import styles from "./controls.module.css";
import stylesLink from "../../link/link.module.css";
import { nanoid } from "@reduxjs/toolkit";

export const ControlsUI: FC<TControlsUIProps> = ({ buttons, links }) => {
  return (
    <div className={styles.controls}>
      {buttons &&
        buttons.map(({ label, onClick }) => {
          return (
            <Button
              key={nanoid()}
              type="button"
              disabled={false}
              onClick={onClick}
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

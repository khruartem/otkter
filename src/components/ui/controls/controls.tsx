import { FC } from "react";
import { TControlsUIProps } from "./types";
import { Button } from "../../button";

import styles from "./controls.module.css";
import stylesLink from "../../link/link.module.css";

export const ControlsUI: FC<TControlsUIProps> = ({ buttons, links }) => {
  return (
    <div className={styles.controls}>
      {buttons.map(({ id, label }) => {
        return (
          <Button key={id} type="button" disabled={false} onClick={() => {}}>
            {label}
          </Button>
        );
      })}
      {links.map(({ id, label, href }) => {
        return (
          <a key={id} className={stylesLink.link} href={href} target="_blank">
            {label}
          </a>
        );
      })}
    </div>
  );
};

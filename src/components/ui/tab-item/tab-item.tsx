import React from "react";
import clsx from "clsx";

import { TTabItemUIProps } from "./types";

import styles from "./tab-item.module.css";

export const TabItemUI = React.forwardRef<HTMLImageElement, TTabItemUIProps>(
  ({ image, name, current, onClick }, ref) => {
    return (
      <img
        src={image}
        alt={`Иконка в переключателе контента ${
          name ? "для " + name : undefined
        }`}
        className={clsx(
          styles["tab-item"],
          current && styles["tab-item_current"]
        )}
        ref={ref}
        onClick={onClick}
      />
    );
  }
);

import React from "react";
import clsx from "clsx";

import { TPhotoTabUIProps } from "./types";

import styles from "./photo-tab.module.css";

export const PhotoTabUI = React.forwardRef<HTMLLIElement, TPhotoTabUIProps>(
  ({ image, name, current, onClick }, ref) => {
    return (
      <li
        className={clsx(
          styles["tab-item"],
          current && styles["tab-item_current"]
        )}
        ref={ref}
      >
        <img
          src={image}
          alt={`Иконка в переключателе контента ${
            name ? "для " + name : undefined
          }`}
          className={styles["tab-item-image"]}
          onClick={onClick}
        />
      </li>
    );
  }
);

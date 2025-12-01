import React from "react";
import clsx from "clsx";

import { TPhotoTabItemUIProps } from "./types";

import styles from "./photo-tab-item.module.css";

export const PhotoTabItemUI = React.forwardRef<
  HTMLImageElement,
  TPhotoTabItemUIProps
>(({ image, name, current, onClick }, ref) => {
  return (
    <li
      className={clsx(
        styles["tab-item"],
        current && styles["tab-item_current"]
      )}
    >
      <img
        src={image}
        alt={`Иконка в переключателе контента ${
          name ? "для " + name : undefined
        }`}
        className={styles["tab-item-image"]}
        ref={ref}
        onClick={onClick}
      />
    </li>
  );
});

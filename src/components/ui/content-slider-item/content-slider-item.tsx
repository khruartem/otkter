import React from "react";
import { RefObject } from "react";

import { TContentSliderItemUIProps } from "./types";

import styles from "./content-slider-item.module.css";

export const ContentSliderItemUI = React.forwardRef<
  HTMLDivElement,
  TContentSliderItemUIProps
>(({ tab, itemViewRef, renderItem }, ref) => {
  return (
    <li className={styles["content-slider__item"]}>
      {renderItem({
        type: tab,
        itemRef: ref as RefObject<HTMLDivElement>,
        itemViewRef,
      })}
    </li>
  );
});

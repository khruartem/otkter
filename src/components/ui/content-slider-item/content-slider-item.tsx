import React from "react";
import { RefObject } from "react";
import clsx from "clsx";

import { TContentSliderItemUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider-item.module.css";

export const ContentSliderItemUI = React.forwardRef<
  HTMLDivElement,
  TContentSliderItemUIProps
>(({ tab, itemViewRef, renderItem, children }, ref) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <li
      className={clsx(
        styles["content-slider__item"],
        isLarge && [
          styles["content-slider__item_large"],
          styles["content-slider__item_middle-gap"],
        ],
        isDesktop && [
          styles["content-slider__item_desktop"],
          styles["content-slider__item_middle-gap"],
        ],
        isLaptop && [
          styles["content-slider__item_laptop"],
          styles["content-slider__item_small-gap"],
        ],
        isTablet && [
          styles["content-slider__item_tablet"],
          styles["content-slider__item_large-gap"],
        ],
        isMobile && [
          styles["content-slider__item_mobile"],
          styles["content-slider__item_large-gap"],
        ]
      )}
    >
      {renderItem({
        type: tab,
        itemRef: ref as RefObject<HTMLDivElement>,
        itemViewRef,
      })}
      {children}
    </li>
  );
});

import { FC } from "react";
import clsx from "clsx";

import { TabBar } from "../../tab-bar";
import { ContentSliderGrid } from "../../content-slider-grid";

import { TContentSliderUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider.module.css";

export const ContentSliderUI: FC<TContentSliderUIProps> = ({
  tabBarContextValue,
  children,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["content-slider"],
        (isDesktop || isTablet || isMobile) &&
          styles["content-slider_small-gap"],
        (isLarge || isLaptop) && styles["content-slider_large-gap"]
      )}
    >
      <TabBar contextValue={tabBarContextValue} />
      <ContentSliderGrid />
      {children}
    </div>
  );
};

import { FC } from "react";
import clsx from "clsx";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
import { Title } from "../../title";
import { TabList } from "../../tab-list copy";

import { TTabsProps } from "./types";

import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./tab-bar.module.css";

export const TabBarUI: FC<TTabsProps> = ({
  currentIndex,
  onSwitch,
  title,
  relativeToTitle,
  className,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const rowedStyle = clsx(
    styles["tab-bar-wrapper"],
    (isLarge || isDesktop || isLaptop) && styles["tab-bar-wrapper_rowed"],
    (isTablet || isMobile) && [
      styles["tab-bar-wrapper_columned"],
      styles["tab-bar-wrapper_small-gap"],
    ],
    isLarge && styles["tab-bar-wrapper_large"],
    isDesktop && styles["tab-bar-wrapper_desktop"],
    isLaptop && styles["tab-bar-wrapper_laptop"],
    isTablet && styles["tab-bar-wrapper_tablet"],
    isMobile && styles["tab-bar-wrapper_mobile"]
  );

  const columnedStyle = clsx(
    styles["tab-bar-wrapper"],
    styles["tab-bar-wrapper_columned"],
    isLarge && styles["tab-bar-wrapper_large"],
    isDesktop && styles["tab-bar-wrapper_desktop"],
    isLaptop && styles["tab-bar-wrapper_laptop"],
    isTablet && styles["tab-bar-wrapper_tablet"],
    isMobile && styles["tab-bar-wrapper_mobile"],
    (isLarge || isLaptop) && styles["tab-bar-wrapper_large-gap"],
    (isDesktop || isTablet || isMobile) && styles["tab-bar-wrapper_middle-gap"]
  );

  const renderTabBar = () => {
    return (
      <div
        className={clsx(
          styles["tab-bar"],
          !className
            ? [
                isLarge && styles["tab-bar_large"],
                isDesktop && styles["tab-bar_desktop"],
                isLaptop && styles["tab-bar_laptop"],
                (isTablet || isMobile) && styles["tab-bar_widthed"],
              ]
            : className
        )}
      >
        <ArrowLeft
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={() => onSwitch(currentIndex - 1)}
        />
        <TabList />
        <ArrowRight
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={() => onSwitch(currentIndex + 1)}
        />
      </div>
    );
  };

  return title ? (
    <div
      className={clsx(
        relativeToTitle === "rowed" && rowedStyle,
        relativeToTitle === "columned" && columnedStyle
      )}
    >
      <Title text={title} />
      {renderTabBar()}
    </div>
  ) : (
    renderTabBar()
  );
};

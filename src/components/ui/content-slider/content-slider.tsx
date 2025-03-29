import { FC, memo } from "react";
import clsx from "clsx";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
import { TabList } from "../../tab-list";

import { TContentSliderUIPros } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider.module.css";

export const ContentSliderUI: FC<TContentSliderUIPros> = memo(
  ({
    type,
    tabs,
    currentTab,
    onTabClick,
    onMoveLeft,
    onMoveRight,
    onMouseEnter,
    onMouseLeave,
    iconRefs,
  }) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    return (
      <div
        className={clsx(
          styles.wrapper,
          isLarge && type === "team" && styles["wrapper_large-screen_team"],
          isLarge && type === "services" && styles["wrapper_large-screen_services"],
          isLarge && type === "projects" && styles["wrapper_large-screen_projects"],
          isDesktop && type === "team" && styles["wrapper_desktop_team"],
          isDesktop && type === "services" && styles["wrapper_desktop_services"],
          isDesktop && type === "projects" && styles["wrapper_desktop_projects"],
          isLaptop && type === "team" && styles["wrapper_laptop_team"],
          isLaptop && type === "services" && styles["wrapper_laptop_services"],
          isLaptop && type === "projects" && styles["wrapper_laptop_projects"],
          (isTablet || isMobile) && styles.wrapper_widthed
        )}
      >
        <ArrowLeft
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onMoveLeft}
        />
        <div
          className={clsx(
            styles["content-slider"],
            isLarge && styles["content-slider_large-screen"],
            isDesktop && styles["content-slider_desktop"],
            isLaptop && styles["content-slider_laptop"],
            isTablet && styles["content-slider_tablet"],
            isMobile && styles["content-slider_mobile"]
          )}
        >
          <TabList
            tabs={tabs}
            currentTab={currentTab}
            onTabClick={onTabClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            iconRefs={iconRefs}
          />
        </div>
        <ArrowRight
          mainColor={Colors.Nephritis100}
          hoverColor={Colors.Nephritis120}
          activeColor={Colors.Navy}
          onClick={onMoveRight}
        />
      </div>
    );
  }
);

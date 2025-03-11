import { FC, memo } from "react";
import clsx from "clsx";

import { TContentSliderUIPros } from "./types";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider.module.css";
import { TabListUI } from "../tab-list";

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
          isLarge && type === "team" && styles["wrapper_large-screen"],
          isLarge && type === "services" && styles["wrapper_large-screen_services"],
          isDesktop && styles.wrapper_desktop,
          isLaptop && styles.wrapper_laptop,
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
          <TabListUI
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

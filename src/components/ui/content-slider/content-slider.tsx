import { FC, memo } from "react";
import clsx from "clsx";

import { TContentSliderUIPros } from "./types";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider.module.css";
//import { TabUI } from "../tab";
import { TabListUI } from "../tab-list";

export const ContentSliderUI: FC<TContentSliderUIPros> = memo(
  ({
    currentTab,
    onTabClick,
    onMoveLeft,
    onMoveRight,
    tabs,
    serviceIconRefs,
    ref,
  }) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();

    return (
      <div
        className={clsx(
          styles.wrapper,
          isLarge && styles["wrapper_large-screen"],
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
          ref={ref}
        >
          <TabListUI
            tabs={tabs}
            currentTab={currentTab}
            onTabClick={onTabClick}
            serviceIconRefs={serviceIconRefs}
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

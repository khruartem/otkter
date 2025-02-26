import { FC } from "react";
import clsx from "clsx";

import { TContentSliderUIPros } from "./types";

import { ArrowLeft, ArrowRight } from "../../icons/icons";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider.module.css";
import { TabUI } from "../tab";

export const ContentSliderUI: FC<TContentSliderUIPros> = ({
  currentTab,
  onTabClick,
  onMoveLeft,
  onMoveRight,
  tabs,
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
          isMobile && styles["content-slider_mobile"],
        )}
        ref={ref}
      >
        <div>
        {tabs.map((tab) => (
          <TabUI
            tab={tab}
            current={tab === currentTab ? true : false}
            onClick={() => onTabClick(tab)}
          />
        ))}
        </div>
      </div>
      <ArrowRight
        mainColor={Colors.Nephritis100}
        hoverColor={Colors.Nephritis120}
        activeColor={Colors.Navy}
        onClick={onMoveRight}
      />
    </div>
  );
};

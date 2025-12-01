import { CSSProperties, FC, SyntheticEvent } from "react";
import clsx from "clsx";

import { ContentSliderItem } from "../../content-slider-item";

import { TContentSliderGridUIProps } from "./types";
// import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./content-slider-grid.module.css";

export const ContentSliderGridUI: FC<TContentSliderGridUIProps> = ({
  tabs,
  currentTab,
  currentIndex,
  previousIndex,
  setCurrentTab,
  setCurrentIndex,
  renderItem,
  onScrollItem
}) => {
  // const { isMobile } = useGetMediaQuery();

  return (
    // <div
    <ul
      className={clsx(
        styles["content-slider__grid"],
        // isMobile && styles["content-slider__grid_mobile"]
      )}
      style={
        {
          "--tabs-count": tabs.length,
        } as CSSProperties
      }
      onScroll={(e: SyntheticEvent) => onScrollItem(e)}
    >
      {tabs.map((tab, index) => {
        return (
          <ContentSliderItem
            key={index}
            tab={tab}
            index={index}
            currentTab={currentTab}
            currentIndex={currentIndex}
            previousIndex={previousIndex}
            // current={tab === currentTab}
            setCurrentTab={setCurrentTab}
            setCurrentIndex={setCurrentIndex}
            renderItem={renderItem}
          />
        );
      })}
    </ul>
  );
};

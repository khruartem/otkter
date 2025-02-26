import { FC, useRef } from "react";

import { TContentSliderProps } from "./types";

import { ContentSliderUI } from "../ui/content-slider";
import { TServicesTabMode } from "../../utils/types";
import { useGetTabs } from "../../hooks/useGetTabs";

export const ContentSlider: FC<TContentSliderProps> = ({
  onTabClick,
  currentTab,
}) => {
  const tabs: TServicesTabMode[] = useGetTabs();
  const contenSliderRef = useRef<HTMLDivElement>(null);

  const onMoveLeft = () => {
    if (contenSliderRef.current)
      contenSliderRef.current.scrollTo({
        left: window.scrollX + 100,
        behavior: "smooth",
      });
  };

  const onMoveRight = () => {
    if (contenSliderRef.current)
      contenSliderRef.current.scrollTo({
        left: window.scrollX - 100,
        behavior: "smooth",
      });
  };

  return (
    <ContentSliderUI
      onTabClick={onTabClick}
      currentTab={currentTab}
      tabs={tabs}
      onMoveLeft={onMoveLeft}
      onMoveRight={onMoveRight}
      ref={contenSliderRef}
    />
  );
};

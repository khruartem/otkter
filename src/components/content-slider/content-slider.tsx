import { FC, SyntheticEvent, useState } from "react";

import { ContentSliderPovider } from "./content-slider-provider";
import { ContentSliderUI } from "../ui/content-slider copy";

import { TContentSliderContext, TContentSliderProps } from "./types";
import { TTabBarCotextValue } from "../tab-bar copy/types";

import { onlyUnique } from "../../utils/onlyUnique";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/common";
import { isItemOTType } from "../../utils/guards/is-item-ot-type";
import { TEmployee } from "../../utils/types/team";
import { TMerch } from "../../utils/types/merch";

export const ContentSlider: FC<TContentSliderProps> = ({
  items,
  tabBarProps,
  firstTab,
  lastTab,
  renderItem,
  children,
  emptyStateContent,
}) => {
  const tabsUnsorted = items.map((item) => {
    return item.type;
  }) as TItemOTType[];

  const tabs = tabsUnsorted.filter(onlyUnique);

  if (firstTab) tabs.unshift(firstTab);
  if (lastTab) tabs.push(lastTab);

  const [currentTab, setCurrentTab] = useState<TItemOTType>(tabs[0]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [previousIndex, setPreviousIndex] = useState<number>(0);

  const handleTabClick = (
    item: TProject | TEmployee | TService | TItemOTType | TMerch,
    index: number
  ) => {
    if (isItemOTType(item)) {
      setPreviousIndex(currentIndex);
      setCurrentTab(item);
      setCurrentIndex(index);
    }
  };

  const handleTabSwitch: (index: number) => void = (index: number) => {
    if (index > tabs.length - 1) {
      handleTabClick(tabs[0], 0);
    } else if (index < 0) {
      handleTabClick(tabs[tabs.length - 1], tabs.length - 1);
    } else {
      handleTabClick(tabs[index], index);
    }
  };

  const handleScrollItem = (e: SyntheticEvent) => {
    const { scrollLeft, clientWidth } = e.currentTarget;

    let index = 0;
    while (index <= tabs.length) {
      // console.log(scrollLeft, clientWidth * index, clientWidth * (index + 1));
      if (
        scrollLeft >= clientWidth * index &&
        scrollLeft <= clientWidth * (index + 1)
      ) {
        if (currentTab === tabs[previousIndex] && currentTab !== tabs[index]) {
          setPreviousIndex(index);
          setCurrentTab(tabs[index]);
          setCurrentIndex(index);
        } else {
          setPreviousIndex(index);
        }
        // console.log(currentTab, tabs[index], tabs[previousIndex]);
        break;
      } else index++;
    }
  };

  const tabBarContextValue: TTabBarCotextValue = {
    tabs,
    title: tabBarProps.title,
    relativeToTitle: tabBarProps.relativeToTitle,
    currentTab,
    currentIndex,
    onTabClick: handleTabClick,
    renderTab: tabBarProps.renderTab,
    onSwitch: handleTabSwitch,
    tabsGap: tabBarProps.tabsGap,
    className: tabBarProps?.className,
  };

  const contentSliderContextValue: TContentSliderContext = {
    tabs,
    currentTab,
    currentIndex,
    previousIndex,
    onScrollItem: handleScrollItem,
    renderItem,
    emptyStateContent,
  };

  return (
    <ContentSliderPovider value={contentSliderContextValue}>
      <ContentSliderUI
        tabBarContextValue={tabBarContextValue}
        children={children}
      />
    </ContentSliderPovider>
  );
};

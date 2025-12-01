import { FC } from "react";

import { TabBarUI } from "../ui/tab-bar copy";

import { TIconTabBarProps } from "./types";

export const IconTabBar: FC<TIconTabBarProps> = ({
  tabs,
  styleType,
  title,
  currentTab,
  currentIndex,
  setCurrentTab,
  setCurrentIndex,
  setPreviousIndex,
  renderTab,
  className,
  tabsGap,
}) => {
  const onSwitch: (index: number) => void = (index: number) => {
    setPreviousIndex(currentIndex);

    if (index > tabs.length - 1) {
      setCurrentIndex(0);
      setCurrentTab(tabs[0]);
    } else if (index < 0) {
      setCurrentIndex(tabs.length - 1);
      setCurrentTab(tabs[tabs.length - 1]);
    } else {
      setCurrentIndex(index);
      setCurrentTab(tabs[index]);
    }
  };

  return (
    <TabBarUI
      tabs={tabs}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      setPreviousIndex={setPreviousIndex}
      onSwitch={onSwitch}
      renderTab={renderTab}
      className={className}
      tabsGap={tabsGap}
      styleType={styleType}
      title={title}
    />
  );
};

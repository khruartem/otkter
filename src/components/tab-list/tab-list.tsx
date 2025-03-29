import { FC } from "react";

import { TabListUI } from "../ui/tab-list";

import { TTabListProps } from "./types";
import { useGetIsMainPage } from "../../hooks/useGetIsMainPage";

export const TabList: FC<TTabListProps> = ({
  tabs,
  currentTab,
  onTabClick,
  onMouseEnter,
  onMouseLeave,
  iconRefs,
}) => {
  const isMain = useGetIsMainPage();

  return (
    <TabListUI
      tabs={tabs}
      currentTab={currentTab}
      onTabClick={onTabClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      iconRefs={iconRefs}
      isMainPage={isMain}
    />
  );
};

import { FC } from "react";

import { TabListUI } from "../ui/tab-list copy";

import { useTabBarContext } from "../../hooks/useTabBarContext";

export const TabList: FC = () => {
  const { tabs, tabsGap } = useTabBarContext();

  return <TabListUI tabs={tabs} tabsGap={tabsGap} />;
};

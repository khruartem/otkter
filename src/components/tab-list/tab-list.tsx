import { FC } from "react";

import { TabListUI } from "../ui/tab-list";

import { useTabBarContext } from "../../hooks/contexts/useTabBarContext";

export const TabList: FC = () => {
  const { tabs, tabsGap } = useTabBarContext();

  return <TabListUI tabs={tabs} tabsGap={tabsGap} />;
};

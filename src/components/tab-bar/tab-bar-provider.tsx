import { FC } from "react";

import { TabBarContext } from "./tab-bar-context";

import { TTabBarProviderProps } from "./types";

export const TabBarProvider: FC<TTabBarProviderProps> = ({
  value,
  children,
}) => {
  return (
    <TabBarContext.Provider value={value}>{children}</TabBarContext.Provider>
  );
};

import { FC, ReactNode } from "react";

import { TabBarContext } from "./tab-bar-context";

import { TTabBarCotextValue } from "./types";

type TTabBarProviderProps = {
  children: ReactNode;
  value: TTabBarCotextValue;
};

export const TabBarProvider: FC<TTabBarProviderProps> = ({
  value,
  children,
}) => {
  return (
    <TabBarContext.Provider value={value}>{children}</TabBarContext.Provider>
  );
};

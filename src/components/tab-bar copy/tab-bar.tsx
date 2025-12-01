import { FC } from "react";

import { TabBarUI } from "../ui/tab-bar copy";
import { TabBarProvider } from "./tab-bar-provider";

import { TTabBarProps } from "./types";

export const TabBar: FC<TTabBarProps> = ({ contextValue }) => {
  return (
    <TabBarProvider value={contextValue}>
      <TabBarUI
        onSwitch={contextValue.onSwitch}
        currentIndex={contextValue.currentIndex}
        styleType={"rowed"}
        className={contextValue?.className}
      />
    </TabBarProvider>
  );
};

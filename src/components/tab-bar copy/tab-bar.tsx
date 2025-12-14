import { FC } from "react";

import { TabBarUI } from "../ui/tab-bar copy";
import { TabBarProvider } from "./tab-bar-provider";

import { TTabBarProps } from "./types";

export const TabBar: FC<TTabBarProps> = ({ contextValue }) => {
  return (
    <TabBarProvider value={contextValue}>
      <TabBarUI
        title={contextValue?.title}
        onSwitch={contextValue.onSwitch}
        currentIndex={contextValue.currentIndex}
        relativeToTitle={contextValue.relativeToTitle}
        className={contextValue?.className}
      />
    </TabBarProvider>
  );
};

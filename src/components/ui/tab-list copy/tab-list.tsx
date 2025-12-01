import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { TTabListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./tab-list.module.css";
import { TabItem } from "../../tab-item copy";

export const TabListUI: FC<TTabListUIProps> = ({ tabs, tabsGap }) => {
  const { isMobile } = useGetMediaQuery();

  return (
    <ul
      className={clsx(
        styles["tab-list"],
        isMobile && styles["tab-list_widthed"],
        tabsGap === "large" && styles["tab-list_large-gap"],
        tabsGap === "middle" && styles["tab-list_middle-gap"],
        tabsGap === "small" && styles["tab-list_small-gap"],
        tabsGap === "none" && styles["tab-list_no-gap"]
      )}
      style={
        {
          "--tabs-gap": tabsGap,
        } as CSSProperties
      }
    >
      {tabs.map((tab, index) => {
        return <TabItem key={index} tab={tab} index={index} />;
      })}
    </ul>
  );
};

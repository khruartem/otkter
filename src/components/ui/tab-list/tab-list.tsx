import { FC, memo } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { TTabListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import { TabUI } from "../tab";

import styles from "./tab-list.module.css";
import clsx from "clsx";

export const TabListUI: FC<TTabListUIProps> = memo(({
  tabs,
  currentTab,
  onTabClick,
  serviceIconRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  return (
    <ul
      className={clsx(
        styles["tab-list"],
        isMobile && styles["tab-list_mobile"]
      )}
    >
      {tabs.map((tab) => {
        const iconRef = serviceIconRefs.find(
          (serviceRef) => serviceRef.type === tab
        )?.ref;
        return (
          <TabUI
            tab={tab}
            current={tab === currentTab ? true : false}
            onClick={() => onTabClick(tab)}
            key={nanoid()}
            ref={iconRef}
          />
        );
      })}
    </ul>
  );
});

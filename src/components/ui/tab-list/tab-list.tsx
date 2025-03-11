import { FC, memo } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { TTabListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import { TabUI } from "../tab";

import styles from "./tab-list.module.css";
import clsx from "clsx";
import { TServicesTabMode, TTeamTabMode } from "../../../utils/types";

export const TabListUI: FC<TTabListUIProps> = memo(({
  tabs,
  currentTab,
  onTabClick,
  onMouseEnter,
  onMouseLeave,
  iconRefs,
}) => {
  const { isMobile } = useGetMediaQuery();

  return (
    <ul
      className={clsx(
        styles["tab-list"],
        isMobile && tabs.length >= 4 && styles["tab-list_paddinged"],
        isMobile && styles["tab-list_margined"]
      )}
    >
      {tabs.map((tab) => {
        const iconRef = iconRefs.find(
          (icon) => icon.type === tab
        )?.ref;
        return (
          <TabUI
            tab={tab}
            current={tab === currentTab ? true : false}
            onClick={() => onTabClick(tab as TServicesTabMode & TTeamTabMode)}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            key={nanoid()}
            ref={iconRef}
          />
        );
      })}
    </ul>
  );
});

import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { Share } from "../../share copy";
import { PhotoTabBar } from "../../photo-tab-bar";
import { PhotoTabItem } from "../../photo-tab-item";

import { TInfoNavigationUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./info-navigation.module.css";

export const InfoNavigationUI: FC<TInfoNavigationUIProps> = ({
  currentItem,
  items,
  tabsGap,
  className,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["info-navigation"],
        isLarge && styles["info-navigation_padding-large"],
        (isDesktop || isLaptop || isTablet) &&
          styles["info-navigation_padding-small"],
        (isTablet || isMobile) && styles["info-navigation_columned"],
        isTablet && styles["info-navigation_tablet"],
        isMobile && styles["info-navigation_mobile"],
        className && className
      )}
      style={{ "--tabs-gap": tabsGap } as CSSProperties}
    >
      <Share item={currentItem} />
      <PhotoTabBar
        baseUrl={
          currentItem.kind === "projects" || currentItem.kind === "services"
            ? currentItem.kind
            : "team/admins"
        }
        items={items}
        currentItem={currentItem}
        renderTab={(tabProps) => (
          <PhotoTabItem key={currentItem.id} {...tabProps} />
        )}
        className={clsx(
          styles["tabs-bar_info"],
          isLarge && styles["tabs-bar_info_large"],
          isDesktop && styles["tabs-bar_info_desktop"],
          isLaptop && styles["tabs-bar_info_laptop"]
        )}
        tabsGap={tabsGap}
      />
    </div>
  );
};

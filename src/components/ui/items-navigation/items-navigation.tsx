import { CSSProperties, FC } from "react";
import clsx from "clsx";

import { Share } from "../../share copy";
import { PhotoTabBar } from "../../photo-tab-bar";
import { PhotoTab } from "../../photo-tab";

import { TItemsNavigationUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./items-navigation.module.css";

export const ItemsNavigationUI: FC<TItemsNavigationUIProps> = ({
  currentItem,
  currentIndex,
  items,
  tabsGap,
  className,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["item-navigation"],
        isLarge && styles["item-navigation_padding-large"],
        (isDesktop || isLaptop || isTablet) &&
          styles["item-navigation_padding-small"],
        (isTablet || isMobile) && styles["item-navigation_columned"],
        isTablet && styles["item-navigation_tablet"],
        isMobile && styles["item-navigation_mobile"],
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
        currentItemIndex={currentIndex}
        renderTab={(tabProps) => (
          <PhotoTab key={currentItem.id} {...tabProps} />
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

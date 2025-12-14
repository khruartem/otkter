import { FC, useEffect, useRef } from "react";

import { TTabItemProps } from "./types";

import { lockScroll } from "../../utils/lockScroll";

import { useTabBarContext } from "../../hooks/useTabBarContext";

export const TabItem: FC<TTabItemProps> = ({ tab, index }) => {
  const iconRef = useRef<HTMLLIElement>(null);
  const { currentTab, renderTab, onTabClick } = useTabBarContext();

  useEffect(() => {
    if (currentTab === tab) {
      iconRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      lockScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  return renderTab({
    tab,
    current: currentTab === tab,
    iconRef,
    onClick: () => onTabClick(tab, index),
  });
};

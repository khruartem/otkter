import { FC, useEffect, useRef } from "react";

import { TTabItemProps } from "./types";

import { lockScroll } from "../../utils/lockScroll";

import { useTabBarContext } from "../../hooks/useTabBarContext";

export const TabItem: FC<TTabItemProps> = ({ tab, index }) => {
  const iconRef = useRef<HTMLLIElement>(null);
  const { currentTab, renderTab, handleTabClick } = useTabBarContext();

  useEffect(() => {
    // if (current) scrollIntoElementView(iconRef, "smooth", "center");
    if (currentTab === tab) {
      // console.log(iconRef)
      iconRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      // scrollIntoElementView(iconRef, "smooth", "center");
      lockScroll();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  // return renderItem({ ...{ tab, current, ref: iconRef, onClick } });
  return renderTab({
    tab,
    current: currentTab === tab,
    iconRef,
    onClick: () => handleTabClick(tab, index),
  });
};

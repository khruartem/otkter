import { FC } from "react";
import clsx from "clsx";

import { ItemsNavigationUI } from "../ui/items-navigation";

import { useInfoContext } from "../../hooks/contexts/useInfoContext";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const InfoNavigation: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const { items, currentItem, currentIndex } = useInfoContext();

  const tabsGap = clsx(
    isLarge && "1.012vw",
    isDesktop && "0.857vw",
    isLaptop && "1.0635vw",
    isTablet && "6.0274vw",
    isMobile && "1.69vw"
  );

  return (
    <ItemsNavigationUI
      currentItem={currentItem}
      currentIndex={currentIndex}
      items={items}
      tabsGap={tabsGap}
    />
  );
};

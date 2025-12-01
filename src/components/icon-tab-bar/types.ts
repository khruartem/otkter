import { ReactNode } from "react";
import { TCardType, TTabBarStyle, TTabsGap } from "../../utils/types";

export type TIconTabBarProps = {
  tabs: TCardType[];
  styleType: TTabBarStyle;
  title?: string;
  currentTab: TCardType;
  currentIndex: number;
  previousIndex: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setPreviousIndex: React.Dispatch<React.SetStateAction<number>>;
  renderTab: (item: {
    tab: TCardType;
    current: boolean;
    iconRef: React.RefObject<HTMLLIElement>;
    onClick: () => void;
  }) => ReactNode;
  className?: string;
  tabsGap: TTabsGap;
};

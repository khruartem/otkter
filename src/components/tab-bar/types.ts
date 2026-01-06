import { TItemOT, TItemOTType } from "../../utils/types/item-ot";
import { TTabBarStyle, TTabsGap } from "../../utils/types";
import { ReactNode } from "react";

export type TTabBarCotextValue = {
  tabs: TItemOT[] | TItemOTType[];
  title?: string;
  currentTab: TItemOT | TItemOTType;
  relativeToTitle: TTabBarStyle;
  currentIndex: number;
  onTabClick: (item: TItemOT | TItemOTType, index: number) => void;
  renderTab: (item: {
    tab: TItemOT | TItemOTType;
    current: boolean;
    iconRef: React.RefObject<HTMLLIElement>;
    onClick: () => void;
  }) => React.ReactNode;
  onSwitch: (index: number) => void;
  className?: string;
  tabsGap: TTabsGap;
};

export type TTabBarProps = {
  contextValue: TTabBarCotextValue;
};

export type TTabBarProviderProps = {
  children: ReactNode;
  value: TTabBarCotextValue;
};

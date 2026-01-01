import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/common";
import { TTabBarStyle, TTabsGap } from "../../utils/types";
import { TEmployee } from "../../utils/types/team";
import { ReactNode } from "react";
import { TMerch } from "../../utils/types/merch";

export type TTabBarCotextValue = {
  tabs: TProject[] | TService[] | TEmployee[] | TItemOTType[] | TMerch[];
  title?: string;
  currentTab: TProject | TService | TEmployee | TItemOTType | TMerch;
  relativeToTitle: TTabBarStyle;
  currentIndex: number;
  onTabClick: (
    item: TProject | TService | TEmployee | TItemOTType | TMerch,
    index: number
  ) => void;
  renderTab: (item: {
    tab: TProject | TService | TEmployee | TItemOTType | TMerch;
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

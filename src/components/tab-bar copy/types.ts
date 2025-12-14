import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/common";
import { TTabBarStyle, TTabsGap } from "../../utils/types";
import { TEmployee } from "../../utils/types/team";

export type TTabBarCotextValue = {
  tabs: TProject[] | TService[] | TEmployee[] | TItemOTType[];
  title?: string;
  currentTab: TProject | TService | TEmployee | TItemOTType;
  relativeToTitle: TTabBarStyle;
  currentIndex: number;
  onTabClick: (
    item: TProject | TService | TEmployee | TItemOTType,
    index: number
  ) => void;
  renderTab: (item: {
    tab: TProject | TService | TEmployee | TItemOTType;
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

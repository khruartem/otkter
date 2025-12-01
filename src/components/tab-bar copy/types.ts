import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee, TTabsGap } from "../../utils/types";

export type TTabBarCotextValue = {
  tabs: TProject[] | TService[] | TEmployee[];
  currentTab: TProject | TService | TEmployee;
  currentIndex: number;
  handleTabClick: (
    item: TProject | TService | TEmployee,
    index: number
  ) => void;
  renderTab: (item: {
    tab: TProject | TService | TEmployee;
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

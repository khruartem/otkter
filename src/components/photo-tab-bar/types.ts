import { ReactNode } from "react";
import { TEmployee, TTabsGap } from "../../utils/types";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";

export type TPhotoTabBarProps = {
  baseUrl: "team/admins" | "projects" | "services";
  currentItem: TProject | TService | TEmployee;
  items: TProject[] | TService[] | TEmployee[];
  renderTab: (item: {
    tab: TProject | TService | TEmployee;
    current: boolean;
    iconRef: React.RefObject<HTMLLIElement>;
    onClick: () => void;
  }) => ReactNode;
  className?: string;
  tabsGap: TTabsGap;
};

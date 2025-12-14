import { ReactNode } from "react";
import { TTabsGap } from "../../utils/types";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/common";
import { TEmployee } from "../../utils/types/team";

export type TPhotoTabBarProps = {
  baseUrl: "team/admins" | "projects" | "services";
  currentItem: TProject | TService | TEmployee;
  currentItemIndex: number;
  items: TProject[] | TService[] | TEmployee[];
  renderTab: (item: {
    tab: TProject | TService | TEmployee | TItemOTType;
    current: boolean;
    iconRef: React.RefObject<HTMLLIElement>;
    onClick: () => void;
  }) => ReactNode;
  className?: string;
  tabsGap: TTabsGap;
};

import { ReactNode } from "react";
import { TTabsGap } from "../../utils/types";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/common";
import { TEmployee } from "../../utils/types/team";
import { TMerch } from "../../utils/types/merch";

export type TPhotoTabBarProps = {
  baseUrl: "team/admins" | "projects" | "services";
  currentItem: TProject | TService | TEmployee | TMerch;
  currentItemIndex: number;
  items: TProject[] | TService[] | TEmployee[] | TMerch[];
  renderTab: (item: {
    tab: TProject | TService | TEmployee | TItemOTType | TMerch;
    current: boolean;
    iconRef: React.RefObject<HTMLLIElement>;
    onClick: () => void;
  }) => ReactNode;
  className?: string;
  tabsGap: TTabsGap;
};

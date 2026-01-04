import { ReactNode } from "react";
import { TTabsGap } from "../../utils/types";
import { TItemOT, TItemOTType } from "../../utils/types/common";

export type TPhotoTabBarProps = {
  baseUrl: "team/admins" | "projects" | "services";
  currentItem: TItemOT;
  currentItemIndex: number;
  items: TItemOT[];
  renderTab: (item: {
    tab: TItemOT | TItemOTType;
    current: boolean;
    iconRef: React.RefObject<HTMLLIElement>;
    onClick: () => void;
  }) => ReactNode;
  className?: string;
  tabsGap: TTabsGap;
};

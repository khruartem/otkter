import { TTabsGap } from "../../../utils/types";
import { TItemOT } from "../../../utils/types/item-ot";

export type TItemsNavigationUIProps = {
  currentItem: TItemOT;
  currentIndex: number;
  items: TItemOT[];
  className?: string;
  tabsGap: TTabsGap;
};

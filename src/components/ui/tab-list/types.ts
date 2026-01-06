import { TTabsGap } from "../../../utils/types";
import { TItemOT, TItemOTType } from "../../../utils/types/item-ot";

export type TTabListUIProps = {
  tabs: TItemOT[] | TItemOTType[];
  tabsGap: TTabsGap;
};

import { TTabsGap } from "../../../utils/types";
import { TItemOT, TItemOTType } from "../../../utils/types/common";

export type TTabListUIProps = {
  tabs: TItemOT[] | TItemOTType[];
  tabsGap: TTabsGap;
};

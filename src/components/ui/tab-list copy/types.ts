import { TEmployee, TTabsGap } from "../../../utils/types";
import { TItemOTType } from "../../../utils/types/common";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";

export type TTabListUIProps = {
  tabs: TProject[] | TService[] | TEmployee[] | TItemOTType[];
  tabsGap: TTabsGap;
};

import { TTabsGap } from "../../../utils/types";
import { TItemOTType } from "../../../utils/types/common";
import { TMerch } from "../../../utils/types/merch";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TEmployee } from "../../../utils/types/team";

export type TTabListUIProps = {
  tabs: TProject[] | TService[] | TEmployee[] | TItemOTType[] | TMerch[];
  tabsGap: TTabsGap;
};

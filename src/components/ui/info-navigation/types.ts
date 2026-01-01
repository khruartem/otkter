import { TTabsGap } from "../../../utils/types";
import { TMerch } from "../../../utils/types/merch";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TEmployee } from "../../../utils/types/team";

export type TInfoNavigationUIProps = {
  currentItem: TProject | TService | TEmployee | TMerch;
  currentIndex: number;
  items: TProject[] | TService[] | TEmployee[] | TMerch[];
  className?: string;
  tabsGap: TTabsGap;
};

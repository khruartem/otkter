import { TEmployee, TTabsGap } from "../../../utils/types";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";

export type TInfoNavigationUIProps = {
  currentItem: TProject | TService | TEmployee;
  items: TProject[] | TService[] | TEmployee[];
  className?: string;
  tabsGap: TTabsGap;
};

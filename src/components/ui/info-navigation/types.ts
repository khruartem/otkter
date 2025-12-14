import { TTabsGap } from "../../../utils/types";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TEmployee } from "../../../utils/types/team";

export type TInfoNavigationUIProps = {
  currentItem: TProject | TService | TEmployee;
  currentIndex: number;
  items: TProject[] | TService[] | TEmployee[];
  className?: string;
  tabsGap: TTabsGap;
};

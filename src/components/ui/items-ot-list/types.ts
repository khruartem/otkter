import { CSSProperties, ReactNode } from "react";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TEmployee } from "../../../utils/types/team";

export type TItemOTListUIProps = {
  itemsOT: TProject[] | TService[] | TEmployee[];
  renderItemOT: (
    itemOT: TProject | TService | TEmployee,
    key?: string
  ) => ReactNode;
  className?: string;
  style?: CSSProperties;
};

import { CSSProperties, ReactNode } from "react";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TEmployee } from "../../../utils/types/team";
import { TMerch } from "../../../utils/types/merch";

export type TItemOTListUIProps = {
  itemsOT: TProject[] | TService[] | TEmployee[] | TMerch[];
  renderItemOT: (
    itemOT: TProject | TService | TEmployee | TMerch,
    key?: string
  ) => ReactNode;
  className?: string;
  style?: CSSProperties;
};

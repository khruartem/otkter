import { ReactNode } from "react";
import { TMerch } from "../../utils/types/merch";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";

export type TInfoRendererProps = {
  currentItem?: TProject | TService | TEmployee | TMerch;
  render: (currentItem: TProject | TService | TEmployee | TMerch) => ReactNode;
};

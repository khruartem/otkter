import { TEmployee } from "../../utils/types";
import { TItemOTType } from "../../utils/types/common";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";

export type TTabItemProps = {
  tab: TProject | TService | TEmployee | TItemOTType;
  index: number;
};

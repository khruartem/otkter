import { TItemOTType } from "../../utils/types/common";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";

export type TServiceTabProps = {
  tab: TProject | TEmployee | TService | TItemOTType;
};

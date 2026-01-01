import { TItemOTType } from "../../utils/types/common";
import { TMerch } from "../../utils/types/merch";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";

export type TTeamsTabProps = {
  tab: TItemOTType | TProject | TEmployee | TService | TMerch;
};

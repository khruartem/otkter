import { TEmployee } from "../../utils/types";
import { TItemOTType } from "../../utils/types/common";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";

export type TTeamsTabProps = {
  tab: TItemOTType | TProject | TEmployee | TService;
};

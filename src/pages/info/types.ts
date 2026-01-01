import { TMerch } from "../../utils/types/merch";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";

export type TInfoProps = {
  currentItem: TProject | TService | TEmployee | TMerch;
  items: TProject[] | TService[] | TEmployee[] | TMerch[];
};

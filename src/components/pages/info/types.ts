import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";
import { TEmployee } from "../../../utils/types/team";

export type TInfoProps = {
  currentItem: TProject | TService | TEmployee;
  items: TProject[] | TService[] | TEmployee[];
};

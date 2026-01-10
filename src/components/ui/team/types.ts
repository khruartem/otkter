import { TItemOTType } from "../../../utils/types/item-ot";
import { TEmployee } from "../../../utils/types/team";

export type TTeamUIProps = {
  team: TEmployee[];
  type: TItemOTType;
  teamRef: React.RefObject<HTMLDivElement>;
  // columnsCount: number;
  containerHeight?: string;
};

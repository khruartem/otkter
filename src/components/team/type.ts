import { TItemOTType } from "../../utils/types/item-ot";
import { TEmployee } from "../../utils/types/team";

export type TTeamProps = {
  team: TEmployee[];
  type: TItemOTType;
  teamViewRef: (node?: Element | null | undefined) => void;
  teamRef: React.RefObject<HTMLDivElement>;
  minTeamLength?: number;
};

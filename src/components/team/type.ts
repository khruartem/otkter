import { TItemOTType } from "../../utils/types/common";
import { TEmployee } from "../../utils/types/team";

export type TTeamProps = {
  team: TEmployee[];
  type: TItemOTType;
  teamViewRef: (node?: Element | null | undefined) => void;
  teamRef: React.RefObject<HTMLDivElement>;
  minTeamLength?: number;
};

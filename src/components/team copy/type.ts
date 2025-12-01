import { TCardType, TEmployee } from "../../utils/types"

export type TTeamProps = {
  team: TEmployee[];
  type: TCardType;
  teamViewRef: (node?: Element | null | undefined) => void;
  teamRef: React.RefObject<HTMLDivElement>;
  minTeamLength?: number;
}
import { TEmployee, TRole } from "../../../utils/types";

export type TTeamUIProps = {
  team: TEmployee[];
  type: TRole;
  //teamViewRef: ((node?: Element | null) => void) | undefined;
  teamRef: React.RefObject<HTMLDivElement>;
  cardsCount: number;
  containerHeight?: string;
};

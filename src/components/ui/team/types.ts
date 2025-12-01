import { TCardType, TEmployee } from "../../../utils/types";

export type TTeamUIProps = {
  team: TEmployee[];
  type: TCardType;
  teamRef: React.RefObject<HTMLDivElement>;
  // columnsCount: number;
  containerHeight?: string;
};

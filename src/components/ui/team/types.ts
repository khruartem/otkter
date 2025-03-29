import { TEmployee, TRole } from "../../../utils/types";

export type TTeamUIProps = {
  team: TEmployee[];
  type: TRole;
  teamRef: React.RefObject<HTMLDivElement>;
  columnsCount: number;
  containerHeight?: string;
};

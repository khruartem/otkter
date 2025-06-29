import { TEmployee, TEmployeesType } from "../../../utils/types";

export type TTeamUIProps = {
  team: TEmployee[];
  type: TEmployeesType;
  teamRef: React.RefObject<HTMLDivElement>;
  // columnsCount: number;
  containerHeight?: string;
};

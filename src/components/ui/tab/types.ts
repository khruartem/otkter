import { TServicesTabMode, TTeamTabMode } from "../../../utils/types";

export type TTabUIProps = {
  tab: TServicesTabMode | TTeamTabMode;
  current: boolean;
  onClick: () => void;
}
import { TServicesTabMode, TTeamTabMode } from "../../../utils/types";

export type TTabUIProps = {
  tab: TServicesTabMode | TTeamTabMode;
  current: boolean;
  onClick: () => void;
  onMouseEnter: (e: React.SyntheticEvent, styleActive: string, styleHover: string) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
}
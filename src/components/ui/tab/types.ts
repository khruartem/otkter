import {
  TProjectTabMode,
  TServicesTabMode,
  TTeamTabMode,
} from "../../../utils/types";

export type TTabUIProps = {
  tab: TServicesTabMode | TTeamTabMode | TProjectTabMode;
  current: boolean;
  isMainPage: boolean;
  onClick: () => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
};

import { TServiceIconRef, TServicesTabMode, TTeamIconRef, TTeamTabMode } from "../../../utils/types"

export type TTabListUIProps = {
  tabs: TServicesTabMode[] | TTeamTabMode[];
  currentTab: TServicesTabMode | TTeamTabMode;
  onTabClick: (tab: TServicesTabMode & TTeamTabMode) => void;
  onMouseEnter: (e: React.SyntheticEvent, styleActive: string, styleHover: string) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
  iconRefs: TServiceIconRef[] | TTeamIconRef[];
}
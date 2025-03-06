import { TServiceIconRef, TServicesTabMode, TTeamIconRef, TTeamTabMode } from "../../../utils/types"

export type TTabListUIProps = {
  tabs: TServicesTabMode[] | TTeamTabMode[];
  currentTab: TServicesTabMode | TTeamTabMode;
  onTabClick: (tab: TServicesTabMode & TTeamTabMode) => void;
  iconRefs: TServiceIconRef[] | TTeamIconRef[];
}
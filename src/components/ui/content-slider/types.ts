import { TServiceIconRef, TServicesTabMode, TTeamIconRef, TTeamTabMode } from "../../../utils/types";

export type TContentSliderUIPros = {
  onTabClick: (tab: TServicesTabMode & TTeamTabMode) => void;
  currentTab: TServicesTabMode | TTeamTabMode;
  tabs: TServicesTabMode[] | TTeamTabMode[];
  onMoveLeft: () => void;
  onMoveRight: () => void;
  iconRefs: TServiceIconRef[] | TTeamIconRef[];
};

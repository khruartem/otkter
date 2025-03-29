import {
  TProjectsIconRef,
  TProjectTabMode,
  TServiceIconRef,
  TServicesTabMode,
  TTeamIconRef,
  TTeamTabMode,
} from "../../../utils/types";

export type TTabListUIProps = {
  tabs: TServicesTabMode[] | TTeamTabMode[] | TProjectTabMode[];
  currentTab: TServicesTabMode | TTeamTabMode | TProjectTabMode;
  onTabClick: (tab: TServicesTabMode & TTeamTabMode & TProjectTabMode) => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
  iconRefs: TServiceIconRef[] | TTeamIconRef[] | TProjectsIconRef[];
  isMainPage: boolean;
};

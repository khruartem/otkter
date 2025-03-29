import {
  TCardType,
  TProjectsIconRef,
  TProjectTabMode,
  TServiceIconRef,
  TServicesTabMode,
  TTeamIconRef,
  TTeamTabMode,
} from "../../../utils/types";

export type TContentSliderUIPros = {
  type: Extract<TCardType, "team" | "services" | "projects">;
  onTabClick: (tab: TServicesTabMode & TTeamTabMode & TProjectTabMode) => void;
  currentTab: TServicesTabMode | TTeamTabMode | TProjectTabMode;
  tabs: TServicesTabMode[] | TTeamTabMode[] | TProjectTabMode[];
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
  iconRefs: TServiceIconRef[] | TTeamIconRef[] | TProjectsIconRef[];
};

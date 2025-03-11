import {
  TCardType,
  TServiceIconRef,
  TServicesTabMode,
  TTeamIconRef,
  TTeamTabMode,
} from "../../../utils/types";

export type TContentSliderUIPros = {
  type: Extract<TCardType, "team" | "services">;
  onTabClick: (tab: TServicesTabMode & TTeamTabMode) => void;
  currentTab: TServicesTabMode | TTeamTabMode;
  tabs: TServicesTabMode[] | TTeamTabMode[];
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
  iconRefs: TServiceIconRef[] | TTeamIconRef[];
};

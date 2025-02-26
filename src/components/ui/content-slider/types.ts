import { TServicesTabMode } from "../../../utils/types";

export type TContentSliderUIPros = {
  onTabClick: (tab: TServicesTabMode) => void;
  currentTab: TServicesTabMode;
  tabs: TServicesTabMode[];
  onMoveLeft: () => void;
  onMoveRight: () => void;
  ref: React.RefObject<HTMLDivElement>;
}
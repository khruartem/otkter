import { TServicesTabMode } from "../../utils/types";

export type TContentSliderProps = {
  onTabClick: (tab: TServicesTabMode) => void;
  currentTab: TServicesTabMode;
}
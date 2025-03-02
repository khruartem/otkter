import { TServiceIconRef, TServicesTabMode } from "../../../utils/types"

export type TTabListUIProps = {
  tabs: TServicesTabMode[];
  currentTab: TServicesTabMode;
  onTabClick: (tab: TServicesTabMode) => void;
  serviceIconRefs: TServiceIconRef[];
}
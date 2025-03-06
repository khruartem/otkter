import { TServicesTabMode } from "../../../utils/types";

export type TTabUIProps = {
  tab: TServicesTabMode;
  current: boolean;
  onClick: () => void;
}
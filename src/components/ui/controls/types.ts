import { TControlsType } from "../../../features/controls/controlsSlice";
import { TControlsItem } from "../../../utils/types";

export type TControlsUIProps = {
  controls: TControlsItem[] | undefined;
  isExtraLink: boolean;
  type: TControlsType;
};

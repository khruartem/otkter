import { TControlsType } from "../../features/controls/controlsSlice";
import { TControlsLocation } from "../../utils/types";

export type TControlsProps = {
  id: number;
  located: TControlsLocation;
  type: TControlsType;
}
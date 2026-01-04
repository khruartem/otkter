import { ReactNode } from "react";
import { TControlsItem, TItemOTKind } from "../../../utils/types/common";

export type TControlsUIProps = {
  controls: TControlsItem[];
  extraInfo?: ReactNode;
  kind: TItemOTKind;
};

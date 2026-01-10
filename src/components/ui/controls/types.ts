import { ReactNode } from "react";
import { TItemOTKind } from "../../../utils/types/item-ot";
import { TControlsItem } from "../../../utils/types/controls";

export type TControlsUIProps = {
  controls: TControlsItem[];
  extraInfo?: ReactNode;
  kind: TItemOTKind;
};

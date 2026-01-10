import { ReactNode } from "react";
import { TItemOTKind } from "../../../utils/types/item-ot";
import { TControlsItem } from "../../../utils/types/controls";

export type TCtaUIProps = {
  controls: TControlsItem[];
  kind: TItemOTKind;
  children: ReactNode;
  className?: string;
};

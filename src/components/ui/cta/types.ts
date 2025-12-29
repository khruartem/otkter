import { ReactNode } from "react";
import { TControlsItem, TItemOTKind } from "../../../utils/types/common";

export type TCtaUIProps = {
  controls: TControlsItem[];
  kind: TItemOTKind;
  children: ReactNode;
  className?: string;
};

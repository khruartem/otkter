import { ReactNode } from "react";
import { TItemOT } from "../../utils/types/common";

export type TInfoRendererProps = {
  currentItem?: TItemOT;
  render: (currentItem: TItemOT) => ReactNode;
};

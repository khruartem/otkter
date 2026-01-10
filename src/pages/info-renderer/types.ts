import { ReactNode } from "react";
import { TItemOT } from "../../utils/types/item-ot";

export type TInfoRendererProps = {
  currentItem?: TItemOT;
  render: (currentItem: TItemOT) => ReactNode;
};

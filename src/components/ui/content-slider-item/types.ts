import { ReactNode } from "react";
import { TItemOTType } from "../../../utils/types/item-ot";

export type TContentSliderItemUIProps = {
  tab: TItemOTType;
  itemViewRef: (node?: Element | null | undefined) => void;
  renderItem: (item: {
    type: TItemOTType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => ReactNode;
  children?: ReactNode;
};

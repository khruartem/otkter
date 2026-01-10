import { SyntheticEvent } from "react";
import { TItemOTType } from "../../../utils/types/item-ot";

export type TContentSliderGridUIProps = {
  tabs: TItemOTType[];
  onScrollItem: (e: SyntheticEvent<Element, Event>) => void;
};

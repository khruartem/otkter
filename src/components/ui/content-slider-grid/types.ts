import { SyntheticEvent } from "react";
import { TItemOTType } from "../../../utils/types/common";

export type TContentSliderGridUIProps = {
  tabs: TItemOTType[];
  onScrollItem: (e: SyntheticEvent<Element, Event>) => void;
};

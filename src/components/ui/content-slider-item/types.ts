import { ReactNode } from "react";
import { TCardType } from "../../../utils/types";
// import { TCardType, TEmployee, TProject, TService } from "../../utils/types";
// import { IContentSliderItem } from "../content-slider/types";

export type TContentSliderItemUIProps = {
  tab: TCardType;
  itemViewRef:(node?: Element | null | undefined) => void; 
  // itemRef: RefObject<HTMLDivElement>;
  renderItem: (item: {
    type: TCardType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => ReactNode;
};

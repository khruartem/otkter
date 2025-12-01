import { ReactNode } from "react";
import { TCardType } from "../../utils/types";
// import { TCardType, TEmployee, TProject, TService } from "../../utils/types";
// import { IContentSliderItem } from "../content-slider/types";

export type TContentSliderItemProps = {
  tab: TCardType;
  // item: TProject | TService | TEmployee;
  index: number;
  currentTab: TCardType;
  currentIndex: number;
  previousIndex: number;
  // current: boolean;
  setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  // renderItem: (item: {
  //   tab: TCardType;
  //   itemRef: React.RefObject<HTMLDivElement>;
  //   itemViewRef: (node?: Element | null | undefined) => void;
  // }) => ReactNode;
  renderItem: (item: {
    type: TCardType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => ReactNode;
};

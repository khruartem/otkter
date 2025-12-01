import { ReactNode, SyntheticEvent } from "react";
// import { TCardType, TSectionType } from "../../../utils/types";
import { TCardType } from "../../../utils/types";
// import { IContentSliderItem } from "../../content-slider/types";

export type TContentSliderGridUIProps = {
  // type: TSectionType;
  tabs: TCardType[];
  // items: TProject[] | TService[] | TEmployee[];
  currentTab: TCardType;
  currentIndex: number;
  previousIndex: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
  // currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  // setPreviousIndex: React.Dispatch<React.SetStateAction<number>>;
  renderItem: (item: {
    type: TCardType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => ReactNode;
  // renderItem: (item: {
  //   item: TProject | TService | TEmployee;
  //   itemRef: React.RefObject<HTMLDivElement>;
  //   itemViewRef: (node?: Element | null | undefined) => void;
  // }) => ReactNode;
  onScrollItem: (e: SyntheticEvent<Element, Event>) => void;
};

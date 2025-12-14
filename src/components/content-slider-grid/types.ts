import { ReactNode } from "react";
import { TCardType } from "../../utils/types";

export type TContentSliderGridProps = {
  tabs: TCardType[];
  currentTab: TCardType;
  currentIndex: number;
  previousIndex: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setPreviousIndex: React.Dispatch<React.SetStateAction<number>>;
  renderItem: (item: {
    type: TCardType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => ReactNode;
};

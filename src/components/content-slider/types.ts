import { ReactNode, SyntheticEvent } from "react";
import { TItemOT, TItemOTType } from "../../utils/types/item-ot";
import { TTabBarCotextValue } from "../tab-bar/types";

export type TContentSliderTabBarProps = Pick<
  TTabBarCotextValue,
  "title" | "relativeToTitle" | "tabsGap" | "renderTab" | "className"
>;

export type TContentSliderProps = {
  tabBarProps: TContentSliderTabBarProps;
  items: TItemOT[];
  firstTab?: TItemOTType;
  lastTab?: TItemOTType;
  children?: ReactNode;
  emptyStateContent?: ReactNode;
  renderItem: (item: {
    type: TItemOTType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => ReactNode;
};

export type TContentSliderContext = {
  tabs: TItemOTType[];
  currentTab: TItemOTType;
  currentIndex: number;
  previousIndex: number;
  emptyStateContent?: ReactNode;
  renderItem: (item: {
    type: TItemOTType;
    itemRef: React.RefObject<HTMLDivElement>;
    itemViewRef: (node?: Element | null | undefined) => void;
  }) => React.ReactNode;
  onScrollItem: (e: SyntheticEvent<Element, Event>) => void;
};

export type TContentSliderPoviderProps = {
  children: ReactNode;
  value: TContentSliderContext;
};

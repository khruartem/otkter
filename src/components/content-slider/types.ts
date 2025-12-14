import { ReactNode, SyntheticEvent } from "react";
import { TItemOTType } from "../../utils/types/common";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TTabBarCotextValue } from "../tab-bar copy/types";
import { TEmployee } from "../../utils/types/team";

export type TContentSliderTabBarProps = Pick<
  TTabBarCotextValue,
  "title" | "relativeToTitle" | "tabsGap" | "renderTab" | "className"
>;

export type TContentSliderProps = {
  tabBarProps: TContentSliderTabBarProps;
  items: TProject[] | TService[] | TEmployee[];
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

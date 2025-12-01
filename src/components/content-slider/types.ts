import { ReactNode } from "react";
import {
  TCardType,
  TProject,
  TService,
  TEmployee
  // TContenSliderPadding,
  // TContenSliderHeaderStyle,
} from "../../utils/types";
// import { TProject } from "../../utils/types/projects";
// import { TService } from "../../utils/types/services";
// import { TEmployee } from "../../utils/types/team";
// import { TTabItemProps } from "../tab-item copy/types";

// export interface IContentSliderItem {
//   type: TCardType;
// }

export type TContentSliderProps = {
  // id?: string;
  items: TProject[] | TService[] | TEmployee[];
  // title?: string;
  firstTab?: TCardType;
  lastTab?: TCardType;
  renderTabBar: (props: {
    baseUrl?: "team/admins" | "projects" | "services";
    items?: TProject[] | TService[] | TEmployee[];
    tabs: TCardType[];
    currentTab: TCardType;
    currentIndex: number;
    previousIndex: number;
    setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    setPreviousIndex: React.Dispatch<React.SetStateAction<number>>;
    // renderTab: (item: {
    //   tab: TCardType;
    //   current: boolean;
    //   iconRef: React.RefObject<HTMLLIElement>;
    //   onClick: () => void;
    // }) => ReactNode;
  }) => ReactNode;
  // renderTab: (item: {
  //   tab: TCardType;
  //   current: boolean;
  //   iconRef: React.RefObject<HTMLLIElement>;
  //   onClick: () => void;
  // }) => ReactNode;
  // renderTab: (
  //   value:
  //     | Pick<TTabItemProps, "current" | "tab">
  //     | {
  //         onClick: () => void;
  //         ref: React.RefObject<HTMLImageElement & HTMLLIElement>;
  //       }
  // ) => ReactNode;
  children?: ReactNode;
  // renderContent: (
  //   currenTab: TCardType,
  //   currentIndex: number,
  //   setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>,
  //   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  // ) => ReactNode;
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
  // padding?: TContenSliderPadding;
  // paddingedTop?: boolean;
  // decorated?: boolean;
  // headerStyle: TContenSliderHeaderStyle;
};

// import { ReactNode } from "react";
// import { TCardType, TTabBarStyle, TTabsGap } from "../../../utils/types";

// export type TTabsProps = {
//   tabs: TCardType[];
//   styleType: TTabBarStyle;
//   title?: string;
//   currentTab: TCardType;
//   setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
//   currentIndex: number;
//   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
//   setPreviousIndex?: React.Dispatch<React.SetStateAction<number>>;
//   onSwitch: (arg: number) => void;
//   renderTab: (item: {
//     tab: TCardType;
//     current: boolean;
//     iconRef: React.RefObject<HTMLLIElement>;
//     onClick: () => void;
//   }) => ReactNode;
//   className?: string;
//   tabsGap: TTabsGap;
// };

import { TTabBarStyle } from "../../../utils/types";

export type TTabsProps = {
  styleType: TTabBarStyle;
  title?: string;
  currentIndex: number;
  onSwitch: (arg: number) => void;
  className?: string;
};

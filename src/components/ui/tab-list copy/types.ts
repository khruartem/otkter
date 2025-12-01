// import { ReactNode } from "react";
// import { TCardType, TTabsGap } from "../../../utils/types";

// export type TTabListUIProps = {
//   tabs: TCardType[];
//   currentTab: TCardType;
//   currentIndex: number;
//   setCurrentTab: React.Dispatch<React.SetStateAction<TCardType>>;
//   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
//   setPreviousIndex?: React.Dispatch<React.SetStateAction<number>>;
//   renderTab: (item: {
//     tab: TCardType;
//     current: boolean;
//     iconRef: React.RefObject<HTMLLIElement>;
//     onClick: () => void;
//   }) => ReactNode;
//   tabsGap: TTabsGap;
// };

import { TEmployee, TTabsGap } from "../../../utils/types";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";

export type TTabListUIProps = {
  tabs: TProject[] | TService[] | TEmployee[];
  tabsGap: TTabsGap;
};

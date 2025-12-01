// import { ReactNode } from "react";
// import { TCardType } from "../../utils/types";

// export type TTabItemProps = {
//   tab: TCardType;
//   index: number;
//   currentTab: TCardType;
//   currentIndex: number;
//   setCurrentTab: (value: React.SetStateAction<TCardType>) => void;
//   setCurrentIndex: (value: React.SetStateAction<number>) => void;
//   setPreviousIndex?: (value: React.SetStateAction<number>) => void;
//   renderTab: (
//     item: {
//       tab: TCardType;
//       current: boolean;
//       iconRef: React.RefObject<HTMLLIElement>;
//       onClick: () => void;
//     }
//   ) => ReactNode;
// };

import { TEmployee } from "../../utils/types";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";

export type TTabItemProps = {
  tab: TProject | TService | TEmployee;
  index: number;
};

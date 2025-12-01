import { ReactNode } from "react";
import { TCardType } from "../../../utils/types";

export type TIconTabUIProps = {
  children: ReactNode;
  // type: TSectionType;
  titled?: boolean;
  tab: TCardType;
  current: boolean;
  // index: number;
  onClick: () => void;
  // isMainPage: boolean;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
};

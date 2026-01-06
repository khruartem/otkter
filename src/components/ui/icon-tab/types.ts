import { ReactNode } from "react";
import { TItemOTType } from "../../../utils/types/item-ot";

export type TIconTabUIProps = {
  children: ReactNode;
  titled?: boolean;
  tab: TItemOTType;
  current: boolean;
  onClick: () => void;
  onMouseEnter: (
    e: React.SyntheticEvent,
    styleActive: string,
    styleHover: string
  ) => void;
  onMouseLeave: (e: React.SyntheticEvent, styleHover: string) => void;
};

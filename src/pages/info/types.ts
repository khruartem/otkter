import { ReactNode } from "react";
import { TItemOT } from "../../utils/types/common";

export type TInfoProps = {
  currentItem: TItemOT;
};

export type TInfoContextValue = {
  currentItem: TItemOT;
  items: TItemOT[];
  currentIndex: number;
};

export type TInfoProviderProps = {
  value: TInfoContextValue;
  children: ReactNode;
};

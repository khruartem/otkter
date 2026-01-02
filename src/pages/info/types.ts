import { ReactNode } from "react";
import { TMerch } from "../../utils/types/merch";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";
import { Colors } from "../../utils/types";

export type TInfoProps = {
  currentItem: TProject | TService | TEmployee | TMerch;
  items: TProject[] | TService[] | TEmployee[] | TMerch[];
};

export type TInfoContextValue = {
  currentItem: TProject | TService | TEmployee | TMerch;
  items: TProject[] | TService[] | TEmployee[] | TMerch[];
  currentIndex: number;
  itemColor: Colors;
};

export type TInfoProviderProps = {
  value: TInfoContextValue;
  children: ReactNode;
};

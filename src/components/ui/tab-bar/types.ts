import { Location } from "react-router-dom";
import {
  TEmployee,
  TProject,
  TSectionType,
  TService,
} from "../../../utils/types";

export type TTabBarUIProps = {
  current: TProject | TService | TEmployee;
  type: TSectionType;
  index: number;
  items: TProject[] | TService[] | TEmployee[];
  onSwitch: (arg: number) => void;
  setCurrentItem: (
    value: React.SetStateAction<TProject | TService | TEmployee>
  ) => void;
  setIndex: (value: React.SetStateAction<number>) => void;
  location?: Location;
};

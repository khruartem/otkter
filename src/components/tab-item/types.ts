import { TEmployee, TProject, TService } from "../../utils/types";

export type TTabItemProps = {
  item: TProject | TService | TEmployee;
  index: number;
  current: boolean;
  setCurrentItem: (
    value: React.SetStateAction<TProject | TService | TEmployee>
  ) => void;
  setIndex: (value: React.SetStateAction<number>) => void;
};

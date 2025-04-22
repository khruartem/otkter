import { TProject, TService } from "../../utils/types";

export type TTabItemProps = {
  item: TProject | TService;
  index: number;
  current: boolean;
  setCurrentItem: (value: React.SetStateAction<TProject | TService>) => void;
  setIndex: (value: React.SetStateAction<number>) => void;
};

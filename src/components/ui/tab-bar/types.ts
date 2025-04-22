import { TProject, TSectionType, TService } from "../../../utils/types";

export type TTabBarUIProps = {
  current: TProject & TService;
  // icons: React.RefObject<HTMLImageElement>[];
  type: TSectionType;
  index: number;
  items: TProject[] | TService[];
  onSwitch: (arg: number) => void;
  setCurrentItem: (value: React.SetStateAction<TProject | TService>) => void;
};

import { TTabBarStyle } from "../../../utils/types";

export type TTabsProps = {
  relativeToTitle: TTabBarStyle;
  title?: string;
  currentIndex: number;
  onSwitch: (arg: number) => void;
  className?: string;
};

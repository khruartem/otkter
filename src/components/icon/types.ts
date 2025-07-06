import { TIconType } from "../../utils/types";
import { TIconsProps } from "../icons/types";

export type TIconProps = {
  type: TIconType;
} & TIconsProps;

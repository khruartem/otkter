import { ReactNode } from "react";
import {
  TSectionContentDirection,
  TSectionDecoration,
  TSectionPadding,
} from "../../utils/types";

export type TSectionProps = {
  id?: string;
  decoration?: TSectionDecoration;
  contentDirection?: TSectionContentDirection;
  padding?: TSectionPadding;
  children: ReactNode;
  className?: string;
  unsetDefaultStyle?: boolean;
};

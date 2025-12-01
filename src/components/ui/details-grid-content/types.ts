import { ReactNode } from "react";
import { TCategoryListUIProps } from "../category-list copy/types";

export type TDetailsGridContentUIProps = {
  categoriesProps: TCategoryListUIProps;
  children: ReactNode;
  className?: string;
};

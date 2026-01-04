import { ReactNode } from "react";
import { TCategoryListUIProps } from "../category-list/types";

export type TDetailsGridContentUIProps = {
  categoriesProps: TCategoryListUIProps;
  children: ReactNode;
  className?: string;
};

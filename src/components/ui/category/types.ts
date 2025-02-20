import { TCategoryColors } from "../../../features/categories/categoriesSlice";
import { TCategory } from "../../../utils/types";

export type TCategoryUIProps = {
  category?: TCategory;
  isAttention?: boolean;
  wrapper?: boolean;
  colors: TCategoryColors | undefined;
}
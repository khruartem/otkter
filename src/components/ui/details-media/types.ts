import { TCategories, TCategoryColors } from "../../../utils/types/categories";
import { TDetails } from "../../../utils/types/details";

export type TDetailsMediaUIProps = {
  details: TDetails[];
  categories: TCategories;
  categoriesColors: TCategoryColors;
};

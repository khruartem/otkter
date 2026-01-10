import { TCategories, TCategoryColors } from "../../../utils/types/categories";
import { TDetails } from "../../../utils/types/details";

export type TDetailsAboutUIProps = {
  details: TDetails[];
  categories: TCategories;
  categoriesColors: TCategoryColors;
};

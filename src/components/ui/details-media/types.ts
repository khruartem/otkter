import { TEmployee } from "../../../utils/types";
import {
  TCategories,
  TCategoryColors,
  TDetails,
  TItemOT,
} from "../../../utils/types/common";

export type TDetailsMediaUIProps = {
  details: TDetails[];
  categories: TCategories;
  categoriesColors: TCategoryColors;
  guardMedia(value: string | string[] | TEmployee | TItemOT): value is TItemOT;
};

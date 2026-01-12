import { TCategories } from "../../utils/types/categories";
import { TDetails } from "../../utils/types/details";
import { TItemOTKind } from "../../utils/types/item-ot";

export type TDetailsGridProps = {
  details: TDetails[];
  categories?: TCategories;
  kind: TItemOTKind;
};

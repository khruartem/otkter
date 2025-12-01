import { TEmployee } from "../../../utils/types";
import {
  TCategories,
  TCategoryColors,
  TDetails,
  TItemOT,
} from "../../../utils/types/common";

export type TDetailsTeamUIProps = {
  detailsAdmins?: TDetails[];
  detailsArtists?: TDetails[];
  categoriesAdmins: TCategories;
  categoriesArtists: TCategories;
  categoriesColors: TCategoryColors;
  guardEmployee(
    value: string | string[] | TEmployee | TItemOT
  ): value is TEmployee;
};

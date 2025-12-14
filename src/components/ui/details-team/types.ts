import {
  TCategories,
  TCategoryColors,
  TDetails,
  TItemOT,
} from "../../../utils/types/common";
import { TEmployee } from "../../../utils/types/team";

export type TDetailsTeamUIProps = {
  detailsAdmins?: TDetails[];
  detailsArtists?: TDetails[];
  categoriesAdmins: TCategories;
  categoriesArtists: TCategories;
  categoriesColors: TCategoryColors;
  guardEmployee(value: string | string[] | TItemOT): value is TEmployee;
};

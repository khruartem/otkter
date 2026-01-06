import { TCategories, TCategoryColors } from "../../../utils/types/categories";
import { TDetails } from "../../../utils/types/details";

export type TDetailsTeamUIProps = {
  detailsAdmins?: TDetails[];
  detailsArtists?: TDetails[];
  categoriesAdmins: TCategories;
  categoriesArtists: TCategories;
  categoriesColors: TCategoryColors;
};

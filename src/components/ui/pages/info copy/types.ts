import { Colors, TEmployee } from "../../../../utils/types";
// import { TPhoto } from "../../../../features/photos/photosSlice";
import { TProject } from "../../../../utils/types/projects";
import { TService } from "../../../../utils/types/services";

export type TInfoUIProps = {
  currentItem: TProject | TService | TEmployee;
  items: TProject[] | TService[] | TEmployee[];
  color: Colors;
};

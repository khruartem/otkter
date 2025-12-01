// import { Colors, TSectionType, TControlsItem } from "../../../utils/types";
// import { TPhoto } from "../../../features/photos/photosSlice";
// import { TProject } from "../../../utils/types/projects";
// import { TEmployee } from "../../../utils/types/team";
// import { TService } from "../../../utils/types/services";
// import { TDetails } from "../../../utils/types/projects";

// export type TInfoProps = {
//   type: TSectionType;
//   currentItem: TProject | TService | TEmployee;
//   items: TProject[] | TService[] | TEmployee[];
//   id: number;
//   title: string;
//   extraTitle?: string;
//   text: string | string[];
//   shortText: string;
//   poster?: string;
//   color: Colors;
//   employees?: TDetails[];
//   controls?: TControlsItem[];
//   photos?: TPhoto[];
//   details?: TDetails[];
//   anchor: boolean;
//   previewImg: string;
//   url: string;
// };

import { TEmployee } from "../../../utils/types";
import { TProject } from "../../../utils/types/projects";
import { TService } from "../../../utils/types/services";

export type TInfoProps = {
  currentItem: TProject | TService | TEmployee;
  items: TProject[] | TService[] | TEmployee[];
};

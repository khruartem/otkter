import { TControlsItem } from "../../../utils/types/common";
import { TShowHistoryItem } from "../../../utils/types/projects";

export type TShowHistoryUIProps = {
  pastShows: TShowHistoryItem[];
  currentShow: TShowHistoryItem;
  controls: TControlsItem[];
};

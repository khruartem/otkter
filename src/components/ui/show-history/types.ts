import { TControlsItem } from "../../../utils/types/controls";
import { TShowHistoryItem } from "../../../utils/types/projects";

export type TShowHistoryUIProps = {
  pastShows: TShowHistoryItem[];
  currentShow: TShowHistoryItem;
  controls: TControlsItem[];
};

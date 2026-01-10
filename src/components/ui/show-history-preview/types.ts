import { TShowHistoryItem } from "../../../utils/types/projects";

export type TShowHistoryPreviewUIProps = {
  history: TShowHistoryItem[];
  current: TShowHistoryItem;
  showModal: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
};

import { TShowHistoryItem } from "../../../utils/types/projects";

export type TShowHistoryItemUIProps = {
  item: TShowHistoryItem;
  current?: boolean;
  className?: string;
  onClick?: () => void;
};

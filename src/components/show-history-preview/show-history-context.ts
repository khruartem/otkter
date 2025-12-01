import { createContext } from "react";
import { TShowHistoryItem } from "../../utils/types/projects";
import { TControlsItem } from "../../utils/types/common";

type TShowHistoryContextValue = {
  history: TShowHistoryItem[];
  controls: TControlsItem[];
};

const defaultValue: TShowHistoryContextValue = {
  history: [],
  controls: [],
};

export const ShowHistoryContext = createContext(defaultValue);

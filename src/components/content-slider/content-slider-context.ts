import { createContext } from "react";
import { TContentSliderContext } from "./types";

const initialValue = {
  tabs: [],
  currentTab: "all",
  currentIndex: 0,
  previousIndex: 0,
  renderItem: () => {},
  onScrollItem: () => {},
};

export const ContentSliderContext = createContext<TContentSliderContext>(
  initialValue as TContentSliderContext
);

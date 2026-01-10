import { createContext } from "react";
import { TInfoContextValue } from "./types";

const initialValue = {
  items: [],
  currentItem: undefined,
  currentIndex: 0,
};

export const InfoContext = createContext<TInfoContextValue>(
  initialValue as unknown as TInfoContextValue
);

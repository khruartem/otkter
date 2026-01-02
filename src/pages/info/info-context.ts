import { createContext } from "react";
import { TInfoContextValue } from "./types";
import { Colors } from "../../utils/types";

const initialValue = {
  items: [],
  currentItem: undefined,
  currentIndex: 0,
  itemColor: Colors.Dark100,
};

export const InfoContext = createContext<TInfoContextValue>(
  initialValue as unknown as TInfoContextValue
);

import { createContext } from "react";
import { Colors, TCard } from "../utils/types";

export interface CardContextValue {
  cards: Partial<TCard[]> | undefined;
  categoryIconColor: Colors | undefined,
  categotyBackgroundColor: Colors | undefined,
  categotyTextColor: Colors | undefined,
}

export const CardContext = createContext<CardContextValue>({
  cards: undefined,
  categoryIconColor: undefined,
  categotyBackgroundColor: undefined,
  categotyTextColor: undefined,
});

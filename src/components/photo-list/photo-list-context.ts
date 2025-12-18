import { createContext } from "react";
import { TPhotoListContextValue } from "./types";

const initialValue: TPhotoListContextValue = {
  itemKind: "projects",
  photos: [],
};

export const PhotoListContext =
  createContext<TPhotoListContextValue>(initialValue);

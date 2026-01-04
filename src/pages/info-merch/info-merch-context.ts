import { createContext } from "react";
import { TInfoMerchContextValue } from "./types";

const initialValue = {
  currentItem: undefined,
};

export const InfoMerchContext = createContext<TInfoMerchContextValue>(
  initialValue as unknown as TInfoMerchContextValue
);

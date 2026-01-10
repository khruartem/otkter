import { createContext } from "react";
import { TPageContextValue } from "./type";

const initialValue = {
  seo: null,
  children: null,
  layout: null,
};

export const PageContext = createContext<TPageContextValue>(
  initialValue as unknown as TPageContextValue
);

import { createContext } from "react";
import { TPaginatorContextValue } from "./types";

const initialValue = {
  paginatorRef: null,
  index: 0,
  length: 0,
};

export const PaginatorContext =
  createContext<TPaginatorContextValue>(initialValue);

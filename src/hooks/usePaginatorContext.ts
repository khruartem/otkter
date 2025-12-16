import { useContext } from "react";
import { PaginatorContext } from "../components/paginator/paginator-context";

export const usePaginatorContext = () => {
  return useContext(PaginatorContext);
};

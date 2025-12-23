import { useContext } from "react";
import { PageContext } from "../components/page/page-context";

export const usePageContext = () => {
  return useContext(PageContext);
};

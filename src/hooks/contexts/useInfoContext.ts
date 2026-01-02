import { useContext } from "react";
import { InfoContext } from "../../pages/info/info-context";

export const useInfoContext = () => {
  return useContext(InfoContext);
};

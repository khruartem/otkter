import { useContext } from "react";
import { InfoMerchContext } from "../../pages/info-merch/info-merch-context";

export const useInfoMerchContext = () => {
  return useContext(InfoMerchContext);
};

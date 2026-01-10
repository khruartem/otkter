import { useContext } from "react";
import { MerchItemContext } from "../../components/merch-item/merch-item-context";

export const useMerchItemCotext = () => {
  return useContext(MerchItemContext);
};

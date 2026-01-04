import { ReactNode } from "react";
import { TMerch } from "../../utils/types/merch";

export type TInfoMerchProps = {
  currentItem: TMerch;
};

export type TInfoMerchContextValue = {
  currentItem: TMerch;
};

export type TInfoMerchProviderProps = {
  value: TInfoMerchContextValue;
  children: ReactNode;
};

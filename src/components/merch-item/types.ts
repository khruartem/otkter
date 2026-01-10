import { ReactNode } from "react";
import { TMerch } from "../../utils/types/merch";

export type TMerchItemProps = {
  item: TMerch;
};

export type TMerchItemProvider = {
  value: TMerch;
  children: ReactNode;
};

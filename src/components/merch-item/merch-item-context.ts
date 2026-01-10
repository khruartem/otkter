import { createContext } from "react";
import { TMerch } from "../../utils/types/merch";

const initialValue = undefined;

export const MerchItemContext = createContext<TMerch>(
  initialValue as unknown as TMerch
);

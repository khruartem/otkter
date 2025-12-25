import { Colors } from "../types";
import { TItemOT, TUrlNotFound } from "./common";

export type TMerchType = "all" | "cloths" | "souvenirs";

export type TMerchSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type TMerchColor = {
  hex: Colors;
  name: string;
};

export type TMerchColors = {
  Navy: TMerchColor;
  Nephritis: TMerchColor;
  Light: TMerchColor;
};

export type TMerchCurrency = "₽";

export type TMerchPrice = {
  value: number;
  currency: TMerchCurrency;
};

export type TMerch = TItemOT & {
  kind: "merch";
  url: string | TUrlNotFound;
  type: TMerchType;
  price: TMerchPrice;
  sizes?: TMerchSize[];
  colors?: TMerchColor[];
};

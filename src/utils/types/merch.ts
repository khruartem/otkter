import { Colors } from "../types";
import { TItemOT, TUrlNotFound } from "./common";

export type TMerchUrl =
  | "regular-t-shirt-light"
  | "regular-t-shirt-navy"
  | "regular-t-shirt-nephritis"
  | "thermos-steel";

export type TMerchType = "all" | "cloths" | "souvenirs";

export type TMerchParams = {
  name: string;
  values: TMerchSize[] | TMerchVolume[];
};

export type TMerchSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type TMerchVolume = "500мл";

export type TMerchColor = {
  hex: Colors;
  name: string;
};

export type TMerchColors = {
  Navy: TMerchColor;
  Nephritis: TMerchColor;
  Light: TMerchColor;
  Steel: TMerchColor;
};

export type TMerchCurrency = "₽";

export type TMerchPrice = {
  value: number;
  currency: TMerchCurrency;
};

export type TMerch = TItemOT & {
  kind: "merch";
  url: TMerchUrl | TUrlNotFound;
  type: TMerchType;
  price: TMerchPrice;
  params: TMerchParams;
  colors?: TMerchColor[];
};

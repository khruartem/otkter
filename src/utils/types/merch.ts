import { Colors } from "../types";
import { TItemOT, TUrlNotFound } from "./common";

export type TMerchKind = "merch";

export type TMerchUrl = "t-shirt-artist" | "thermos";

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
  kind: TMerchKind;
  url: TMerchUrl | TUrlNotFound;
  type: TMerchType;
  price: TMerchPrice;
  params: TMerchParams;
  colors?: TMerchColor[];
};

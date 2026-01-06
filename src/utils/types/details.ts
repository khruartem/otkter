import { TItemOT, TItemOTCard } from "./item-ot";

export type TDetails =
  | TAboutDetails
  | TArtistsDetails
  | TAdminsDetails
  | TMediaDetails;

export type TAboutDetailsValue = string | string[];
export type TAboutDetails = {
  icon: TDetailsIcon;
  type: "about";
  label: string;
  value: TAboutDetailsValue;
};

export type TArtistsDetailsValue = TItemOT;
export type TArtistsDetails = {
  type: "artists";
  value: TArtistsDetailsValue;
};

export type TAdminsDetailsValue = TItemOT;
export type TAdminsDetails = {
  type: "admins";
  value: TAdminsDetailsValue;
};

export type TMediaDetailsValue = TItemOTCard;
export type TMediaDetails = {
  type: "media";
  url: string;
  value: TMediaDetailsValue;
};

export type TDetailsType = "about" | "artists" | "admins" | "media";

export type TDetailsIcon =
  | "organizers"
  | "partners"
  | "date"
  | "address"
  | "price"
  | "contacts";

export type TDetailsValue =
  | TAboutDetailsValue
  | TAdminsDetailsValue
  | TArtistsDetailsValue
  | TMediaDetailsValue;

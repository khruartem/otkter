import { TItemOT, TUrlNotFound } from "./common";

export type TAdminsUrl =
  | "yakovlev"
  | "LA"
  | "sinelnikova"
  | "aspek"
  | "hrustalev";

export type TEmployeeType = "admins" | "artists";

export type TEmployee = TItemOT & {
  kind: "team";
  url: TAdminsUrl | TUrlNotFound;
  type: TEmployeeType;
};

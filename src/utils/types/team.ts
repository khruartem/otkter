import { TItemOT, TUrlNotFound } from "./item-ot";
import { TSocials } from "./socials";

export type TTeamKind = "team";

export type TAdminsUrl =
  | "yakovlev"
  | "LA"
  | "sinelnikova"
  | "aspek"
  | "hrustalev";

export type TEmployeeType = "admins" | "artists";

export type TEmployee = TItemOT & {
  kind: TTeamKind;
  url: TAdminsUrl | TUrlNotFound;
  type: TEmployeeType;
  socials?: TSocials[];
};

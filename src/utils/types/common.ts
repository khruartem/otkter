import { TProjectsUrl, TProjectType } from "./projects";
import { TServicesUrl, TServiceType } from "./services";
import { TAdminsUrl, TEmployee, TEmployeeType } from "./team";
import { Colors } from "../types";
import { TMerchUrl } from "./merch";

export type TSocialsType = "telegram" | "vk";
export type TSocials = {
  id: number;
  url: string;
  type: TSocialsType;
  onClick?: () => void;
};

type TControlsType = "button" | "link";
export type TControlsItem = {
  label: string;
  type: TControlsType;
  onClick: () => void;
  url: string;
  state?: object;
  icon?: string;
};

export type TUrlNotFound = "not-found";
export type TItemOTUrl =
  | TProjectsUrl
  | TServicesUrl
  | TAdminsUrl
  | TMerchUrl
  | TUrlNotFound;

export type TPhoto = {
  id: number;
  source: string;
  icon: string;
};

export type TDetails = {
  icon?: TDetailsIcon;
  type: TDetailsType;
  label?: string;
  value: string | string[] | TEmployee | TItemOT;
  url?: string;
};
export type TDetailsType = "about" | "artists" | "admins" | "media";
export type TDetailsIcon =
  | "organizers"
  | "partners"
  | "date"
  | "address"
  | "price"
  | "contacts";

export type TCategory = {
  icon?: TCategoryIcon;
  text?: string;
};
export type TCategoryColors = {
  icon: Colors;
  background: Colors;
  text: Colors;
};
export type TCategoryIcon =
  | "play"
  | "contest"
  | "master-class"
  | "short-film"
  | "admins"
  | "artists"
  | "info"
  | "circle"
  | "attention";
export type TCategories = {
  attention: boolean;
  categoryList: TCategory[];
};

export type TItemOTKind = "projects" | "services" | "team" | "merch";
export type TItemOTType = TProjectType | TServiceType | TEmployeeType;
export type TItemOT = {
  id: number;
  title: string;
  shortText: string;
  extraText?: string;
  text?: string;
  image: string;
  previewImg?: string;
  icon: string;
  categories?: TCategories;
  poster?: string;
  photos?: TPhoto[];
  details?: TDetails[];
  controls?: TControlsItem[];
  main: boolean;
  active: boolean;
};

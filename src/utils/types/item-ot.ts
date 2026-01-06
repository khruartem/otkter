import { TProjectsKind, TProjectsUrl, TProjectType } from "./projects";
import { TServicesKind, TServicesUrl, TServiceType } from "./services";
import { TAdminsUrl, TEmployeeType, TTeamKind } from "./team";
import { TMerchKind, TMerchType, TMerchUrl } from "./merch";
import { TControlsItem } from "./controls";
import { TPhoto } from "./photo";
import { TDetails } from "./details";
import { TCategories } from "./categories";

export type TUrlNotFound = "not-found";
export type TItemOTUrl =
  | TProjectsUrl
  | TServicesUrl
  | TAdminsUrl
  | TMerchUrl
  | TUrlNotFound;

export type TItemOTKind =
  | TProjectsKind
  | TServicesKind
  | TTeamKind
  | TMerchKind;

export type TItemOTType =
  | TProjectType
  | TServiceType
  | TEmployeeType
  | TMerchType;

export type TItemOT = {
  id: number;
  kind: TItemOTKind;
  url: TItemOTUrl;
  type: TItemOTType;
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

export type TItemOTCard = {
  id: TItemOT["id"];
  title: TItemOT["title"];
  image: TItemOT["image"];
  shortText: TItemOT["shortText"];
  active: TItemOT["active"];
  categories?: TItemOT["categories"];
};

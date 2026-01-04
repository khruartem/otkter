import { TItemOT, TUrlNotFound } from "./common";

export type TServicesKind = "services";

export type TServiceType =
  | "open-sea"
  | "events"
  | "design"
  | "master-class"
  | "content"
  | "lamp"
  | "smm";

export type TServicesUrl = TServiceType;

export type TService = TItemOT & {
  kind: TServicesKind;
  url: TServicesUrl | TUrlNotFound;
  order: number;
  type: TServiceType;
};

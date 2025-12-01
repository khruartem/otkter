import { TItemOT, TUrlNotFound } from "./common";

export type TServicesUrl =
  | "open-sea"
  | "events"
  | "design"
  | "master-class"
  | "content"
  | "lamp"
  | "smm";

export type TServiceType =
  | "all"
  | "main"
  | "open-sea"
  | "events"
  | "design"
  | "master-class"
  | "content"
  | "lamp"
  | "smm";

export type TService = TItemOT & {
  kind: "services";
  url: TServicesUrl | TUrlNotFound;
  type: TServiceType;
};

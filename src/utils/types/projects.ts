import { TItemOT, TUrlNotFound } from "./item-ot";

export type TProjectsKind = "projects";

export type TProjectsUrl =
  | "unique-chronicle"
  | "friendship"
  | "open-play"
  | "mastership"
  | "nikolay"
  | "two-in-world"
  | "esenin"
  | "amplitude"
  | "pegasus";

export type TProjectType =
  | "all"
  | "main"
  | "master-class"
  | "play"
  | "contest"
  | "short-film"
  | "hero";

export type TShowHistoryItem = {
  where: string;
  premiere: boolean;
  current: boolean;
  date: string;
};

export type TProject = TItemOT & {
  kind: TProjectsKind;
  url: TProjectsUrl | TUrlNotFound;
  type: TProjectType;
  order?: number;
  ticket?: string;
  startTs?: string;
  showHistory?: TShowHistoryItem[];
};

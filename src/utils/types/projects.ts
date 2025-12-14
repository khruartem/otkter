import { TItemOT, TUrlNotFound } from "./common";

export type TProjectsUrl =
  | "unique-chronicle"
  | "friendship"
  | "open-play"
  | "mastership"
  | "nikolay"
  | "two-in-world"
  | "esenin"
  | "amplitude";

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
  kind: "projects";
  url: TProjectsUrl | TUrlNotFound;
  type: TProjectType;
  order?: number;
  ticket?: boolean;
  showHistory?: TShowHistoryItem[];
};

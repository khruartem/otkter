import { Colors } from "../types";

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
  | "attention"
  | "alert";

export type TCategories = {
  attention: boolean;
  categoryList: TCategory[];
};

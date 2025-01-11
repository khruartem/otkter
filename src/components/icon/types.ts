import { ElementType } from "react";
import { Colors } from "../../utils/types";

type IconType = Extract<ElementType, "a" | "button">;

export type IconProps = {
  as?: IconType;
  width: number;
  height: number;
  mainColor: Colors;
  icon: string;
  id: string;
  hoverColor: Colors;
  activeColor: Colors;
  url?: string;
  onClick?: undefined | (() => void);
  margin?: string;
  padding?: string;
};

export type SVGProps = Pick<
  IconProps,
  "mainColor" | "width" | "height" | "icon" | "id"
>;

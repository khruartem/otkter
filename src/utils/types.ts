import { ElementType, SyntheticEvent } from "react";

export enum Category {
  PLAY = "Спектакль",
  COMPETITION = "Конкурс",
  MASTER_CLASS = "Мастер класс",
  SHORT_FILM = "Короткий метр",
}

export type TCard = {
  id: number;
  title: string;
  category?: Category[];
  attention?: boolean;
  image: string;
  text: string;
  social?: string;
};

export enum Colors {
  Navy = "#0B3954",
  Nephritis100 = "#2ECC71",
  Nephritis120 = "#21AA58",
  Dark100 = "#4F4F4F",
  Dark80 = "#939393",
  Light100 = "#FFFFFF",
  Light80 = "#F7F7F7",
  Light60 = "#FDFDFD",
  Light30 = "#E6E6E6",
  Light20 = "#BFBFBF",
  None = "transparent",
}

export type FlexDirections = "row" | "column";
export type FlexAligns =
  | "center"
  | "flex-end"
  | "flex-start"
  | "unset"
  | "space-around"
  | "space-between";
export type Borders = "full" | "bottom" | null;
export type Positions = "" | "relative" | "absolute" | "sticky" | "static" | "unset";

export type TRadii = 0 | 40 | 100 | 200 | 400 | 500 | 800 | "none";

export type Fonts = "" | "Unbounded" | "Roboto" | "inherit";
export type textAligns = "center" | "left" | "right";
export type FontSizes = 0 | 14 | 16 | 18 | 20 | 28 | 36 | 56 | 72;
export type FontWeights = 0 | 400 | 500 | 700 | "inherit";
export type lineHeights =
  | 0
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 80
  | 100
  | "inherit";
export type TextTransforms = "uppercase" | "lowcase" | "none";

export type TNavLink = {
  id: number,
  name: string,
  url: string
}
export type TNavLinks = TNavLink[];

export type ApperanceType = {
    mainColor?: Colors,
    hoverColor?: Colors,
    activeColor?: Colors,
    textColor?: Colors,
    disabledColor?: Colors,
    backgroundColor?: Colors;
    backgroundUrl?: string;
}

export type onClickType = (() => void) | ((e: SyntheticEvent) => void) | undefined;

export type BoxModelType = {
  margin?: string;
  padding?: string;
  width?: number | string;
  height?: number | string;
  display?: "inline" | "block" | "inline-block";
}

export type FlexType = {
  flexDirection: FlexDirections;
  alignContent?: FlexAligns;
  justifyContent?: FlexAligns;
  alignItems?: FlexAligns;
  alignSelf?: FlexAligns;
  gap?: string;
}

export type Id = string;

export type PositionType = {
  positon?: Positions
  inset?: number | string;
  left?: number | string;
  top?: number | string;
}

export type BorderType = {
  borderType?: Borders;
  borderRadius?: TRadii;
  borderRadiusTopLeft?: TRadii;
  borderRadiusTopRight?: TRadii;
  borderRadiusBottomLeft?: TRadii;
  borderRadiusBottomRight?: TRadii;
}

export type IconType = {
  as?: Extract<ElementType, "a" | "button">;
  icon: string;
  id: string;
  url?: string;
}

export type LinkType = {
  url: string;
  target?: string;
}

export type FontType = {
  fontFamily?: Fonts;
  textAlign?: textAligns;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  lineHeight?: lineHeights;
  textTransform?: TextTransforms;
  color?: Colors;
  decorated?: boolean;
}

export type SocialTypes = "vk" | "telegram";

export type Social = {
  id: number;
  url: string;
  type: SocialTypes | string;
  icon: string;
}
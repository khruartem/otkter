import { ReactNode } from "react";
import { Colors, Fonts, FontSizes, FontWeights, lineHeights, TextTransforms } from "../../utils/types";

type DisplayType = "inline" | "block" | "inline-block";

export type LinkProps = {
  children: ReactNode;
  display?: DisplayType;
  url: string;
  target?: string;
  mainColor?: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
  fontFamily?: Fonts;
  fontSize: FontSizes;
  fontWeight: FontWeights;
  lineHeight: lineHeights;
  textTransform?: TextTransforms;
  margin?: string;
  padding?: string;
  onClick?: (() => void) | undefined;
}
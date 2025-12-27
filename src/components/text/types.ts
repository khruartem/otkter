import { ReactNode, ElementType } from "react";
import {
  Colors,
  Fonts,
  FontSizes,
  FontWeights,
  lineHeights,
  textAligns,
  TextTransforms,
} from "../../utils/types";

export type TextProps = {
  children: ReactNode;
  as?: ElementType;
  fontFamily: Fonts;
  textAlign: textAligns;
  fontSize: FontSizes | string;
  fontWeight: FontWeights;
  lineHeight: lineHeights | string;
  textTransform: TextTransforms;
  color: Colors;
  decorated?: boolean;
  margin?: string;
  padding?: string;
  width?: number | string;
  className?: string;
};

import { ReactNode, ElementType } from "react";
import { Colors, TRadii } from "../../utils/types";

type FlexDirections = "row" | "column";
type FlexAligns =
  | "center"
  | "flex-end"
  | "flex-start"
  | "unset"
  | "space-around"
  | "space-between";
type BorderType = "full" | "bottom" | null;
type Positions = "" | "relative" | "absolute" | "sticky" | "static" | "unset";

export type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  flexDirection: FlexDirections;
  alignContent?: FlexAligns;
  justifyContent?: FlexAligns;
  alignItems?: FlexAligns;
  alignSelf?: FlexAligns;
  backgroundColor?: Colors;
  bordered?: BorderType;
  borderRadius?: TRadii;
  padding?: string;
  margin?: string;
  gap?: string;
  id?: string;
  position?: Positions;
  inset?: null| number | string;
  width?: string;
  height?: string;
  withOverlay?: boolean;
  zIndex?: number | undefined;
};

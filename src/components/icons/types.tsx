import { Colors } from "../../utils/types";

export type TIconsProps = {
  mainColor: Colors;
  extraColor: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
  onClick?: (() => void) | undefined;
  width: number;
  height: number;
  className?: string;
};

export type TLogoProps = Pick<
  TIconsProps,
  "mainColor" | "width" | "height" | "extraColor"
>;
export type TNavProps = Pick<TIconsProps, "onClick">;
export type TModalsProps = Pick<TIconsProps, "mainColor">;
export type TCategotyProps = Pick<TIconsProps, "mainColor">;
export type TArrowProps = Pick<
  TIconsProps,
  "mainColor" | "hoverColor" | "activeColor" | "className" | "onClick"
>;
export type TEventsProps = Pick<TIconsProps, "mainColor">;
export type TServicesProps = Pick<
TIconsProps,
"mainColor" | "hoverColor" | "activeColor" | "className" | "onClick"
>;

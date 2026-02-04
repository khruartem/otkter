import { SyntheticEvent } from "react";
import { Colors } from "../../utils/types";

export type TIconsProps = {
  mainColor: Colors;
  extraColor: Colors;
  hoverColor?: Colors | string;
  activeColor?: Colors;
  onClick?: () => void;
  onMouseEnter?: ((e: SyntheticEvent) => void) | undefined;
  onMouseLeave?: ((e: SyntheticEvent) => void) | undefined;
  width: number;
  height: number;
  className?: string;
  url?: string;
  iconType?: "tab" | "category";
};

export type TLogoProps = Pick<
  TIconsProps,
  "mainColor" | "width" | "height" | "extraColor" | "onClick" | "className"
>;
export type TSocialProps = Pick<
  TIconsProps,
  "mainColor" | "hoverColor" | "activeColor" | "onClick"
>;
export type TNavProps = Pick<TIconsProps, "onClick">;
export type TModalsProps = Pick<TIconsProps, "mainColor">;
export type TArrowProps = Pick<
  TIconsProps,
  "mainColor" | "hoverColor" | "activeColor" | "className" | "onClick"
>;
export type TCopyLinkProps = Pick<
  TIconsProps,
  "mainColor" | "hoverColor" | "activeColor" | "className" | "onClick"
>;
export type TEventsProps = Pick<TIconsProps, "mainColor">;
export type TTabProps = Pick<
  TIconsProps,
  | "mainColor"
  | "hoverColor"
  | "activeColor"
  | "className"
  | "onClick"
  | "onMouseEnter"
  | "onMouseLeave"
  | "iconType"
>;
export type TCategotyProps = TTabProps &
  Partial<Pick<TIconsProps, "extraColor">>;
export type TErrorProps = Pick<TIconsProps, "className">;
export type TTicketProps = Pick<TIconsProps, "mainColor" | "onClick">;
export type TAlertProps = Pick<TIconsProps, "mainColor" | "className">;

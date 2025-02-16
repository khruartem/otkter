import { Colors } from "../../utils/types"

export type TIconsProps = {
  mainColor: Colors;
  extraColor: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
  onClick?: (() => void) | undefined;
  width: number;
  height: number;
}

export type TLogoProps = Pick<TIconsProps, "mainColor" | "width" | "height" | "extraColor">;
export type TNavProps = Pick<TIconsProps, "onClick">;
export type TCategotyProps = Pick<TIconsProps, "mainColor">;
export type TArrowProps = Pick<TIconsProps, "mainColor">;
export type TEventsProps = Pick<TIconsProps, "mainColor">;
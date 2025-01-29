import { Colors } from "../../utils/types"

export type IconsProps = {
  mainColor: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
  onClick?: (() => void) | undefined;
  width: number;
  height: number;
}

export type LogoProps = Pick<IconsProps, "mainColor" | "width" | "height">;
export type NavProps = Pick<IconsProps, "onClick">;
export type CategotyProps = Pick<IconsProps, "mainColor">;
export type ArrowProps = Pick<IconsProps, "mainColor">;
import { Colors, TRadii } from "../../utils/types";

export type TDecorImageProps = {
  height: string;
  width: string;
  backgroundColor?: Colors;
  backgroundUrl?: string;
  borderRadiusTopLeft?: TRadii;
  borderRadiusTopRight?: TRadii;
  borderRadiusBottomLeft?: TRadii;
  borderRadiusBottomRight?: TRadii;
  borderRadius?: TRadii;
  type: "orb" | "oval"
}
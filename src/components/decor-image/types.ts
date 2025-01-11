import { Colors, TRadii } from "../../utils/types";

export type TDecorImageProps = {
  height: string | number;
  width: string | number;
  backgroundColor?: Colors;
  backgroundUrl?: string;
  borderRadiusTopLeft?: TRadii;
  borderRadiusTopRight?: TRadii;
  borderRadiusBottomLeft?: TRadii;
  borderRadiusBottomRight?: TRadii;
  borderRadius?: TRadii
}
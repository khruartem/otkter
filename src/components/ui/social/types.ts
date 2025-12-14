import { Colors } from "../../../utils/types";
import { TSocials } from "../../../utils/types/common";

export type TSocialProps = {
  socials: TSocials[];
  color?: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
};

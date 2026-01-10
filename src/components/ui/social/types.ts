import { Colors } from "../../../utils/types";
import { TSocials } from "../../../utils/types/socials";

export type TSocialProps = {
  socials: TSocials[];
  color?: Colors;
  hoverColor?: Colors;
  activeColor?: Colors;
};

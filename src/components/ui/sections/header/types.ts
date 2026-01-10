// import { Location } from "react-router-dom";
import { THeaderAnimation } from "../../../../sections/header/types";

export type THeaderUIProps = {
  onClickLogo: () => void;
  url: string;
  headerRef?: React.RefObject<HTMLHeadingElement>;
  // animated?: boolean;
  // setAnimated?: (value: React.SetStateAction<boolean>) => void;
  animation?: THeaderAnimation;
  // location?: Location;
};

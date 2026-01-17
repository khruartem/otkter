import { THeaderAnimation } from "../../../../sections/header/types";

export type THeaderUIProps = {
  onClickLogo: () => void;
  url: string;
  animation?: THeaderAnimation;
};

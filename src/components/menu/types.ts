import { THeaderAnimation } from "../../sections/header/types";

export type TMenuProps = {
  rootRef?: React.RefObject<HTMLDivElement>;
  headerRef?: React.RefObject<HTMLHeadingElement> & React.ForwardedRef<HTMLHeadingElement>;
  headerAnimation?: THeaderAnimation;
}
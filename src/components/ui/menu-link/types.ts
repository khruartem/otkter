import { TNavLink } from "../../../utils/types";

export type TMenuLinkUIProps = {
  openNewTab: boolean;
  link: TNavLink;
  onClick?: () => void;
}
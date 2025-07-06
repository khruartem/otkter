import { Location } from "react-router-dom";
import { TNavLink } from "../../../utils/types";

export type TMenuLinkUIProps = {
  openNewTab: boolean;
  link: TNavLink;
  onClick?: () => void;
  location?: Location;
}
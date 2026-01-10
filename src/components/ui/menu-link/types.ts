import { Location } from "react-router-dom";
import { TNavLink } from "../../../utils/types";
import { CSSProperties } from "react";

export type TMenuLinkUIProps = {
  id?: string;
  openNewTab?: boolean;
  link: TNavLink;
  onClick?: () => void;
  location?: Location;
  className?: string;
  style?: CSSProperties;
};

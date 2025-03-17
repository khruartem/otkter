import { FC } from "react";
import { useLocation } from "react-router-dom";

import { MenuLinkUI } from "../ui/menu-link";

import { TMenuLinkProps } from "./types";

export const MenuLink: FC<TMenuLinkProps> = ({ link, onClick }) => {
  const { pathname } = useLocation();
  const isMain = pathname === "/otkter/";

  return <MenuLinkUI openNewTab={!isMain} link={link} onClick={onClick} />;
};

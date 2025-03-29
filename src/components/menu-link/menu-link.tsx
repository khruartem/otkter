import { FC } from "react";

import { MenuLinkUI } from "../ui/menu-link";

import { TMenuLinkProps } from "./types";
import { useGetIsMainPage } from "../../hooks/useGetIsMainPage";

export const MenuLink: FC<TMenuLinkProps> = ({ link, onClick }) => {
  const isMain = useGetIsMainPage();

  return <MenuLinkUI openNewTab={!isMain} link={link} onClick={onClick} />;
};

import { FC } from "react";
import { useLocation } from "react-router-dom";

import { MenuLinkUI } from "../ui/menu-link";

import { TMenuLinkProps } from "./types";
import { useGetIsMainPage } from "../../hooks/useGetIsMainPage";

export const MenuLink: FC<TMenuLinkProps> = ({ link, onClick }) => {
  const isMain = useGetIsMainPage();
  const location = useLocation();

  return (
    <MenuLinkUI
      openNewTab={!isMain}
      link={link}
      onClick={onClick}
      location={location}
    />
  );
};

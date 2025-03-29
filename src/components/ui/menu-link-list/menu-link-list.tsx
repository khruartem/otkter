import { FC } from "react";
import clsx from "clsx";

import { MenuLink } from "../../menu-link";

import { TMenuLinkListUI } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./menu-link-list.module.css";

export const MenuLinkListUI: FC<TMenuLinkListUI> = ({ links, onClick }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  return (
    <ul
      className={clsx(
        styles["menu__link-list"],
        largeResolution && styles["menu__link-list_rowed"],
        smallResolution && styles["menu__link-list_columed"],
        isLarge && styles["menu__link-list_large-screen"],
        isDesktop && styles["menu__link-list_desktop"],
        isLaptop && styles["menu__link-list_laptop"],
        isTablet && styles["menu__link-list_tablet"],
        isMobile && styles["menu__link-list_mobile"]
      )}
    >
      {links.map(link => {
        return (
          <li key={link.id}>
            <MenuLink link={link} onClick={onClick} />
          </li>
        );
      })}
    </ul>
  );
};

import { FC } from "react";
//import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { TMenuLinkUIProps } from "./types";

import styles from "./menu-link.module.css";
import clsx from "clsx";

export const MenuLinkUI: FC<TMenuLinkUIProps> = ({
  openNewTab,
  link,
  onClick,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  const { name, url } = link;

  return (
    <HashLink
      to={openNewTab ? `/${url}` : url}
      // smooth
      // target={openNewTab ? "_blank" : undefined}
      scroll={(el) => {
        el.scrollIntoView({
          block: "start",
          behavior: openNewTab ? "instant" : "smooth"
        });
      }}
      className={clsx(
        styles["menu__link"],
        largeResolution && styles["menu__link_large-resolution"],
        smallResolution && styles["menu__link_small-resolution"]
      )}
      onClick={onClick}
    >
      {name}
    </HashLink>
  );
};

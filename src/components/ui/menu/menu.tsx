import { FC } from "react";
import clsx from "clsx";

import { CloseNav, OpenNav } from "../../icons";
import { MenuLinkListUI } from "../menu-link-list";
import { MainSocial } from "../../main-social";

import { TMenuUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import { navLinks } from "../../../utils/constants";

import styles from "./menu.module.css";

export const MenuUI: FC<TMenuUIProps> = ({
  isOpen,
  onOpen,
  onClose,
  onClickLink,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  return (
    <>
      {largeResolution && (
        <nav
          className={clsx(
            styles["menu"],
            styles["menu_rowed"],
            isLarge && styles["menu_large-screen"],
            isDesktop && styles["menu_desktop"]
          )}
        >
          <MenuLinkListUI links={navLinks} />
        </nav>
      )}
      {smallResolution && (
        <div className={styles["menu-mobile-container"]}>
          {!isOpen ? (
            <OpenNav onClick={onOpen} />
          ) : (
            <CloseNav onClick={onClose} />
          )}
          <nav
            className={clsx(
              styles["menu"],
              styles["menu_columed"],
              isOpen && [styles["menu_opened"], styles["menu_opened_mobile"]],
              styles["menu_colored"],
              styles["menu_bordered"],
              isLaptop && styles["menu_laptop"],
              isTablet && styles["menu_tablet"],
              isMobile && styles["menu_mobile"]
            )}
          >
            <MenuLinkListUI links={navLinks} onClick={onClickLink} />
            {isMobile && <MainSocial />}
          </nav>
        </div>
      )}
    </>
  );
};

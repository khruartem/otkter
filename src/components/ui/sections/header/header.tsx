import clsx from "clsx";
import { FC, useRef } from "react";

import { Logo } from "../../../../components/icons";
import { Menu } from "../../../../components/menu/menu";
import { MainSocial } from "../../../../components/main-social";

import { THeaderUIProps } from "./types";
import { Colors } from "../../../../utils/types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./header.module.css";
import { HashLink } from "react-router-hash-link";

export const HeaderUI: FC<THeaderUIProps> = ({ url, headerRef, onClickLogo }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <header
      className={clsx(
        styles.header,
        largeResolution && [
          styles["header_not-colored"],
          styles["header_rounded"],
        ],
        smallResolution && [
          styles["header_colored"],
          styles["header_not-rounded"],
        ]
      )}
      ref={headerRef}
    >
      <div
        className={clsx(
          styles.header__wrapper,
          isMobile && styles.header__wrapper_mobile
        )}
      >
        <HashLink
          to={url}
          scroll={(el) => {
            el.scrollIntoView({
              block: "start",
              behavior: "instant",
            });
          }}
          onClick={onClickLogo}
        >
          <Logo
            mainColor={Colors.Navy}
            extraColor={Colors.Nephritis100}
            width={isMobile ? 192 : 236}
            height={isMobile ? 32 : 40}
            className={styles.logo}
          />
        </HashLink>
        {!isMobile ? (
          <div
            className={clsx(
              styles.header__navigation,
              (isLaptop || isTablet) &&
                styles["header__navigation_small-resolution"],
              isLaptop && styles.header__navigation_laptop,
              isTablet && styles.header__navigation_tablet
            )}
          >
            <Menu
              rootRef={smallResolution ? rootRef : undefined}
              headerRef={smallResolution ? headerRef : undefined}
            />
            {!isMobile && <MainSocial />}
          </div>
        ) : (
          <Menu rootRef={rootRef} headerRef={headerRef} />
        )}
      </div>
      {smallResolution && (
        <div
          ref={rootRef}
          id="react-navigation"
          className={styles["react-navigation"]}
        ></div>
      )}
    </header>
  );
};

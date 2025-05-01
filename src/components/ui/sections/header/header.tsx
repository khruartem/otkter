import clsx from "clsx";
import { FC, useRef } from "react";

import { Logo } from "../../../../components/icons";
import { Menu } from "../../../../components/menu/menu";
import { MainSocial } from "../../../../components/main-social";

import { THeaderUIProps } from "./types";
import { Colors } from "../../../../utils/types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./header.module.css";

export const HeaderUI: FC<THeaderUIProps> = ({ onClickLogo, headerRef }) => {
  const { isLaptop, isTablet, isMobile } = useGetMediaQuery();
  const smallResolution = isLaptop || isTablet || isMobile;

  const rootRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header
        className={styles.header}
        ref={headerRef}
      >
        <div
          className={clsx(
            styles.header__wrapper,
            isMobile && styles.header__wrapper_mobile
          )}
        >
          <Logo
            mainColor={Colors.Navy}
            extraColor={Colors.Nephritis100}
            width={isMobile ? 192 : 236}
            height={isMobile ? 32 : 40}
            onClick={onClickLogo}
            className={styles.logo}
          />
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
              <Menu rootRef={smallResolution ? rootRef : undefined} headerRef={smallResolution ? headerRef : undefined} />
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
    </>
  );
};

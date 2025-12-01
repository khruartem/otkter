import clsx from "clsx";
import { FC, useRef } from "react";
import { HashLink } from "react-router-hash-link";

import { Logo } from "../../../../components/icons";
import { Menu } from "../../../../components/menu/menu";
import { MainSocial } from "../../../../components/main-social";

import { THeaderUIProps } from "./types";
import { Colors } from "../../../../utils/types";
import { THeaderAnimation } from "../../../../sections/header/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./header.module.css";

export const HeaderUI: FC<THeaderUIProps> = ({
  url,
  animation,
  headerRef,
  onClickLogo,
}) => {
  const { isLaptop, isTablet, isMobile } = useGetMediaQuery();
  const smallResolution = isLaptop || isTablet || isMobile;

  const rootRef = useRef<HTMLDivElement>(null);

  const setColor = (
    animation?: THeaderAnimation,
    colorFrom?: Colors,
    colorTo?: Colors
  ) => {
    return animation ? (animation.animated ? colorFrom : colorTo) : colorFrom;
  };

  return (
    <header
      className={clsx(
        styles.header,
        // animation
        // ? animation.animated && styles.header_animated
        // : styles.header_colored,
        animation && !animation.animated && styles.header_colored,
        isMobile && styles.header_mobile
      )}
      ref={headerRef}
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
        // state={location?.state}
      >
        <Logo
          mainColor={Colors.Navy}
          extraColor={
            setColor(animation, Colors.Nephritis100, Colors.Light100) ||
            Colors.Nephritis100
          }
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
            headerAnimation={animation}
          />
          {!isMobile && (
            <MainSocial
              color={setColor(animation, undefined, Colors.Navy)}
              activeColor={setColor(animation, undefined, Colors.Navy)}
              hoverColor={setColor(animation, undefined, Colors.Navy)}
            />
          )}
        </div>
      ) : (
        <Menu
          rootRef={rootRef}
          headerRef={headerRef}
          headerAnimation={animation}
        />
      )}
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

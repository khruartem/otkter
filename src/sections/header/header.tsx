import clsx from "clsx";
import { useRef, useState } from "react";

import { Logo } from "../../components/icons";
import { NavBar } from "../../components/navbar";
import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";
import { Colors } from "../../utils/types";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";
import { Social } from "../../components/social";

import styles from "./header.module.css";
import { Link } from "react-router-dom";
//import { socials } from "../../utils/constants";

export const Header = () => {
  return (
    <>
      <LargeResolution />
      <SmallResolution />
    </>
  );
};

const LargeResolution = () => {
  const isLarge = useLargeScreenMediaQuery();
  const isDesktop = useDesktopMediaQuery();

  return isLarge || isDesktop ? (
    <header className={styles.header}>
      <Link to="/otkter">
        <Logo
          mainColor={Colors.Navy}
          extraColor={Colors.Nephritis100}
          width={236}
          height={40}
        />
      </Link>
      <NavBar />
      <Social />
    </header>
  ) : null;
};

const SmallResolution = () => {
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  const [isOpen, setOpen] = useState(false);
  const rootRef = useRef(null);

  return isLaptop || isTablet || isMobile ? (
    <>
      <header
        className={clsx(
          styles.header,
          isMobile && styles.header_mobile,
          isOpen && styles.header_overlayed,
          isOpen && styles.header_bordered
        )}
      >
        <Link to="/otkter">
          <Logo
            mainColor={Colors.Navy}
            extraColor={Colors.Nephritis100}
            width={isMobile ? 192 : 236}
            height={isMobile ? 32 : 40}
          />
        </Link>
        {!isMobile ? (
          <div
            className={clsx(
              styles.header__icons,
              isLaptop && styles.header__icons_laptop,
              isTablet && styles.header__icons_tablet
            )}
          >
            <Social />
            <NavBar isOpen={isOpen} onOpen={setOpen} rootRef={rootRef} />
          </div>
        ) : (
          <NavBar isOpen={isOpen} onOpen={setOpen} rootRef={rootRef} />
        )}
      </header>
      <div ref={rootRef} id="react-navigation"></div>
    </>
  ) : null;
};

import clsx from "clsx";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../components/icons";
import { Menu } from "../../components/menu/menu";
import { MainSocial } from "../../components/main-social";

import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";
import { Colors } from "../../utils/types";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";

import styles from "./header.module.css";

export const HeaderOLD = () => {
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
      <Link to="/#projects-7">
        <Logo
          mainColor={Colors.Navy}
          extraColor={Colors.Nephritis100}
          width={236}
          height={40}
        />
      </Link>
      <Menu />
      <MainSocial />
    </header>
  ) : null;
};

const SmallResolution = () => {
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  //const [isOpen, setOpen] = useState(false);
  const rootRef = useRef(null);

  return isLaptop || isTablet || isMobile ? (
    <>
      <header
        className={clsx(
          styles.header,
          isMobile && styles.header_mobile,
        )}
      >
        <Link to="/#projects-5">
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
            <MainSocial />
            <Menu rootRef={rootRef}/>
          </div>
        ) : (
          <Menu rootRef={rootRef}/>
        )}
      </header>
      <div ref={rootRef} id="react-navigation"></div>
    </>
  ) : null;
};
/* eslint-disable @typescript-eslint/no-unused-expressions */
import clsx from "clsx";

import { Link } from "../link";
import { Icon } from "../icon";
import { navLinks, socials } from "../../utils/constants";
import { NavBarProps } from "./types";
import { Social } from "../social";
import { Colors } from "../../utils/types";

import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";
import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";

import styles from "./navbar.module.css";

import menuSVG from "../../assets/menu.svg";
import closeSVG from "../../assets/close.svg";
import ReactDOM from "react-dom";

export const NavBar = ({ isOpen, onOpen, rootRef }: NavBarProps) => {
  return (
    <>
      <LargeResolution />
      <SmallResolution isOpen={isOpen} onOpen={onOpen} rootRef={rootRef} />
    </>
  );
};

const LargeResolution = () => {
  const isLarge = useLargeScreenMediaQuery();
  const isDesktop = useDesktopMediaQuery();

  return isLarge || isDesktop ? (
    <nav
      className={clsx(
        styles["navigation-bar"],
        styles["navigation-bar_rowed"],
        isLarge && styles["navigation-bar_large-screen"],
        isDesktop && styles["navigation-bar_desktop"]
      )}
    >
      <ul
        className={clsx(
          styles["navigation-bar__link-list"],
          styles["navigation-bar__link-list_rowed"],
          isLarge && styles["navigation-bar__link-list_large-screen"],
          isDesktop && styles["navigation-bar__link-list_desktop"]
        )}
      >
        {navLinks.map(({ id, name, url }) => {
          return (
            <li key={id}>
              <Link
                key={id}
                url={url}
                fontFamily="Unbounded"
                fontSize={14}
                fontWeight={400}
                lineHeight={20}
                mainColor={Colors.Navy}
                hoverColor={Colors.Navy}
                activeColor={Colors.Nephritis100}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
};

const SmallResolution = ({
  isOpen = undefined,
  onOpen = undefined,
  rootRef = undefined,
}: NavBarProps) => {
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  return isLaptop || isTablet || isMobile ? (
    <>
      <Icon
        as="button"
        icon={clsx(
          isOpen && closeSVG,
          !isOpen && isOpen !== undefined && menuSVG,
          isOpen === undefined && ""
        )}
        id={isOpen ? "close" : "menu"}
        width={32}
        height={32}
        mainColor={Colors.Navy}
        hoverColor={Colors.Nephritis120}
        activeColor={Colors.None}
        onClick={
          onOpen &&
          (() => {
            isOpen
              ? (document.body.style.position = "")
              : (document.body.style.position = "fixed");
            onOpen(!isOpen);
          })
        }
        margin={isOpen && isMobile ? "" : "5px 0 0 0"}
      />
      {isOpen &&
        ReactDOM.createPortal(
          <nav
            className={clsx(
              styles["navigation-bar"],
              styles["navigation-bar_columed"],
              styles["navigation-bar_colored"],
              styles["navigation-bar_bordered"],
              isLaptop && styles["navigation-bar_laptop"],
              isTablet && styles["navigation-bar_tablet"],
              isMobile && styles["navigation-bar_mobile"]
            )}
          >
            <ul
              className={clsx(
                styles["navigation-bar__link-list"],
                styles["navigation-bar__link-list_columed"],
                isLaptop && styles["navigation-bar__link-list_laptop"],
                isTablet && styles["navigation-bar__link-list_tablet"],
                isMobile && styles["navigation-bar__link-list_mobile"]
              )}
            >
              {navLinks.map(({ id, name, url }) => {
                return (
                  <li key={id}>
                    <Link
                      url={url}
                      fontFamily="Unbounded"
                      fontSize={20}
                      fontWeight={500}
                      lineHeight={32}
                      mainColor={Colors.Navy}
                      hoverColor={Colors.Navy}
                      activeColor={Colors.Nephritis100}
                      padding="14px 0"
                      onClick={
                        onOpen &&
                        (() => {
                          isOpen
                            ? (document.body.style.position = "")
                            : (document.body.style.position = "fixed");
                          onOpen(!isOpen);
                        })
                      }
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {isMobile && <Social socials={socials} />}
          </nav>,
          rootRef!.current!
        )}
    </>
  ) : null;
};

/*import clsx from "clsx";

import { Link } from "../link";
import { Icon } from "../icon";

import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";
import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";

import { navLinks } from "../../utils/constants";
import { Colors } from "../../utils/types";
import { NavBarProps } from "./types";

import styles from "./navbar.module.css";

import menuSVG from "../../assets/menu.svg";
import closeSVG from "../../assets/close.svg";
import telegramSVG from "../../assets/telegram.svg";
import vkSVG from "../../assets/vk.svg";
import ReactDOM from "react-dom";

const navigationRoot = document.getElementById("react-navigation")

export const NavBar = ({ isOpen, onOpen }: NavBarProps) => {
  const isLarge = useLargeScreenMediaQuery();
  const isDesktop = useDesktopMediaQuery();
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();
  
  return ReactDOM.createPortal((
    <>
      <nav
      className={clsx(
        styles["navigation-bar"],
        {
          [styles["navigation-bar_rowed"]]: isLarge || isDesktop,
          [styles["navigation-bar_large-screen"]]: isLarge,
          [styles["navigation-bar_desktop"]]: isDesktop,
          [styles["navigation-bar_columed"]]: isLaptop || isTablet || isMobile,
          [styles["navigation-bar_positioned"]]: isLaptop || isTablet || isMobile,
          [styles["navigation-bar_colored"]]: isLaptop || isTablet || isMobile,
          [styles["navigation-bar_bordered"]]: isLaptop || isTablet || isMobile,
          [styles["navigation-bar_laptop"]]: isLaptop,
          [styles["navigation-bar_tablet"]]: isTablet,
          [styles["navigation-bar_mobile"]]: isMobile,
          [styles["navigation-bar_without-social"]]: isLaptop || isTablet,
          [styles["navigation-bar_with-social"]]: isMobile,
        }
      )}
    >
      {(isLarge || isDesktop) && navLinks.map(({ id, name, url }) => {
        return (
          <Link
            key={id}
            url={url}
            fontFamily="Unbounded"
            fontSize={14}
            fontWeight={400}
            lineHeight={20}
            mainColor={Colors.Navy}
            hoverColor={Colors.Navy}
            activeColor={Colors.Nephritis100}
            padding={clsx({
              "0.5vw 0 1.04vw": isLarge,
              "0.7vw 0 1.46vw": isDesktop,
            })}
          >
            {name}
          </Link>
        );
      })}
      {}
    </nav>
    </>
  ), navigationRoot!);
};

const LargeResolution = () => {
  const isLarge = useLargeScreenMediaQuery();
  const isDesktop = useDesktopMediaQuery();

  return isLarge || isDesktop ? (
    <nav
      className={clsx(
        styles["navigation-bar"],
        {
          [styles["navigation-bar_rowed"]]: isLarge || isDesktop
          [styles["navigation-bar_large-screen"]]: isLarge,
          [styles["navigation-bar_desktop"]]: isDesktop,
        }
      )}
    >
      {navLinks.map(({ id, name, url }) => {
        return (
          <Link
            key={id}
            url={url}
            fontFamily="Unbounded"
            fontSize={14}
            fontWeight={400}
            lineHeight={20}
            mainColor={Colors.Navy}
            hoverColor={Colors.Navy}
            activeColor={Colors.Nephritis100}
            padding={clsx({
              "0.5vw 0 1.04vw": isLarge,
              "0.7vw 0 1.46vw": isDesktop,
            })}
          >
            {name}
          </Link>
        );
      })}
    </nav>
  ) : null;
};

const SmallResolution = ({
  isOpen = undefined,
  onOpen = undefined,
}: NavBarProps) => {
  const isLaptop = useLaptopMediaQuery();
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  return isLaptop || isTablet || isMobile ? (
    <>
      <Icon
        as="button"
        icon={clsx(
          isOpen && closeSVG,
          !isOpen && isOpen !== undefined && menuSVG,
          isOpen === undefined && ""
        )}
        id={isOpen ? "close" : "menu"}
        width={32}
        height={32}
        mainColor={Colors.Navy}
        hoverColor={Colors.Nephritis120}
        activeColor={Colors.None}
        onClick={onOpen && (() => onOpen(!isOpen))}
        margin={isOpen && isMobile ? "" : "5px 0 0 0"}
      />
      {isOpen && (
        <nav
          className={clsx(
            styles["navigation-bar"],
            styles["navigation-bar_columed"],
            styles["navigation-bar_positioned"],
            styles["navigation-bar_colored"],
            styles["navigation-bar_bordered"],
            {
              [styles["navigation-bar_laptop"]]: isLaptop,
              [styles["navigation-bar_tablet"]]: isTablet,
              [styles["navigation-bar_mobile"]]: isMobile,
              [styles["navigation-bar_without-social"]]: isLaptop || isTablet,
              [styles["navigation-bar_with-social"]]: isMobile,
            }
          )}
        >
          {navLinks.map(({ id, name, url }) => {
            return (
              <Link
                key={id}
                url={url}
                fontFamily="Unbounded"
                fontSize={20}
                fontWeight={500}
                lineHeight={32}
                mainColor={Colors.Navy}
                hoverColor={Colors.Navy}
                activeColor={Colors.Nephritis100}
                padding="14px 0"
                onClick={onOpen && (() => onOpen(!isOpen))}
              >
                {name}
              </Link>
            );
          })}
          {isMobile && (
            <div className={styles["navigation-bar__social"]}>
              <Icon
                icon={telegramSVG}
                id="telegram"
                width={32}
                height={32}
                mainColor={Colors.Nephritis100}
                hoverColor={Colors.Nephritis120}
                activeColor={Colors.Navy}
              />
              <Icon
                icon={vkSVG}
                id="vk"
                width={32}
                height={32}
                mainColor={Colors.Nephritis100}
                hoverColor={Colors.Nephritis120}
                activeColor={Colors.Navy}
              />
            </div>
          )}
        </nav>
      )}
    </>
  ) : null;
};*/

import clsx from "clsx";

import { Logo } from "../../components/icons";
import { MainSocial } from "../../components/main-social";
import { Text } from "../../components/text";
import { useDesktopMediaQuery } from "../../hooks/useDesktopMediaQuery";
import { useLaptopMediaQuery } from "../../hooks/useLaptopMediaQuery";
import { useLargeScreenMediaQuery } from "../../hooks/useLargeScreenMediaQuery";

import { Colors } from "../../utils/types";

import styles from "./footer.module.css";
//import { socials } from "../../utils/constants";
import { useTabletMediaQuery } from "../../hooks/useTabletMediaQuery";
import { useMobileMediaQuery } from "../../hooks/useMobileMediaQuery";

export const Footer = () => {
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
  const isLaptop = useLaptopMediaQuery();

  return isLarge || isDesktop || isLaptop ? (
    <footer
      className={clsx(
        styles.footer,
        isLarge && styles["footer_large-screen"],
        isDesktop && styles.footer_desktop,
        isLaptop && styles.footer_laptop
      )}
    >
      <div className={clsx(styles.footer__upper, styles.footer__upper_rowed)}>
        <Logo
          mainColor={Colors.Light100}
          extraColor={Colors.Nephritis120}
          width={239}
          height={40}
        />
        <div
          className={clsx(
            styles["footer__contact-info"],
            styles["footer__contact-info_rowed"],
            styles["footer__contact-info_small-gap"]
          )}
        >
          <div
            className={clsx(
              styles.footer__contacts,
              isLarge && styles["footer__contacts_large-screen"]
            )}
          >
            <Text
              fontFamily="Roboto"
              textAlign="right"
              fontSize={14}
              fontWeight={400}
              lineHeight={24}
              textTransform="none"
              color={Colors.Light100}
            >
              {"Позвоните нам"}
            </Text>
            <a href={"tel:+79167569505"} className={styles.footer__link}>
              {"8 (916) 756-95-05"}
            </a>
          </div>
          <MainSocial />
        </div>
      </div>
      <div className={styles.footer__lower}>
        <Text
          fontFamily="Roboto"
          textAlign="left"
          fontSize={14}
          fontWeight={400}
          lineHeight={24}
          textTransform="none"
          color={Colors.Light100}
        >
          {"©2025 Творческое объединение «Открытая Территория»"}
        </Text>
      </div>
    </footer>
  ) : null;
};

const SmallResolution = () => {
  const isTablet = useTabletMediaQuery();
  const isMobile = useMobileMediaQuery();

  return isTablet || isMobile ? (
    <footer
      className={clsx(
        styles.footer,
        isTablet && styles.footer_tablet,
        isMobile && styles.footer_mobile
      )}
    >
      <div
        className={clsx(styles.footer__upper, styles.footer__upper_columned)}
      >
        <Logo
          mainColor={Colors.Light100}
          extraColor={Colors.Nephritis120}
          width={239}
          height={40}
        />
        <div
          className={clsx(
            styles["footer__contact-info"],
            isTablet && styles["footer__contact-info_rowed"],
            isTablet && styles["footer__contact-info_large-gap"],
            isMobile && styles["footer__contact-info_columned"]
          )}
        >
          <div
            className={clsx(
              styles.footer__contacts
              //isLarge && styles["footer__contacts_large-screen"]
            )}
          >
            <Text
              fontFamily="Roboto"
              textAlign={isMobile ? "left" : "right"}
              fontSize={14}
              fontWeight={400}
              lineHeight={24}
              textTransform="none"
              color={Colors.Light100}
            >
              {"Позвоните нам"}
            </Text>
            <a href={"tel:+79167569505"} className={styles.footer__link}>
              {"8 (916) 756-95-05"}
            </a>
          </div>
          <MainSocial />
        </div>
      </div>
      <div className={styles.footer__lower}>
        <Text
          fontFamily="Roboto"
          textAlign="left"
          fontSize={14}
          fontWeight={400}
          lineHeight={24}
          textTransform="none"
          color={Colors.Light100}
        >
          {"©2025 Творческое объединение «Открытая Территория»"}
        </Text>
      </div>
    </footer>
  ) : null;
};

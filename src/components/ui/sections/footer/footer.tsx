import { FC } from "react";
import clsx from "clsx";

import { Logo } from "../../../../components/icons";
import { MainSocial } from "../../../../components/main-social";
import { Text } from "../../../../components/text";

import { Colors } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./footer.module.css";
import { TFooterUIProps } from "./types";

export const FooterUI: FC<TFooterUIProps> = ({ year }) => {
  return (
    <>
      <LargeResolution year={year} />
      <SmallResolution year={year} />
    </>
  );
};

const LargeResolution: FC<TFooterUIProps> = ({ year }) => {
  const { isLarge, isDesktop, isLaptop } = useGetMediaQuery();

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
          {`©${year} Творческое объединение «Открытая Территория»`}
        </Text>
      </div>
    </footer>
  ) : null;
};

const SmallResolution: FC<TFooterUIProps> = ({ year }) => {
  const { isTablet, isMobile } = useGetMediaQuery();

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
          {`©${year} Творческое объединение «Открытая Территория»`}
        </Text>
      </div>
    </footer>
  ) : null;
};

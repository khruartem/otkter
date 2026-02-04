import { FC } from "react";
import clsx from "clsx";

import { Section } from "../../../../components/section";
import { PartnerUI } from "../../partner";

import { TPartnersUIProps } from "./types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./partners.module.css";

export const PartnersUI: FC<TPartnersUIProps> = ({ partners }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section id="partners">
      <ul
        className={clsx(
          styles.partners,
          isLarge && styles.partners_large,
          isDesktop && styles.partners_desktop,
          isLaptop && styles.partners_laptop,
          isTablet && styles.partners_tablet,
          isMobile && styles.partners_mobile
        )}
      >
        {partners.map((partner, index) => (
          <li key={index}>
            <PartnerUI partner={partner} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

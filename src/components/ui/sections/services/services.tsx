import React from "react";
import clsx from "clsx";

import { Text } from "../../../text";
import { ServicesContentSlider } from "../../../services-content-slider";
import { ServiceList } from "../../../service-list";

import { TServicesUIProps } from "./types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { Colors, lineHeights } from "../../../../utils/types";

import styles from "./services.module.css";

export const ServicesUI = React.forwardRef<HTMLElement, TServicesUIProps>(
  ({ servicesRefs, servicesViewRefs }, ref) => {
    const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
      useGetMediaQuery();
    return (
      <section
        id="services"
        className={clsx(
          styles.services,
          (isDesktop || isTablet || isMobile) && styles["services_small-gap"],
          (isLarge || isLaptop) && styles["services_small-gap"],
          isLarge && styles["services_large-screen"]
        )}
        ref={ref}
      >
        <div
          className={clsx(
            styles.services__header,
            (isLarge || isDesktop || isLaptop) && styles.services__header_rowed,
            (isTablet || isMobile) && styles.services__header_columned,
            isLarge && styles["services__header_large-screen"],
            isDesktop && styles.services__header_desktop,
            isLaptop && styles.services__header_laptop,
            isTablet && styles.services__header_tablet,
            isMobile && styles.services__header_mobile
          )}
        >
          <Text
            as="h2"
            fontFamily="Unbounded"
            textAlign="center"
            fontSize={isLarge || isDesktop ? 56 : 36}
            fontWeight={700}
            lineHeight={(isLarge || isDesktop ? 80 : 44) as lineHeights}
            textTransform="uppercase"
            color={Colors.Navy}
            decorated={true}
            padding={isLarge || isDesktop ? "8px 28px" : "12px 24px"}
          >
            {"услуги"}
          </Text>
          <ServicesContentSlider
            servicesRefs={servicesRefs}
            servicesViewRefs={servicesViewRefs}
          />
        </div>
        <ServiceList
          servicesRefs={servicesRefs}
          servicesViewRefs={servicesViewRefs}
        />
      </section>
    );
  }
);

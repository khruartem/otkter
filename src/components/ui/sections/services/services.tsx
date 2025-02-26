import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../../text";
import { ContentSlider } from "../../../content-slider";
import { ServiceList } from "../../../service-list";

import { TServicesUIProps } from "./types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { Colors, lineHeights } from "../../../../utils/types";

import styles from "./services.module.css";

export const ServicesUI: FC<TServicesUIProps> = ({
  currentTab,
  onTabClick,
  sectionRef,
  titleRefs,
  refs,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  return (
    <section
      id="services"
      className={clsx(
        styles.services,
        (isDesktop || isTablet || isMobile) && styles["services_small-gap"],
        (isLarge || isLaptop) && styles["services_small-gap"],
        isLarge && styles["services_large-screen"],
        isDesktop && styles.services_desktop,
        isLaptop && styles.services_laptop,
        isTablet && styles.services_tablet,
        isMobile && styles.services_mobile
      )}
      ref={sectionRef}
    >
      <div
        className={clsx(
          styles.services__header,
          (isLarge || isDesktop || isLaptop) && styles.services__header_rowed,
          (isTablet || isMobile) && styles.services__header_columned
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
        <ContentSlider onTabClick={onTabClick} currentTab={currentTab} />
      </div>
      <ServiceList titleRefs={titleRefs} refs={refs} />
    </section>
  );
};

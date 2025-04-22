import clsx from "clsx";

import { Text } from "../../text";

import { Colors, FontSizes, lineHeights } from "../../../utils/types";
import { TServiceUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./service.module.css";
import React from "react";
import { Controls } from "../../controls";

export const ServiceUI = React.forwardRef<
  HTMLDivElement & HTMLImageElement,
  TServiceUIProps
>(({ service, serviceRef }, ref) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const { title, shortText, image } = service;

  const shortTextFontSize = Number(
    clsx((isLarge || isLaptop) && 20, (isDesktop || isTablet || isMobile) && 14)
  ) as FontSizes;

  const shortTextLineHeight: lineHeights = Number(
    clsx((isLarge || isLaptop) && 32, (isDesktop || isTablet || isMobile) && 24)
  ) as lineHeights;

  return (
    <div
      className={clsx(
        styles.service,
        isLarge && styles["service_large-screen"],
        isDesktop && styles.service_desktop,
        isLaptop && styles.service_laptop,
        isTablet && styles.service_tablet,
        isMobile && styles.service_mobile,
        (isLarge || isDesktop) && styles.service_rowed,
        (isLaptop || isTablet || isMobile) && styles.service_columned
      )}
      ref={serviceRef}
    >
      {(isLaptop || isTablet || isMobile) && (
        <img
          loading="lazy"
          className={styles.service__image}
          src={image}
          alt="Изображение услуги"
          ref={ref}
        />
      )}
      <div
        className={clsx(
          styles.service__info,
          isLarge && styles["service__info_large-screen"],
          isDesktop && styles.service__info_desktop,
          isLaptop && styles.service__info_laptop,
          isTablet && styles.service__info_tablet,
          isMobile && styles.service__info_mobile
        )}
        // ref={isLaptop || isTablet || isMobile ? undefined : ref}
      >
        <div
          className={clsx(
            styles.service__text,
            isLarge && styles["service__text_large-gap"],
            !isLarge && styles["service__text_small-gap"]
          )}
        >
          <Text
            as={"h3"}
            fontFamily="Unbounded"
            textAlign="left"
            fontSize={isLarge ? 32 : 28}
            fontWeight={500}
            lineHeight={isLarge ? 48 : 40}
            textTransform={"none"}
            color={Colors.Navy}
            padding={clsx(isTablet || (isMobile && "40px 0 0 0"))}
          >
            {title}
          </Text>
          <Text
            as={"p"}
            fontFamily="Roboto"
            textAlign="left"
            fontSize={shortTextFontSize}
            fontWeight={400}
            lineHeight={shortTextLineHeight}
            color={Colors.Dark100}
            textTransform={"none"}
          >
            {shortText}
          </Text>
        </div>
        <Controls id={service.id} type="services" />
      </div>
      {(isLarge || isDesktop) && (
        <img
          loading="lazy"
          className={styles.service__image}
          src={image}
          alt="Изображение услуги"
          ref={ref}
        />
      )}
    </div>
  );
});

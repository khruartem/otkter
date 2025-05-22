import clsx from "clsx";
import React from "react";

import { Text } from "../../text";
import { Controls } from "../../controls";
// import { ImageUI } from "../../image";

import { Colors, FontSizes, lineHeights } from "../../../utils/types";
import { TServiceUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./service.module.css";

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
      <img
        loading="lazy"
        width={"100%"}
        height={"100%"}
        className={styles.service__image}
        src={image}
        alt="Изображение услуги"
        ref={ref}
      />
      {/* <div ref={ref} style={{ width: "100%", height: "100%" }}>
        <ImageUI
          src={image}
          alt={`Изображение услуги ${title}`}
          className={styles.service__image}
          width={"100%"}
          height={"100%"}
        />
      </div> */}
      <div
        className={clsx(
          styles.service__info,
          isLarge && styles["service__info_large-screen"],
          isDesktop && styles.service__info_desktop,
          isLaptop && styles.service__info_laptop,
          isTablet && styles.service__info_tablet,
          isMobile && styles.service__info_mobile,
          (isLarge || isDesktop) && styles["service__info_rows-ordered"]
        )}
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
        <Controls id={service.id} type="services" located="main" />
      </div>
    </div>
  );
});

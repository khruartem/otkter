import { CSSProperties } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { Colors, FontSizes, lineHeights } from "../../../utils/types";
import { TServiceUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./service.module.css";
import React from "react";

export const ServiceUI = React.forwardRef<HTMLDivElement, TServiceUIProps>(({ service, titleRef }, ref) => {
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
      ref={ref}
    >
      <div className={styles.service__info}>
        {/* <Text
          as={"h3"}
          fontFamily="Unbounded"
          textAlign="left"
          fontSize={isLarge ? 32 : 28}
          fontWeight={500}
          lineHeight={isLarge ? 48 : 40}
          textTransform={"none"}
          color={Colors.Navy}
          ref={titleRef}
        >
          {title}
        </Text> */}
        <h3
          className={styles.text}
          style={
            {
              "--font-size": `${isLarge ? 32 : 28}px`,
              "--line-height": `${isLarge ? 48 : 40}px`,
            } as CSSProperties
          }
          ref={titleRef}
        >
          {title}
        </h3>
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
      <div
        className={clsx(
          styles.service__image,
          (isLarge || isDesktop) && styles["service__image_full-height"],
          (isLaptop || isTablet || isMobile) &&
            styles["service__image_full-weight"],
          isLarge && styles["service__image_large-screen"],
          isDesktop && styles.service__image_desktop,
          isLaptop && styles.service__image_laptop,
          isTablet && styles.service__image_tablet,
          isMobile && styles.service__image_mobile
        )}
        style={
          {
            "--background-url": `url(${image})`,
          } as CSSProperties
        }
      ></div>
    </div>
  );
});

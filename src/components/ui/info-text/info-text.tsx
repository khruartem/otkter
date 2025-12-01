import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { TInfoTextUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./info-text.module.css";

export const InfoTextUI: FC<TInfoTextUIProps> = ({ text }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const smallResolution = isDesktop || isTablet || isMobile;

  return (
    <Text
      as={"p"}
      fontFamily="Roboto"
      textAlign="left"
      fontSize={smallResolution ? 14 : 20}
      fontWeight={400}
      lineHeight={smallResolution ? 24 : 32}
      textTransform={"none"}
      color={Colors.Dark100}
      classNameExtra={clsx(
        styles["info-text"],
        isLarge && styles["info-text_large"],
        isDesktop && styles["info-text_desktop"],
        isLaptop && styles["info-text_laptop"]
      )}
    >
      {text}
    </Text>
  );
};

import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { TItemTextUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./item-text.module.css";

export const ItemTextUI: FC<TItemTextUIProps> = ({ text, className }) => {
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
      className={clsx(
        styles["item-text"],
        isLarge && styles["item-text_large"],
        isDesktop && styles["item-text_desktop"],
        isLaptop && styles["item-text_laptop"],
        className && className
      )}
    >
      {text}
    </Text>
  );
};

import { FC } from "react";
import clsx from "clsx";

import { TrickCircle } from "../../icons";
import { Text } from "../../text";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./free.module.css";

export const FreeUI: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles.free,
        isLarge && styles.free_large,
        isDesktop && styles.free_desktop,
        isLaptop && styles.free_laptop,
        isTablet && styles.free_tablet,
        isMobile && styles.free_mobile
      )}
    >
      <TrickCircle mainColor={Colors.Orange100} />
      <Text
        as={"span"}
        fontFamily="Roboto"
        textAlign="left"
        fontSize={16}
        fontWeight={400}
        lineHeight={28}
        textTransform={"none"}
        color={Colors.Navy}
      >
        {"Первое занятие бесплатно"}
      </Text>
    </div>
  );
};

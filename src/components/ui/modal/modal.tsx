import { FC, memo } from "react";

import { Text } from "../../text";

import { TModalUIProps } from "./types";
import { ArrowLeft } from "../../icons/icons";
import { Colors } from "../../../utils/types";

import styles from "./modal.module.css";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import clsx from "clsx";

export const ModalUI: FC<TModalUIProps> = memo(({ onClose, children }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  return (
    <div
      className={clsx(
        styles.modal,
        isLarge && styles["modal_large-screen"],
        isDesktop && styles.modal_desktop,
        isLaptop && styles.modal_laptop,
        isTablet && styles.modal_tablet,
        isMobile && styles.modal_mobile,
        isDesktop ? styles["modal_small-gap"] : styles["modal_large-gap"],
      )}
    >
      <button className={styles.modal__button} type="button" onClick={onClose}>
        <ArrowLeft mainColor={Colors.Light20} />
        <Text
          as={"span"}
          fontFamily="Unbounded"
          fontSize={18}
          fontWeight={500}
          lineHeight={28}
          textAlign="right"
          textTransform="none"
          color={Colors.Light20}
        >
          Назад
        </Text>
      </button>
      {children}
    </div>
  );
});

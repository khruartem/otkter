import { FC, memo } from "react";
import clsx from "clsx";

import { Text } from "../../text";
import { ArrowLeft, CloseModal, Share } from "../../icons/icons";

import { TModalUIProps } from "./types";
import { Colors } from "../../../utils/types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./modal.module.css";

export const ModalUI: FC<TModalUIProps> = memo(
  ({ type, onClose, isDirectLink, children }) => {
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
          ((isTablet || isMobile) && type === "back")
            ? styles["modal_height-mobile"]
            : styles["modal_height-regular"],
          type === "close" && styles.modal_centered,
          type === "close" && styles["modal_overflowed-y"],
        )}
      >
        {type === "back" && (
          <div className={styles.modal__buttons}>
            <button
            className={clsx(styles.modal__button, styles.modal__button_back)}
            type="button"
            onClick={onClose}
          >
            <ArrowLeft mainColor={Colors.Light20} className={styles.modal__arrow} />
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
              {clsx(
                !isDirectLink && "Назад",
                isDirectLink && "На главную",
              )}
            </Text>
          </button>
            <button
            className={clsx(styles.modal__button, styles.modal__button_share)}
            type="button"
            onClick={onClose}
          >
            <Share mainColor={Colors.Light20} />
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
              {"Поделиться"}
            </Text>
          </button>
          </div>
        )}
        {type === "close" && (
          <button
            className={clsx(
              styles.modal__button,
              styles.modal__button_close,
              isLarge && styles["modal__button_close_large-screen"],
              isDesktop && styles.modal__button_close_desktop,
              isLaptop && styles.modal__button_close_laptop,
              isTablet && styles.modal__button_close_tablet,
              isMobile && styles.modal__button_close_mobile,
            )}
            type="button"
            onClick={onClose}
          >
            <CloseModal mainColor={Colors.Nephritis100} />
          </button>
        )}
        {children}
      </div>
    );
  }
);

import { FC, memo } from "react";

import { Text } from "../../text";

import { TModalUIProps } from "./types";
import { ArrowLeft, CloseModal } from "../../icons/icons";
import { Colors } from "../../../utils/types";

import styles from "./modal.module.css";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import clsx from "clsx";

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
          <button
            className={clsx(styles.modal__button, styles.modal__button_back)}
            type="button"
            onClick={onClose}
          >
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
              {clsx(
                !isDirectLink && "Назад",
                isDirectLink && "На главную",
              )}
            </Text>
          </button>
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

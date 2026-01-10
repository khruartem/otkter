import { FC } from "react";
import clsx from "clsx";

import { ShowHistoryItemUI } from "../show-history-item";
import { ShowHistory } from "../../show-history";
import { Modal } from "../../modal";

import { TShowHistoryPreviewUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./show-history-preview.module.css";

export const ShowHistoryPreviewUI: FC<TShowHistoryPreviewUIProps> = ({
  history,
  current,
  showModal,
  onOpenModal,
  onCloseModal,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <>
      {isMobile ? (
        <ShowHistoryItemUI item={current} onClick={onOpenModal} current />
      ) : (
        <ul className={styles["show-history-preview"]} onClick={onOpenModal}>
          {history.map((item) => (
            <li className={styles["show-history-preview-item"]}>
              <ShowHistoryItemUI item={item} current={item.current} />
            </li>
          ))}
        </ul>
      )}
      {showModal && (
        <Modal
          type={"close"}
          onClose={onCloseModal}
          className={clsx(
            isLarge && styles["modal_show-history_large"],
            isDesktop && styles["modal_show-history_desktop"],
            isLaptop && styles["modal_show-history_laptop"],
            isTablet && styles["modal_show-history_tablet"],
            isMobile && styles["modal_show-history_mobile"]
          )}
        >
          <ShowHistory history={history} />
        </Modal>
      )}
    </>
  );
};

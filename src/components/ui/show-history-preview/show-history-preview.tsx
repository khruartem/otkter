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

  const moreThanTwoItems = history.length > 2;

  return (
    <>
      {isMobile ? (
        <ShowHistoryItemUI item={current} onClick={onOpenModal} current />
      ) : (
        <ul
          className={clsx(
            styles["show-history-preview"],
            (moreThanTwoItems || isTablet) && styles["show-history-preview_blured"],
          )}
          onClick={moreThanTwoItems ? onOpenModal : undefined}
        >
          {history.map((item) => (
            <li
              className={clsx(
                styles["show-history-preview-item"],
                item.premiere && styles["show-history-preview-item_premiere"],
                moreThanTwoItems && styles["show-history-preview-item_widthed"],
              )}
            >
              <ShowHistoryItemUI item={item} current={item.current} />
            </li>
          ))}
        </ul>
      )}
      {showModal && moreThanTwoItems && (
        <Modal
          type={"close"}
          onClose={onCloseModal}
          className={clsx(
            isLarge && styles["modal_show-history_large"],
            isDesktop && styles["modal_show-history_desktop"],
            isLaptop && styles["modal_show-history_laptop"],
            isTablet && styles["modal_show-history_tablet"],
            isMobile && styles["modal_show-history_mobile"],
          )}
        >
          <ShowHistory history={history} />
        </Modal>
      )}
    </>
  );
};

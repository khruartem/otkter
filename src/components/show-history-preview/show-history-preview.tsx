import { FC, useState } from "react";
import clsx from "clsx";

import { ShowHistory } from "../show-history";
import { Modal } from "../modal";
import { ShowHistoryPreviewUI } from "../ui/show-history-preview";

import { TShowHistoryPreviewProps } from "./types";

import { TShowHistoryItem } from "../../utils/types/projects";

import { useSortDesc } from "../../hooks/useSortDesc";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

import modalStyles from "../ui/show-history/show-history.module.css";

export const ShowHistoryPreview: FC<TShowHistoryPreviewProps> = ({
  history,
  controls,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const [showModal, setShowModal] = useState(false);
  const sortedHistory = useSortDesc<TShowHistoryItem>(history, "current");
  const currentShow = sortedHistory.find((show) => show.current)!;

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const modalClassName = clsx(
    isLarge && modalStyles["modal_show-history_large"],
    isDesktop && modalStyles["modal_show-history_desktop"],
    isLaptop && modalStyles["modal_show-history_laptop"],
    isTablet && modalStyles["modal_show-history_tablet"],
    isMobile && modalStyles["modal_show-history_mobile"]
  );

  return (
    <>
      <ShowHistoryPreviewUI
        history={sortedHistory}
        current={currentShow}
        onClick={handleOpenModal}
      />
      {showModal && (
        <Modal
          type={"close"}
          onClose={handleCloseModal}
          className={modalClassName}
        >
          <ShowHistory history={history} controls={controls} />
        </Modal>
      )}
    </>
  );
};

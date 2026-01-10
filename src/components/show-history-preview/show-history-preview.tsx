import { FC, useState } from "react";

import { ShowHistoryPreviewUI } from "../ui/show-history-preview";

import { TShowHistoryPreviewProps } from "./types";

import { TShowHistoryItem } from "../../utils/types/projects";

import { useSortDesc } from "../../hooks/useSortDesc";

export const ShowHistoryPreview: FC<TShowHistoryPreviewProps> = ({
  history,
}) => {
  const [showModal, setShowModal] = useState(false);

  const sortedHistory = useSortDesc<TShowHistoryItem>(history, "current");
  const currentShow = sortedHistory.find((show) => show.current)!;

  const handleModal = (showModal: boolean) => {
    setShowModal(showModal);
  };

  return (
    <ShowHistoryPreviewUI
      history={sortedHistory}
      current={currentShow}
      showModal={showModal}
      onOpenModal={() => handleModal(true)}
      onCloseModal={() => handleModal(false)}
    />
  );
};

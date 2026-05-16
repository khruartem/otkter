import { FC, useState } from "react";

import { ShowHistoryPreviewUI } from "../ui/show-history-preview";

import { TShowHistoryPreviewProps } from "./types";

export const ShowHistoryPreview: FC<TShowHistoryPreviewProps> = ({
  history,
}) => {
  const [showModal, setShowModal] = useState(false);

  const currentShow = history[history.length - 1];

  const handleModal = (showModal: boolean) => {
    setShowModal(showModal);
  };

  return (
    <ShowHistoryPreviewUI
      history={history}
      current={currentShow}
      showModal={showModal}
      onOpenModal={() => handleModal(true)}
      onCloseModal={() => handleModal(false)}
    />
  );
};

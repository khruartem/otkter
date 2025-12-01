import { FC } from "react";

import { ShowHistoryItemUI } from "../show-history-item";

import { TShowHistoryPreviewUIProps } from "./types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./show-history-preview.module.css";

export const ShowHistoryPreviewUI: FC<TShowHistoryPreviewUIProps> = ({
  history,
  current,
  onClick,
}) => {
  const { isMobile } = useGetMediaQuery();

  return isMobile ? (
    <ShowHistoryItemUI item={current} onClick={onClick} current />
  ) : (
    <ul className={styles["show-history-preview"]} onClick={onClick}>
      {history.map((item) => (
        <li className={styles["show-history-preview-item"]}>
          <ShowHistoryItemUI item={item} current={item.current} />
        </li>
      ))}
    </ul>
  );
};

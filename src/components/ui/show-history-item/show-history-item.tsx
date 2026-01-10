import { FC } from "react";
import clsx from "clsx";

import { Text } from "../../text";

import { TShowHistoryItemUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./show-history-item.module.css";

export const ShowHistoryItemUI: FC<TShowHistoryItemUIProps> = ({
  item,
  current,
  onClick,
  className,
}) => {
  const { isMobile } = useGetMediaQuery();
  const { where, date } = item;

  return (
    <div
      className={clsx(
        styles["show-history-item"],
        isMobile && current && styles["show-history-item_aligned"],
        className && className
      )}
      onClick={onClick}
    >
      <Text
        as={"span"}
        fontFamily={"Roboto"}
        textAlign={"left"}
        fontSize={18}
        fontWeight={400}
        lineHeight={28}
        textTransform={"none"}
        color={current ? Colors.Nephritis100 : Colors.Light20}
        className={styles.where}
      >
        {where}
      </Text>
      <Text
        as={"span"}
        fontFamily={"Unbounded"}
        textAlign={"left"}
        fontSize={20}
        fontWeight={500}
        lineHeight={32}
        textTransform={"none"}
        color={current ? Colors.Navy : Colors.Dark80}
      >
        {date}
      </Text>
    </div>
  );
};

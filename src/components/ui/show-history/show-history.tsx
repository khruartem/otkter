import { FC } from "react";
import clsx from "clsx";

import { ShowHistoryItemUI } from "../show-history-item";
import { Text } from "../../text";
import { CtaUI } from "../cta";

import { TShowHistoryUIProps } from "./types";

import { Colors } from "../../../utils/types";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./show-history.module.css";
import scrollStyle from "../../../styles/scroll.module.css";

export const ShowHistoryUI: FC<TShowHistoryUIProps> = ({
  pastShows,
  currentShow,
  controls,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["show-history"],
        isLarge && styles["show-history_large"],
        isLaptop && styles["show-history_laptop"],
        isTablet && styles["show-history_tablet"],
        isMobile && styles["show-history_mobile"]
      )}
    >
      <div
        className={clsx(
          styles["past-shows-block"],
          (isLarge || isDesktop) && styles["past-shows-block_heighed"],
          isMobile && styles["past-shows-block_positioned"]
        )}
      >
        <Text
          fontFamily={"Unbounded"}
          textAlign={"left"}
          fontSize={isLarge || isDesktop ? 32 : 28}
          fontWeight={500}
          lineHeight={isLarge || isDesktop ? 48 : 40}
          textTransform={"none"}
          color={Colors.Navy}
        >
          {"История показов"}
        </Text>
        <ul
          className={clsx(
            styles["past-shows"],
            scrollStyle.scrolled,
            isLarge && [
              styles["past-shows_column-gap-large"],
              styles["past-shows_row-gap-large"],
            ],
            isDesktop && [
              styles["past-shows_column-gap-large"],
              styles["past-shows_row-gap-small"],
            ],
            (isLaptop || isTablet) && [
              styles["past-shows_column-gap-small"],
              styles["past-shows_row-gap-small"],
            ],
            isMobile && [
              styles["past-shows_row-gap-small"],
              styles["past-shows_faded"],
            ]
          )}
        >
          {pastShows.map((item, index) => (
            <li key={index}>
              <ShowHistoryItemUI
                item={item}
                className={clsx(
                  styles["show-history-item_width"],
                  isLarge && styles["show-history-item_large"],
                  isDesktop && styles["show-history-item_desktop"],
                  isLaptop && styles["show-history-item_laptop"],
                  isTablet && styles["show-history-item_tablet"],
                  isMobile && styles["show-history-item_mobile"]
                )}
              />
            </li>
          ))}
        </ul>
      </div>
      <CtaUI controls={controls} kind="projects">
        <ShowHistoryItemUI current item={currentShow} />
      </CtaUI>
    </div>
  );
};

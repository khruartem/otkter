import { FC } from "react";
import clsx from "clsx";

import { DetailsGridItemUI } from "../details-grid-item";
import { DetailsGridContentUI } from "../details-grid-content";
import { ItemOTCardUI } from "../item-ot-card";

import { TDetailsMediaUIProps } from "./types";

import { isMedia } from "../../../utils/guards/is-media";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./details-media.module.css";

export const DetailsMediaUI: FC<TDetailsMediaUIProps> = ({
  details,
  categories,
  categoriesColors,
}) => {
  const { isDesktop, isLaptop, isTablet, isMobile } = useGetMediaQuery();

  return (
    <DetailsGridItemUI className={styles["details-grid-item_media"]}>
      <DetailsGridContentUI
        categoriesProps={{
          categories,
          colors: categoriesColors,
        }}
        className={clsx(
          styles["details-grid-item__content_media"],
          (isTablet || isMobile) &&
            styles["details-grid-item__content_media_gapped"]
        )}
      >
        {details.map(({ value, url }) => (
          <>
            {isMedia(value) && (
              <ItemOTCardUI
                item={value}
                url={{ to: url || "" }}
                target="_blank"
                className={clsx(
                  isDesktop && styles["item-ot-card_desktop_media"],
                  isLaptop && styles["item-ot-card_laptop_media"]
                )}
              />
            )}
          </>
        ))}
      </DetailsGridContentUI>
    </DetailsGridItemUI>
  );
};

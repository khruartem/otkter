import { FC } from "react";
import clsx from "clsx";

import { Page } from "../../../page";
import { Section } from "../../../section";
import { InfoNavigation } from "../../../info-navigation";
import { InfoTitle } from "../../../info-title";
import { InfoText } from "../../../info-text";
import { InfoPhotoList } from "../../../info-photo-list";
import { InfoCTA } from "../../../info-cta";
import { InfoPoster } from "../../../info-poster";
import { InfoDetails } from "../../../info-details";

import { TInfoUIProps } from "./types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./info.module.css";

export const InfoUI: FC<TInfoUIProps> = ({ currentItem, pageProps }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const { seo, layout } = pageProps;

  return (
    <Page
      seo={seo}
      layout={{
        ...layout,
        className: clsx(
          !currentItem?.details &&
            (isLaptop || isDesktop) &&
            styles["main_info-details"]
        ),
      }}
    >
      <Section>
        <InfoNavigation />
        <div
          className={clsx(
            styles["info-content"],
            (isLarge || isDesktop) && styles["info-content_middle-gap"],
            isLaptop && styles["info-content_small-gap"],
            (isTablet || isMobile) && styles["info-content_large-gap"]
          )}
        >
          <div
            className={clsx(
              styles["info-about"],
              isLaptop && styles["info-about_laptop"],
              (isTablet || isMobile) && styles["info-about_small-resolution"]
            )}
          >
            <div
              className={clsx(
                styles["info-core"],
                isLarge && styles["info-core_lagre"],
                isDesktop && styles["info-core_desktop"],
                isLaptop && styles["info-core_laptop"],
                isLaptop &&
                  !currentItem?.poster &&
                  styles["info-core_laptop_spaned"],
                isTablet && styles["info-core_tablet"],
                isMobile && styles["info-core_mobile"]
              )}
            >
              <div
                className={clsx(
                  styles["info-description"],
                  isLarge
                    ? styles["info-description_large-resolution"]
                    : styles["info-description_small-resolution"]
                )}
              >
                <InfoTitle />
                <InfoText />
                <InfoPhotoList />
              </div>
              {!isLaptop && <InfoCTA />}
            </div>
            <InfoPoster />
            {isLaptop && <InfoCTA />}
          </div>
          <InfoDetails />
        </div>
      </Section>
    </Page>
  );
};

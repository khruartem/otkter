import { FC } from "react";
import clsx from "clsx";
import { Page } from "../../../page";
import { Section } from "../../../section";
import { TInfoMerchUIProps } from "./types";
import { Share } from "../../../share";
import { MerchInfoTitle } from "../../../merch-info-title";
import { MerchInfoText } from "../../../merch-info-text";
import { MerchInfoControls } from "../../../merch-info-controls";
import { MerchInfoPrice } from "../../../merch-info-price";
import { MerchInfoParams } from "../../../merch-info-params";
import { MerchInfoColors } from "../../../merch-info-colors";

import styles from "./info-merch.module.css";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { MerchInfoPoster } from "../../../merch-info-poster";

export const InfoMerchUI: FC<TInfoMerchUIProps> = ({
  currentItem,
  pageProps,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const largeResolution = isLarge || isDesktop;
  const smallResolution = isLaptop || isTablet || isMobile;

  const { seo, layout } = pageProps;

  return (
    <Page seo={seo} layout={layout}>
      <Section
        decoration={"half"}
        className={clsx(
          styles["merch-info"],
          largeResolution && styles["merch-info_large-gap"],
          smallResolution && styles["merch-info_small-gap"]
        )}
      >
        <Share item={currentItem} />
        <div
          className={clsx(
            styles["merch-info__content"],
            (isTablet || isMobile) && styles["merch-info__content_gapped"]
          )}
        >
          <MerchInfoPoster />
          <div
            className={clsx(
              styles["merch-info__about"],
              largeResolution && styles["merch-info__about_large-gap"],
              smallResolution && styles["merch-info__about_small-gap"]
            )}
          >
            <div
              className={clsx(
                styles["merch-info__core"],
                isLarge && styles["merch-info__core_heighted"],
                (isLarge || isDesktop || isLaptop) &&
                  styles["merch-info__core_large-gap"],
                (isTablet || isMobile) && styles["merch-info__core_small-gap"]
              )}
            >
              <MerchInfoTitle />
              <MerchInfoText />
              <div
                className={clsx(
                  styles["merch-info__characteristics"],
                  largeResolution && [
                    styles["merch-info__characteristics_columned"],
                    styles["merch-info__characteristics_large-gap"],
                  ],
                  isLaptop && [
                    styles["merch-info__characteristics_columned"],
                    styles["merch-info-characteristics_middle-gap"],
                  ],
                  isTablet && [
                    styles["merch-info__characteristics_columned"],
                    styles["merch-info__characteristics_small-gap"],
                  ],
                  isMobile && [
                    styles["merch-info__characteristics_rowed"],
                    styles["merch-info__characteristics_small-gap"],
                  ]
                )}
              >
                <MerchInfoParams />
                <MerchInfoColors />
              </div>
            </div>
            <div className={styles["merch-info__cta"]}>
              <MerchInfoControls />
              <MerchInfoPrice />
            </div>
          </div>
        </div>
      </Section>
    </Page>
  );
};

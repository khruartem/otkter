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

export const InfoMerchUI: FC<TInfoMerchUIProps> = ({
  currentItem,
  pageProps,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();
  const { seo, layout } = pageProps;

  return (
    <Page seo={seo} layout={layout}>
      <Section>
        <Share item={currentItem} />
        <MerchInfoTitle />
        <MerchInfoText />
        <MerchInfoControls />
        <MerchInfoPrice />
        <div
          className={clsx(
            styles["merch-info-characteristics"],
            (isLarge || isDesktop) && [
              styles["merch-info-characteristics_columned"],
              styles["merch-info-characteristics_large-gap"],
            ],
            isLaptop && [
              styles["merch-info-characteristics_columned"],
              styles["merch-info-characteristics_middle-gap"],
            ],
            isTablet && [
              styles["merch-info-characteristics_columned"],
              styles["merch-info-characteristics_small-gap"],
            ],
            isMobile && [
              styles["merch-info-characteristics_rowed"],
              styles["merch-info-characteristics_small-gap"],
            ]
          )}
        >
          <MerchInfoParams />
          <MerchInfoColors />
        </div>
      </Section>
    </Page>
  );
};

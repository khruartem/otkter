import { FC } from "react";
import { Page } from "../../../page";
import { Section } from "../../../section";
import { TInfoMerchUIProps } from "./types";
import { Share } from "../../../share";
import { MerchInfoTitle } from "../../../merch-info-title";
import { MerchInfoText } from "../../../merch-info-text";
import { MerchInfoControls } from "../../../merch-info-controls";

export const InfoMerchUI: FC<TInfoMerchUIProps> = ({
  currentItem,
  pageProps,
}) => {
  const { seo, layout } = pageProps;

  return (
    <Page seo={seo} layout={layout}>
      <Section>
        <Share item={currentItem} />
        <MerchInfoTitle />
        <MerchInfoText />
        <MerchInfoControls />
      </Section>
    </Page>
  );
};

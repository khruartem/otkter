import { FC } from "react";
import { TInfoMerchProps } from "./types";
import { TPageLayout, TPageSEO } from "../../components/page/type";
import { InfoMerchUI } from "../../components/ui/pages/info-merch";
import { InfoMerchProvider } from "./info-merch-provider";

export const InfoMerch: FC<TInfoMerchProps> = ({ currentItem }) => {
  const { title, shortText, type, url } = currentItem;

  const seo: TPageSEO = {
    title,
    description: shortText,
    siteName: title,
    url: `https://otkter.ru/merch/${type}/${url}`,
    previewImg: "/preview/preview_merch.webp",
  };

  const layout: TPageLayout = {
    noPadding: true,
  };

  const infoMerchContextValue = {
    currentItem,
  };

  return (
    <InfoMerchProvider value={infoMerchContextValue}>
      <InfoMerchUI currentItem={currentItem} pageProps={{ seo, layout }} />
    </InfoMerchProvider>
  );
};

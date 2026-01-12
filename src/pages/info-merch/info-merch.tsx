import { FC, useEffect } from "react";
import { TInfoMerchProps } from "./types";
import { TPageLayout, TPageSEO } from "../../components/page/type";
import { InfoMerchUI } from "../../components/ui/pages/info-merch";
import { InfoMerchProvider } from "./info-merch-provider";
import { useLocation } from "react-router-dom";

export const InfoMerch: FC<TInfoMerchProps> = ({ currentItem }) => {
  const location = useLocation();

  const { title, shortText, type, url, previewImg } = currentItem;

  const seo: TPageSEO = {
    title,
    description: shortText,
    siteName: title,
    url: `https://otkter.ru/merch/${type}/${url}`,
    previewImg: previewImg || "/preview/preview_merch.webp",
  };

  const layout: TPageLayout = {
    noPadding: true,
  };

  const infoMerchContextValue = {
    currentItem,
  };

  useEffect(() => {
    location.state = { type: "merch" };
  }, [location]);

  return (
    <InfoMerchProvider value={infoMerchContextValue}>
      <InfoMerchUI currentItem={currentItem} pageProps={{ seo, layout }} />
    </InfoMerchProvider>
  );
};

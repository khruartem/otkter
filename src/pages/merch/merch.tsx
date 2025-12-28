import { FC } from "react";

import { MerchUI } from "../../components/ui/pages/merch";

import { TPageLayout, TPageSEO } from "../../components/page/type";

export const Merch: FC = () => {
  const seo: TPageSEO = {
    title: "Мерч",
    description: "Магазин мерча Открытой территории",
    siteName: "Мерч",
    url: "https://otkter.ru/merch",
    previewImg: "/preview/preview.webp",
  };

  const layout: TPageLayout = {
    noPadding: true,
  };

  return <MerchUI pageProps={{ seo, layout }} />;
};

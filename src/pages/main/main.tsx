import { FC, useEffect } from "react";

import { MainUI } from "../../components/ui/pages/main";

import { TPageLayout, TPageSEO } from "../../components/page/type";

export const Main: FC = () => {
  useEffect(() => {
    document.body.removeAttribute("style");
  }, []);

  const seo: TPageSEO = {
    title: "Открытая территория",
    ogTitle: "Экосистема творческих возможностей",
    description: "Экосистема творческих возможностей",
    ogDescription: "Объединяем творцов из разных сфер",
    siteName: "Открытая территория",
    url: "https://otkter.ru/",
    previewImg: "/preview/preview.webp",
  };

  const layout: TPageLayout = {
    noPadding: true,
    animatedHeader: true,
  };

  return <MainUI pageProps={{ seo, layout }} />;
};

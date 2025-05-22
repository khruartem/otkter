import { FC, useEffect, useState } from "react";

import { MainUI } from "../../components/ui/pages/main";
import { Preloader } from "../../components/ui/preloader";

import { Colors } from "../../utils/types";
import { SEO } from "../../components/seo";

export const Main: FC = () => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  useEffect(() => {
    document.body.style.backgroundColor = Colors.Light80;
    setDocReadyState(document.readyState);
  }, []);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    <>
      <SEO
        title={"Открытая территория"}
        ogTitle={"Экосистема творческих возможностей"}
        description={"Экосистема творческих возможностей"}
        ogDescription={"Объединяем творцов из разных сфер"}
        siteName={"Открытая территория"}
        url={"https://otkter.ru/"}
        previewImg={"/preview/preview.png"}
      />
      <MainUI />
    </>
  ) : (
    <Preloader />
  );
};

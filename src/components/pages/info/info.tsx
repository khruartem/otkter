import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../../../components/ui/pages/info copy";
import { Preloader } from "../../../components/ui/preloader";
import { SEO } from "../../../components/seo";

import { TInfoProps } from "./types";
import { Colors } from "../../../utils/types";

export const Info: FC<TInfoProps> = ({ currentItem, items }) => {
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const location = useLocation();

  const { id, kind, title, shortText, previewImg, url, main } = currentItem;

  const itemColor =
    currentItem.kind === "projects"
      ? currentItem.categories?.attention
        ? Colors.Orange100
        : Colors.Navy
      : Colors.Navy;

  useEffect(() => {
    // Проброс стейта дальше или формирование
    if (location.state) {
      location.state = { ...location.state, id: main ? id : 0 };
    } else {
      location.state = { id: main ? id : 0, type: kind };
    }

    document.body.style.backgroundColor = Colors.Light60;

    setDocReadyState(document.readyState);
  }, [main, location, id, kind]);

  return docReadyState === "complete" || docReadyState === "interactive" ? (
    <>
      <SEO
        title={title}
        ogTitle={kind}
        description={shortText}
        siteName={title}
        url={`https://otkter.ru/projects/${url}`}
        previewImg={previewImg || ""}
      />
      <InfoUI currentItem={currentItem} items={items} color={itemColor} />
    </>
  ) : (
    <Preloader />
  );
};

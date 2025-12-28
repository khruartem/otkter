import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../../components/ui/pages/info copy";

import { TInfoProps } from "./types";

import { Colors } from "../../utils/types";
import { TPageLayout, TPageSEO } from "../../components/page/type";

export const Info: FC<TInfoProps> = ({ items, currentItem }) => {
  const location = useLocation();

  const { id, kind, title, shortText, previewImg, url, main } = currentItem;

  const itemColor =
    currentItem.kind === "projects"
      ? currentItem.categories?.attention
        ? Colors.Orange100
        : Colors.Navy
      : Colors.Navy;

  useEffect(() => {
    location.state = { ...location.state, id: main ? id : 0, type: kind };

    document.body.style.backgroundColor = Colors.Light60;
  }, [id, kind, location, main]);

  const seo: TPageSEO = {
    title,
    description: shortText,
    siteName: title,
    url: `https://otkter.ru/projects/${url}`,
    previewImg: previewImg || "",
  };

  const layout: TPageLayout = {
    noPadding: false,
  };

  return (
    <InfoUI
      currentItem={currentItem}
      currentIndex={items.findIndex((element) => element.id === currentItem.id)}
      items={items}
      color={itemColor}
      pageProps={{ seo, layout }}
    />
  );
};

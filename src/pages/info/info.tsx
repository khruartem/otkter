import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../../components/ui/pages/info copy";
import { InfoProvider } from "./info-provider";

import { TInfoContextValue, TInfoProps } from "./types";
import { TPageLayout, TPageSEO } from "../../components/page/type";

import { Colors } from "../../utils/types";
import { useGetItemsOT } from "../../hooks/useGetItemsOT";
import { TProject } from "../../utils/types/projects";
import { TService } from "../../utils/types/services";
import { TEmployee } from "../../utils/types/team";
import { TMerch } from "../../utils/types/merch";

export const Info: FC<TInfoProps> = ({ currentItem }) => {
  const location = useLocation();

  const { id, kind, title, shortText, previewImg, url, main } = currentItem;

  const items = useGetItemsOT(currentItem.kind) as
    | TProject[]
    | TService[]
    | TEmployee[]
    | TMerch[];

  const currentIndex = items.findIndex(
    (element) => element.id === currentItem.id
  );

  const itemColor =
    currentItem.kind === "projects"
      ? currentItem.categories?.attention
        ? Colors.Orange100
        : Colors.Navy
      : Colors.Navy;

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

  const infoContextValue: TInfoContextValue = {
    items,
    currentItem,
    currentIndex,
    itemColor,
  };

  useEffect(() => {
    location.state = { ...location.state, id: main ? id : 0, type: kind };

    document.body.style.backgroundColor = Colors.Light60;
  }, [id, kind, location, main]);

  return (
    <InfoProvider value={infoContextValue}>
      <InfoUI currentItem={currentItem} pageProps={{ seo, layout }} />
    </InfoProvider>
  );
};

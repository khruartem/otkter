import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import { Page } from "../../page";
import { InfoUI } from "../../../components/ui/pages/info copy";

import { TInfoProps } from "./types";

import { Colors } from "../../../utils/types";
import { TPageLayout, TPageSEO } from "../../page/type";

import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "../../ui/pages/info copy/info.module.css";

export const Info: FC<TInfoProps> = ({ items, currentItem }) => {
  const location = useLocation();

  const { isLaptop, isDesktop } = useGetMediaQuery();

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
    className: clsx(
      !currentItem?.details &&
        (isLaptop || isDesktop) &&
        styles["main_info-details"]
    ),
  };

  return (
    <Page seo={seo} layout={layout}>
      <InfoUI
        currentItem={currentItem}
        currentIndex={items.findIndex(
          (element) => element.id === currentItem.id
        )}
        items={items}
        color={itemColor}
      />
    </Page>
  );
};

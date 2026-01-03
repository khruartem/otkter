import { FC } from "react";
import { TMerchInfoProps } from "./types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import clsx from "clsx";
import { TTabsGap } from "../../utils/types";
import { IconTab } from "../../components/icon-tab";
import { TContentSliderTabBarProps } from "../../components/content-slider/types";
import { TPageLayout, TPageSEO } from "../../components/page/type";

export const MerchInfo: FC<TMerchInfoProps> = ({ currentItem }) => {
  const { title, shortText, type, url } = currentItem;

  const seo: TPageSEO = {
    title,
    description: shortText,
    siteName: title,
    url: `https://otkter.ru/${type}/${url}`,
    previewImg: "/preview/preview_merch.webp",
  };

  const layout: TPageLayout = {
    noPadding: false,
  };

  return undefined;
};

import { FC } from "react";
import clsx from "clsx";

import { IconTab } from "../../components/icon-tab";
import { MerchTab } from "../../components/merch-tab";
import { MerchUI } from "../../components/ui/pages/merch";

import { TPageLayout, TPageSEO } from "../../components/page/type";
import { TContentSliderTabBarProps } from "../../components/content-slider/types";

import { TTabsGap } from "../../utils/types";
import { TMerchType } from "../../utils/types/merch";
import { TItemOTType } from "../../utils/types/common";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";

export const Merch: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const merchItems = useGetMerchItems();

  const tabBarProps: TContentSliderTabBarProps = {
    title: "мерч",
    tabsGap: clsx(
      isLarge && "large",
      (isDesktop || isMobile) && "middle",
      isLaptop && "none",
      isTablet && "small"
    ) as TTabsGap,
    relativeToTitle: "columned",
    renderTab: (item) => (
      <IconTab
        tab={item.tab as TItemOTType}
        titled
        current={item.current}
        iconRef={item.iconRef}
        onClick={item.onClick}
      >
        <MerchTab tab={item.tab as TMerchType} />
      </IconTab>
    ),
  };

  const seo: TPageSEO = {
    title: "Мерч",
    description: "Магазин мерча Открытой территории",
    siteName: "Мерч",
    url: "https://otkter.ru/merch",
    previewImg: "/preview/preview_merch.webp",
  };

  const layout: TPageLayout = {
    noPadding: true,
  };

  return (
    <MerchUI
      items={merchItems}
      tabBarProps={tabBarProps}
      pageProps={{ seo, layout }}
    />
  );
};

import { FC } from "react";

import { MerchUI } from "../../components/ui/pages/merch";

import { TPageLayout, TPageSEO } from "../../components/page/type";
import { TContentSliderTabBarProps } from "../../components/content-slider/types";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import clsx from "clsx";
import { TTabsGap } from "../../utils/types";
import { IconTab } from "../../components/icon-tab";
import { useGetMerchItems } from "../../hooks/merch/useGetMerchItems";
import { MerchTab } from "../../components/merch-tab";

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
      <IconTab titled {...item}>
        <MerchTab tab={item.tab} />
      </IconTab>
    ),
  };

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

  return (
    <MerchUI
      items={merchItems}
      tabBarProps={tabBarProps}
      pageProps={{ seo, layout }}
    />
  );
};

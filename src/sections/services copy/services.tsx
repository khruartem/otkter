import { FC } from "react";
import clsx from "clsx";

import { ServicesUI } from "../../components/ui/sections/services copy";
import { IconTab } from "../../components/icon-tab";
import { ServiceTab } from "../../components/service-tab";

import { TContentSliderTabBarProps } from "../../components/content-slider/types";

import { TTabsGap } from "../../utils/types";

import { useSortAsc } from "../../hooks/useSortAsc";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { useGetServices } from "../../hooks/services/useGetServices";

export const Services: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const servicesUnsorted = useGetServices();
  const services = useSortAsc(servicesUnsorted, "order");

  const tabBarProps: TContentSliderTabBarProps = {
    title: "услуги",
    relativeToTitle: "rowed",
    tabsGap: clsx(
      isLarge && "large",
      (isDesktop || isMobile) && "middle",
      isLaptop && "none",
      isTablet && "small"
    ) as TTabsGap,
    renderTab: (item) => (
      <IconTab titled={false} {...item}>
        <ServiceTab tab={item.tab} />
      </IconTab>
    ),
  };

  return <ServicesUI services={services} tabBarProps={tabBarProps} />;
};

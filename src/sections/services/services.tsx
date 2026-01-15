import { FC } from "react";
import clsx from "clsx";

import { ServicesUI } from "../../components/ui/sections/services";
import { IconTab } from "../../components/icon-tab";
import { ServiceTab } from "../../components/service-tab";

import { TContentSliderTabBarProps } from "../../components/content-slider/types";

import { TTabsGap } from "../../utils/types";

import { TServiceType } from "../../utils/types/services";
import { TItemOTType } from "../../utils/types/item-ot";

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
      <IconTab
        titled={false}
        tab={item.tab as TItemOTType}
        current={item.current}
        iconRef={item.iconRef}
        onClick={item.onClick}
      >
        <ServiceTab tab={item.tab as TServiceType} />
      </IconTab>
    ),
  };

  return <ServicesUI services={services} tabBarProps={tabBarProps} />;
};

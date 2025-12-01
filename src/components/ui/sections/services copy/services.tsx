import { FC } from "react";
import clsx from "clsx";

import { ContentSlider } from "../../../content-slider";
import { IconTabBar } from "../../../icon-tab-bar";
import { IconTab } from "../../../icon-tab";
import { ServiceTab } from "../../../service-tab";
import { ServiceUI } from "../../service";

import { TServicesUIProps } from "./types";
import { TTabsGap } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./services.module.css";
import { Section } from "../../../section";

export const ServicesUI: FC<TServicesUIProps> = ({ services }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section id="services" padding="block">
      <ContentSlider
        items={services}
        renderTabBar={(props) => {
          return (
            <IconTabBar
              {...props}
              title="услуги"
              styleType="rowed"
              className={clsx(
                isLarge && styles["services-tab-bar_large"],
                isDesktop && styles["services-tab-bar_desktop"],
                isLaptop && styles["services-tab-bar_laptop"]
              )}
              tabsGap={
                clsx(
                  isLarge && "large",
                  (isDesktop || isMobile) && "middle",
                  isLaptop && "none",
                  isTablet && "small"
                ) as TTabsGap
              }
              renderTab={(props) => {
                return (
                  <IconTab titled={false} {...props}>
                    <ServiceTab tab={props.tab} />
                  </IconTab>
                );
              }}
            />
          );
        }}
        renderItem={({ type, itemRef, itemViewRef }) => (
          <ServiceUI
            service={
              services.find((service) => service.type === type) || services[0]
            }
            serviceRef={itemRef}
            ref={itemViewRef}
          />
        )}
      />
    </Section>
  );
};

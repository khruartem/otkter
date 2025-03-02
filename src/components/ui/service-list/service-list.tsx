import { FC } from "react";
import clsx from "clsx";

import { TServiceListUIProps } from "./types";
//import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./service-list.module.css";
import { ServiceUI } from "../service/service";

export const ServiceListUI: FC<TServiceListUIProps> = ({
  services,
  servicesRefs,
  servicesViewRefs,
}) => {
  // const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
  //   useGetMediaQuery();

  return (
    <div
      className={clsx(
        styles["service-list"],
        // isLarge && styles["service-list_large-screen"],
        // isDesktop && styles["service-list_desktop"],
        // isLaptop && styles["service-list_laptop"],
        // isTablet && styles["service-list_tablet"],
        // isMobile && styles["service-list_mobile"]
      )}
    >
      {services.map((service) => {
        const serviceRef = servicesRefs.find(
          (value) => value.type === service.type
        )?.ref;
        const serviceViewRef = servicesViewRefs.find(
          (value) => value.type === service.type
        )?.ref;

        return (
          <ServiceUI
            service={service}
            serviceRef={serviceRef}
            ref={serviceViewRef}
          />
        );
      })}
    </div>
  );
};

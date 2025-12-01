import { FC } from "react";

import { TServiceListUIProps } from "./types";

import styles from "./service-list.module.css";
import { Service } from "../../service";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";
import clsx from "clsx";

export const ServiceListUI: FC<TServiceListUIProps> = ({
  services,
  servicesRefs,
  servicesViewRefs,
}) => {
  const { isMobile } = useGetMediaQuery();
  return (
    <div className={clsx(
      styles["service-list"],
      isMobile && styles["service-list_mobile"]
    )}>
      {services.map((service) => {
        return (
          <Service
            key={service.id}
            service={service}
            servicesRefs={servicesRefs}
            servicesViewRefs={servicesViewRefs}
          />
        );
      })}
    </div>
  );
};

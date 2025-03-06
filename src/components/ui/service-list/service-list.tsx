import { FC } from "react";

import { TServiceListUIProps } from "./types";

import styles from "./service-list.module.css";
import { Service } from "../../service";

export const ServiceListUI: FC<TServiceListUIProps> = ({
  services,
  servicesRefs,
  servicesViewRefs,
}) => {
  return (
    <div className={styles["service-list"]}>
      {services.map((service) => {
        return (
          <Service
            service={service}
            servicesRefs={servicesRefs}
            servicesViewRefs={servicesViewRefs}
          />
        );
      })}
    </div>
  );
};

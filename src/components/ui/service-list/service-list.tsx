import { FC } from "react";
import clsx from "clsx";

import { TServiceListUIProps } from "./types";
import { useGetMediaQuery } from "../../../hooks/useGetMediaQuery";

import styles from "./service-list.module.css";
import { ServiceUI } from "../service/service";

export const ServiceListUI: FC<TServiceListUIProps> = ({
  services,
  titleRefs,
  refs,
}) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <div className={styles["service-list"]}>
      <div
        className={clsx(
          styles.wrapper,
          isLarge && styles["wrapper_large-screen"],
          isDesktop && styles.wrapper_desktop,
          isLaptop && styles.wrapper_laptop,
          isTablet && styles.wrapper_tablet,
          isMobile && styles.wrapper_mobile,
          (isLarge || isDesktop) && styles.wrapper_rowed,
          (isLaptop || isTablet || isMobile) && styles.wrapper_columned
        )}
      >
        {services.map(service => {
          const titleRef = titleRefs.find(value => value.type === service.type)?.ref;
          const ref = refs.find(value => value.type === service.type)?.ref;

          return <ServiceUI service={service} titleRef={titleRef} ref={ref} />
        })}
      </div>
    </div>
  );
};

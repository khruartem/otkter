import { FC } from "react";

import { ServiceListUI } from "../ui/service-list";

import { TServiceListProps } from "./types";
import { TService } from "../../utils/types";
import { useGetServices } from "../../hooks/useGetServices";

export const ServiceList: FC<TServiceListProps> = ({
  servicesRefs,
  servicesViewRefs,
}) => {
  const services: TService[] = useGetServices();

  return (
    <ServiceListUI
      services={services}
      servicesRefs={servicesRefs}
      servicesViewRefs={servicesViewRefs}
    />
  );
};

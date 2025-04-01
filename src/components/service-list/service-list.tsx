import { FC } from "react";

import { ServiceListUI } from "../ui/service-list";

import { TServiceListProps } from "./types";
import { TService } from "../../utils/types";
import { useGetServices } from "../../hooks/useGetServices";
import { useSortAsc } from "../../hooks/useSortAsc";

export const ServiceList: FC<TServiceListProps> = ({
  servicesRefs,
  servicesViewRefs,
}) => {
  const services: TService[] = useGetServices();
  const sortedServices = useSortAsc(services);

  return (
    <ServiceListUI
      services={sortedServices}
      servicesRefs={servicesRefs}
      servicesViewRefs={servicesViewRefs}
    />
  );
};

import { FC } from "react";

import { Info } from "../../components/pages/info";
import { NotFound404 } from "../not-found-404";

import { useGetId } from "../../hooks/useGetId";
import { useGetServices } from "../../hooks/services/useGetServices";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useGetService } from "../../hooks/services/useGetService";

export const ServiceInfo: FC = () => {
  const serviceId = useGetId();
  const services = useGetServices();
  const sortedServices = useSortAsc(services, "order");
  const service = useGetService(serviceId);

  return service ? (
    <Info currentItem={service} items={sortedServices} />
  ) : (
    <NotFound404 />
  );
};

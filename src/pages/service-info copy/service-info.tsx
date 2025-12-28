import { FC } from "react";

import { InfoRenderer } from "../info-renderer";

import { useGetId } from "../../hooks/useGetId";
import { useGetServices } from "../../hooks/services/useGetServices";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useGetService } from "../../hooks/services/useGetService";

export const ServiceInfo: FC = () => {
  const serviceId = useGetId();
  const services = useGetServices();
  const sortedServices = useSortAsc(services, "order");
  const service = useGetService(serviceId);

  return <InfoRenderer items={sortedServices} currentItem={service} />;
};

import { FC } from "react";

import { InfoRenderer } from "../info-renderer";
import { Info } from "../info";

import { useGetServices } from "../../hooks/services/useGetServices";
import { useSortAsc } from "../../hooks/useSortAsc";
import { useGetService } from "../../hooks/services/useGetService";

export const ServiceInfo: FC = () => {
  const services = useGetServices();
  const sortedServices = useSortAsc(services, "order");
  const service = useGetService();

  return (
    <InfoRenderer
      items={sortedServices}
      currentItem={service}
      render={(items, currentItem) => (
        <Info items={items} currentItem={currentItem} />
      )}
    />
  );
};

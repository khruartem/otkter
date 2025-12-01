import { FC } from "react";

import { ServicesUI } from "../../components/ui/sections/services copy";

import { useGetServices } from "../../hooks/useGetServices";
import { useSortAsc } from "../../hooks/useSortAsc";

export const Services: FC = () => {
  const servicesUnsorted = useGetServices("all");
  const services = useSortAsc(servicesUnsorted, "order");

  return <ServicesUI services={services} />;
};

import { FC } from "react";

import { TServiceProps } from "./types";

import { ServiceUI } from "../ui/service";

export const Service: FC<TServiceProps> = ({
  service,
  servicesRefs,
  servicesViewRefs,
}) => {
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
};

import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { InfoUI } from "../ui/info";

import { useGetId } from "../../hooks/useGetId";
import { useGetServiceTitle } from "../../hooks/useGetServiceTitle";
import { useGetInfosText } from "../../hooks/useGetInfosText";
import { useGetInfosIsEmployees } from "../../hooks/useGetInfosIsEmployees";
import { useGetControls } from "../../hooks/useGetControls";

export const ServiceInfo: FC = () => {
  const location = useLocation();

  const serviceId = useGetId();
  const title = useGetServiceTitle(serviceId);
  const text = useGetInfosText(serviceId, "services");
  const isEmployees = useGetInfosIsEmployees(serviceId, "services");
  const controls = useGetControls(serviceId, "services");
  const isControls = controls?.buttons.length || controls?.links.length ? true : false;

  useEffect(() => {
    location.state = { id: serviceId };
  });

  return (
    <InfoUI
      type="services"
      id={serviceId}
      title={title}
      text={text}
      attention={false}
      isEmployees={isEmployees}
      isControls={isControls}
    />
  );
};

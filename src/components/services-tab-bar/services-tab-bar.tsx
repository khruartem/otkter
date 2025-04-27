import { FC, useState } from "react";

import { TabBarUI } from "../ui/tab-bar";

import { useNavigate, useLocation } from "react-router-dom";
import { useGetId } from "../../hooks/useGetId";
import { findById } from "../../utils/findById";
import { TService } from "../../utils/types";
import { useGetServices } from "../../hooks/useGetServices";

export const ServicesTabBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const id = useGetId();
  const services = useGetServices("all");
  const service = findById(services, id) as TService;

  const [currentService, setCurrenService] = useState<TService>(service);
  const [index, setIndex] = useState<number>(
    services.findIndex((element) => element.id === id)
  );

  const onSwitch: (arg: number) => void = (index: number) => {
    if (index > services.length - 1) {
      setIndex(0);
      setCurrenService(services[0]);
      navigate(`/services/${services[0].id}`, {
        state: { ...location.state, id: services[0].id },
      });
    } else if (index < 0) {
      setIndex(services.length - 1);
      setCurrenService(services[services.length - 1]);
      navigate(`/services/${services[services.length - 1].id}`, {
        state: {
          ...location.state,
          id: services[services.length - 1].id,
        },
      });
    } else {
      setIndex(index);
      setCurrenService(services[index]);
      navigate(`/services/${services[index].id}`, {
        state: { ...location.state, id: services[index].id },
      });
    }
  };

  return (
    <TabBarUI
      current={currentService}
      type="services"
      index={index}
      items={services}
      onSwitch={onSwitch}
      setCurrentItem={setCurrenService}
      setIndex={setIndex}
      location={location}
    />
  );
};

import { FC, useState } from "react";

import { TabBarUI } from "../ui/tab-bar";

import { useNavigate, useLocation } from "react-router-dom";
import { useGetId } from "../../hooks/useGetId";
import { findById } from "../../utils/findById";
import { TService } from "../../utils/types";
import { useGetServices } from "../../hooks/useGetServices";
import { useSortAsc } from "../../hooks/useSortAsc";

export const ServicesTabBar: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const id = useGetId();
  const services = useGetServices("all");
  const sortedServices = useSortAsc(services, "order");
  const service = findById(services, id) as TService;

  const [currentService, setCurrenService] = useState<TService>(service);
  const [index, setIndex] = useState<number>(
    services.findIndex((element) => element.id === id)
  );

  const onSwitch: (arg: number) => void = (index: number) => {
    if (index > sortedServices.length - 1) {
      setIndex(0);
      setCurrenService(sortedServices[0]);
      navigate(`/services/${sortedServices[0].id}`, {
        state: { ...location.state, id: sortedServices[0].id },
      });
    } else if (index < 0) {
      setIndex(sortedServices.length - 1);
      setCurrenService(sortedServices[sortedServices.length - 1]);
      navigate(`/services/${sortedServices[sortedServices.length - 1].id}`, {
        state: {
          ...location.state,
          id: sortedServices[sortedServices.length - 1].id,
        },
      });
    } else {
      setIndex(index);
      setCurrenService(sortedServices[index]);
      navigate(`/services/${sortedServices[index].id}`, {
        state: { ...location.state, id: sortedServices[index].id },
      });
    }
  };

  return (
    <TabBarUI
      current={currentService}
      type="services"
      index={index}
      items={sortedServices}
      onSwitch={onSwitch}
      setCurrentItem={setCurrenService}
      setIndex={setIndex}
      location={location}
    />
  );
};

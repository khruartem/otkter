import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

import { TabBarUI } from "../ui/tab-bar";

import { useGetId } from "../../hooks/useGetId";
import { useGetOnSwitch } from "../../hooks/useGetOnSwitch";

import { findById } from "../../utils/findById";
import { TEmployee, TProject, TService } from "../../utils/types";
import { useGetTeams } from "../../hooks/useGetTeams";

export const TeamTabBar: FC = () => {
  const location = useLocation();

  const id = useGetId();
  const admins = useGetTeams().administrators?.employees || [];
  const admin = findById(admins, id) as TEmployee;

  const [currentAdmin, setCurrentAdmin] = useState<TEmployee>(admin);
  const [index, setIndex] = useState<number>(
    admins.findIndex((element) => element.id === id)
  );

  const onSwitch = useGetOnSwitch<TEmployee>(
    admins,
    setIndex,
    setCurrentAdmin,
    "team"
  );

  return (
    <TabBarUI
      current={currentAdmin}
      type="team"
      index={index}
      items={admins}
      onSwitch={onSwitch}
      setCurrentItem={
        setCurrentAdmin as (
          value: React.SetStateAction<TProject | TService | TEmployee>
        ) => void
      }
      setIndex={setIndex}
      location={location}
    />
  );
};

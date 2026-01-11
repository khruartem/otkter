import { FC, useMemo } from "react";
import clsx from "clsx";

import { TeamsUI } from "../../components/ui/sections/teams";
import { IconTab } from "../../components/icon-tab";
import { TeamsTab } from "../../components/teams-tab";

import { TContentSliderTabBarProps } from "../../components/content-slider/types";

import { TTabsGap } from "../../utils/types";
import { TEmployee, TEmployeeType } from "../../utils/types/team";
import { TItemOTType } from "../../utils/types/item-ot";

import { useGetTeams } from "../../hooks/team/useGetTeams";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";

export const Teams: FC = () => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const teams = useGetTeams()!;
  const admins = useGetTeams("admins") || [];
  const artists = useGetTeams("artists") || [];

  const minTeamLength = useMemo(
    () => (admins.length < artists.length ? admins.length : artists.length),
    [admins.length, artists.length]
  );

  const tabBarProps: TContentSliderTabBarProps = {
    title: "команда",
    tabsGap: clsx(
      isLarge && "large",
      (isDesktop || isMobile) && "middle",
      isLaptop && "none",
      isTablet && "small"
    ) as TTabsGap,
    relativeToTitle: "rowed",
    renderTab: (item) => (
      <IconTab
        titled
        tab={item.tab as TItemOTType}
        current={item.current}
        iconRef={item.iconRef}
        onClick={item.onClick}
      >
        <TeamsTab tab={item.tab as TEmployee | TEmployeeType} />
      </IconTab>
    ),
  };

  return (
    <TeamsUI
      teams={teams}
      minTeamLength={minTeamLength}
      tabBarProps={tabBarProps}
    />
  );
};

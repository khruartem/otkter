import { FC } from "react";
import clsx from "clsx";

import { ContentSlider } from "../../../../components/content-slider";
import { IconTabBar } from "../../../../components/icon-tab-bar";
import { IconTab } from "../../../../components/icon-tab";
import { TeamsTab } from "../../../teams-tab";
import { Team } from "../../../team copy";

import { TTeamsUIProps } from "./types";
import { TTabsGap } from "../../../../utils/types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./teams.module.css";
import { Section } from "../../../section";

export const TeamsUI: FC<TTeamsUIProps> = ({ teams, minTeamLength }) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <Section id="team" padding={"block"}>
      <ContentSlider
        items={teams}
        renderTabBar={(props) => {
          return (
            <IconTabBar
              {...props}
              title="команда"
              styleType="rowed"
              className={clsx(
                isLarge && styles["teams-tab-bar_large"],
                isDesktop && styles["teams-tab-bar_desktop"],
                isLaptop && styles["teams-tab-bar_laptop"]
              )}
              tabsGap={
                clsx(
                  isLarge && "large",
                  (isDesktop || isMobile) && "middle",
                  isLaptop && "none",
                  isTablet && "small"
                ) as TTabsGap
              }
              renderTab={(props) => {
                return (
                  <IconTab titled {...props}>
                    <TeamsTab tab={props.tab} />
                  </IconTab>
                );
              }}
            />
          );
        }}
        renderItem={({ type, itemRef, itemViewRef }) => (
          <Team
            team={teams.filter((team) => {
              return team.type === type;
            })}
            type={type}
            teamViewRef={itemViewRef}
            teamRef={itemRef}
            minTeamLength={minTeamLength}
          />
        )}
      />
    </Section>
  );
};

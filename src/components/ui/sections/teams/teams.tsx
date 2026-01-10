import { FC } from "react";
import clsx from "clsx";

import { Section } from "../../../section";
import { ContentSlider } from "../../../../components/content-slider";
import { Team } from "../../../team";

import { TTeamsUIProps } from "./types";

import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";

import styles from "./teams.module.css";

export const TeamsUI: FC<TTeamsUIProps> = ({
  teams,
  minTeamLength,
  tabBarProps,
}) => {
  const { isLarge, isDesktop, isLaptop } = useGetMediaQuery();

  return (
    <Section id="team" padding={"block"}>
      <ContentSlider
        items={teams}
        tabBarProps={{
          ...tabBarProps,
          className: clsx(
            isLarge && styles["teams-tab-bar_large"],
            isDesktop && styles["teams-tab-bar_desktop"],
            isLaptop && styles["teams-tab-bar_laptop"]
          ),
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

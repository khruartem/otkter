import React from "react";
import clsx from "clsx";

import { Text } from "../../../text";
import { TeamsList } from "../../../teams-list";
import { ServiceList } from "../../../service-list";
import { TeamsContentSlider } from "../../../teams-content-slider";
import { ServicesContentSlider } from "../../../services-content-slider";
import { ProjectsContentSlider } from "../../../projects-content-slider";
import { ProjectGroupsList } from "../../../project-groups-list";

import { TSliderSectionUIProps } from "./types";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import {
  Colors,
  lineHeights,
  TProjectRef,
  TProjectViewRef,
  TServiceRef,
  TServiceViewRef,
  TTeamRef,
  TTeamViewRef,
} from "../../../../utils/types";

import styles from "./slider-section.module.css";

export const SliderSectionUI = React.forwardRef<
  HTMLElement,
  TSliderSectionUIProps
>(({ type, sectionRefs, sectionViewRefs }, ref) => {
  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <section
      id={type}
      className={clsx(
        styles["slider-section"],
        (isDesktop || isTablet || isMobile) &&
          styles["slider-section_small-gap"],
        (isLarge || isLaptop) && styles["slider-section_small-gap"],
        isLarge && styles["slider-section_large-screen"]
      )}
      ref={ref}
    >
      <div
        className={clsx(
          styles["slider-section__header"],
          (isLarge || isDesktop || isLaptop) &&
            styles["slider-section__header_rowed"],
          (isTablet || isMobile) &&
            type !== "projects" && [
              styles["slider-section__header_columned"],
              styles["slider-section__header_columned_small-gap"],
            ],
          (isLarge || isLaptop) &&
            type === "projects" && [
              styles["slider-section__header_columned"],
              styles["slider-section__header_columned_large-gap"],
            ],
          (isDesktop || isTablet || isMobile) &&
            type === "projects" && [
              styles["slider-section__header_columned"],
              styles["slider-section__header_columned_middle-gap"],
            ],
          isLarge && styles["slider-section__header_large-screen"],
          isDesktop && styles["slider-section__header_desktop"],
          isLaptop && styles["slider-section__header_laptop"],
          isTablet && styles["slider-section__header_tablet"],
          isMobile && styles["slider-section__header_mobile"]
        )}
      >
        <Text
          as="h2"
          fontFamily="Unbounded"
          textAlign="center"
          fontSize={isLarge || isDesktop ? 56 : 36}
          fontWeight={700}
          lineHeight={(isLarge || isDesktop ? 80 : 44) as lineHeights}
          textTransform="uppercase"
          color={Colors.Navy}
          decorated={true}
          padding={isLarge || isDesktop ? "8px 28px" : "12px 24px"}
        >
          {clsx(
            type === "team" && "команда",
            type === "services" && "услуги",
            type === "projects" && "проекты"
          )}
        </Text>
        {type === "team" && (
          <TeamsContentSlider
            teamsRefs={sectionRefs as TTeamRef[]}
            teamsViewRefs={sectionViewRefs as TTeamViewRef[]}
          />
        )}
        {type === "services" && (
          <ServicesContentSlider
            servicesRefs={sectionRefs as TServiceRef[]}
            servicesViewRefs={sectionViewRefs as TServiceViewRef[]}
          />
        )}
        {type === "projects" && (
          <ProjectsContentSlider
            projectsRefs={sectionRefs as TProjectRef[]}
            projectsViewRefs={sectionViewRefs as TProjectViewRef[]}
          />
        )}
      </div>
      {type === "team" && (
        <TeamsList
          teamsRefs={sectionRefs as TTeamRef[]}
          teamsViewRefs={sectionViewRefs as TTeamViewRef[]}
        />
      )}
      {type === "services" && (
        <ServiceList
          servicesRefs={sectionRefs as TServiceRef[]}
          servicesViewRefs={sectionViewRefs as TServiceViewRef[]}
        />
      )}
      {type === "projects" && (
        <ProjectGroupsList
          projectsRefs={sectionRefs as TProjectRef[]}
          projectsViewRefs={sectionViewRefs as TProjectViewRef[]}
        />
      )}
    </section>
  );
});

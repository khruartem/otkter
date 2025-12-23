import { FC } from "react";

import { Section } from "../../../section";
import { ContentSlider } from "../../../content-slider";
import { ProjectList } from "../../../project-list copy";
import { Partners } from "../../../../sections/partners";
import { SuggestProjectUI } from "../../suggest-project";

import { TAllProjectsUIProps } from "./types";

export const AllProjectsUI: FC<TAllProjectsUIProps> = ({
  projects,
  tabBarProps,
}) => {
  return (
    <>
      <Section decoration={"half"} padding={"top"}>
        <ContentSlider
          firstTab="all"
          items={projects}
          tabBarProps={tabBarProps}
          emptyStateContent={<SuggestProjectUI />}
          renderItem={({ type, itemRef, itemViewRef }) => (
            <>
              <ProjectList
                type={type}
                projectListRef={itemRef}
                projectListViewRef={itemViewRef}
              />
              {type === "all" && <SuggestProjectUI onlyButton />}
            </>
          )}
        />
      </Section>
      <Partners />
    </>
  );
};

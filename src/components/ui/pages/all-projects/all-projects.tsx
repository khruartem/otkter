import { FC } from "react";

import { Page } from "../../../page";
import { Section } from "../../../section";
import { ContentSlider } from "../../../content-slider";
import { ProjectList } from "../../../project-list";
import { Partners } from "../../../../sections/partners";
import { SuggestProjectUI } from "../../suggest-project";

import { TAllProjectsUIProps } from "./types";

import styles from "./all-projects.module.css";

export const AllProjectsUI: FC<TAllProjectsUIProps> = ({
  projects,
  tabBarProps,
  pageProps,
}) => {
  const { seo, layout } = pageProps;

  return (
    <Page
      seo={seo}
      layout={{ ...layout, className: styles["main_all-projects"] }}
    >
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
    </Page>
  );
};

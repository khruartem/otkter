import { FC } from "react";

import { MainLayout } from "../../../../layouts/main-layout";
import { Section } from "../../../section";
import { ContentSlider } from "../../../content-slider";
import { ProjectList } from "../../../project-list copy";
import { Partners } from "../../../../sections/partners";
import { SuggestProjectUI } from "../../suggest-project";

import { TAllProjectsUIProps } from "./types";

import styles from "./all-projects.module.css";

export const AllProjectsUI: FC<TAllProjectsUIProps> = ({
  projects,
  tabBarProps,
}) => {
  return (
    <MainLayout withoutMediaQuery className={styles["main_all-projects"]}>
      <Section decoration={"half"} padding={"top"}>
        {/* <ContentSlider
          firstTab="all"
          items={projects}
          tabBarProps={tabBarProps}
          renderItem={({ type, itemRef, itemViewRef }) => (
            <ProjectList
              type={type}
              projectListRef={itemRef}
              projectListViewRef={itemViewRef}
            />
          )}
        >
          <Button
            type="button"
            onClick={() => contactFunction("admins", 1, "telegram")}
            disabled={false}
          >
            {"Предложить проект"}
          </Button>
        </ContentSlider> */}
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
    </MainLayout>
  );
};

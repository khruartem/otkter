import { FC } from "react";

import { MainLayout } from "../../../../layouts/main-layout";

// import { Projects } from "../../../../sections/projects";
import { ContentSlider } from "../../../content-slider";
import { useGetProjects } from "../../../../hooks/delete/useGetProjects";
import { IconTab } from "../../../icon-tab";
import { ProjectTab } from "../../../project-tab";
// import { ProjectsUI } from "../../sections/projects";
import { ProjectList } from "../../../project-list copy";
import { IconTabBar } from "../../../icon-tab-bar";
import clsx from "clsx";
import { useGetMediaQuery } from "../../../../hooks/useGetMediaQuery";
import { TTabsGap } from "../../../../utils/types";
import { Partners } from "../../../../sections/partners";
import { contactFunction } from "../../../../utils/contactFunction";
import { Button } from "../../../button";
import { Section } from "../../../section";
// import { TCardType } from "../../../../utils/types";
// import { TCardType } from "../../../../utils/types";

// export const AllProjectsUI: FC = () => {
//   return (
//     <MainLayout withoutMediaQuery>
//       <Projects type="all" />
//     </MainLayout>
//   );
// };

export const AllProjectsUI: FC = () => {
  const projects = useGetProjects("all");

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  return (
    <MainLayout withoutMediaQuery>
      <Section decoration={"half"} padding={"top"}>
        <ContentSlider
          items={projects}
          firstTab="all"
          renderTabBar={(props) => {
            return (
              <IconTabBar
                {...props}
                title="проекты"
                styleType="columned"
                renderTab={({ current, tab, iconRef, onClick }) => {
                  return (
                    <IconTab
                      tab={tab}
                      current={current}
                      iconRef={iconRef}
                      onClick={onClick}
                    >
                      <ProjectTab tab={tab} />
                    </IconTab>
                  );
                }}
                tabsGap={
                  clsx(
                    (isLarge || isDesktop || isLaptop) && "large",
                    isTablet && "small",
                    isMobile && "middle"
                  ) as TTabsGap
                }
              />
            );
          }}
          renderItem={({ type, itemRef, itemViewRef }) => (
            <ProjectList
              type={type}
              projectListRef={itemRef}
              projectListViewRef={itemViewRef}
            />
          )}
          // padding={isLarge ? "large" : "middle"}
          // paddingedTop
          // decorated
        >
          <Button
            type="button"
            onClick={() => contactFunction("admins", 1, "telegram")}
            disabled={false}
          >
            {"Предложить проект"}
          </Button>
        </ContentSlider>
      </Section>
      <Partners />
    </MainLayout>
  );
};

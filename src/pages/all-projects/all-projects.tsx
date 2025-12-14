import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Preloader } from "../../components/ui/preloader";
import { AllProjectsUI } from "../../components/ui/pages/all-projects";
// import { Colors } from "../../utils/types";
import { SEO } from "../../components/seo";
import clsx from "clsx";
import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { TContentSliderTabBarProps } from "../../components/content-slider/types";
import { TTabsGap } from "../../utils/types";
import { ProjectTab } from "../../components/project-tab";
import { IconTab } from "../../components/icon-tab";
import { useGetProjects } from "../../hooks/projects/useGetProjects";

export const AllProjects: FC = () => {
  const location = useLocation();
  const [docReadyState, setDocReadyState] = useState<DocumentReadyState | null>(
    null
  );

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const projects = useGetProjects("all");

  const tabBarProps: TContentSliderTabBarProps = {
    title: "проекты",
    tabsGap: clsx(
      isLarge && "large",
      (isDesktop || isMobile) && "middle",
      isLaptop && "none",
      isTablet && "small"
    ) as TTabsGap,
    relativeToTitle: "columned",
    renderTab: (item) => (
      <IconTab titled {...item}>
        <ProjectTab tab={item.tab} />
      </IconTab>
    ),
  };

  useEffect(() => {
    location.state = { id: 0, type: "project" };
    setDocReadyState(document.readyState);
    // document.body.style.backgroundColor = Colors.Light60;
  }, [docReadyState, location]);

  return docReadyState ? (
    <>
      <SEO
        title={"Все проекты"}
        description={"Все проекты Открытой территориии."}
        siteName={"Все проекты"}
        url={`https://otkter.ru/projects/all`}
        previewImg={"/preview/preview.webp"}
      />
      <AllProjectsUI projects={projects} tabBarProps={tabBarProps} />
    </>
  ) : (
    <Preloader />
  );
};

import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import { AllProjectsUI } from "../../components/ui/pages/all-projects";
import { IconTab } from "../../components/icon-tab";
import { ProjectTab } from "../../components/project-tab";

import { TContentSliderTabBarProps } from "../../components/content-slider/types";
import { TTabsGap } from "../../utils/types";
import { TPageLayout, TPageSEO } from "../../components/page/type";
import { TProject, TProjectType } from "../../utils/types/projects";

import { useGetMediaQuery } from "../../hooks/useGetMediaQuery";
import { useGetProjects } from "../../hooks/projects/useGetProjects";
import { TItemOTType } from "../../utils/types/common";

export const AllProjects: FC = () => {
  const location = useLocation();

  const { isLarge, isDesktop, isLaptop, isTablet, isMobile } =
    useGetMediaQuery();

  const projects = useGetProjects();

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
      <IconTab
        tab={item.tab as TItemOTType}
        current={item.current}
        iconRef={item.iconRef}
        onClick={item.onClick}
      >
        <ProjectTab tab={item.tab as TProject | TProjectType} />
      </IconTab>
    ),
  };

  useEffect(() => {
    location.state = { id: 0, type: "projects" };
  }, [location]);

  const seo: TPageSEO = {
    title: "Все проекты",
    description: "Все проекты Открытой территориии.",
    siteName: "Все проекты",
    url: "https://otkter.ru/projects/all",
    previewImg: "/preview/preview.webp",
  };

  const layout: TPageLayout = {
    noPadding: true,
  };

  return (
    <AllProjectsUI
      projects={projects}
      tabBarProps={tabBarProps}
      pageProps={{ seo, layout }}
    />
  );
};

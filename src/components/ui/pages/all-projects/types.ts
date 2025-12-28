import { TProject } from "../../../../utils/types/projects";
import { TContentSliderTabBarProps } from "../../../content-slider/types";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TAllProjectsUIProps = {
  projects: TProject[];
  tabBarProps: TContentSliderTabBarProps;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};

import { TMerch } from "../../../../utils/types/merch";
import { TContentSliderTabBarProps } from "../../../content-slider/types";
import { TPageLayout, TPageSEO } from "../../../page/type";

export type TMerchUIProps = {
  items: TMerch[];
  tabBarProps: TContentSliderTabBarProps;
  pageProps: { seo: TPageSEO; layout: TPageLayout };
};

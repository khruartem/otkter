import { ReactNode } from "react";
import { TLayoutUIProps } from "../ui/layouts/layout/types";
import { TSEOUIProps } from "../ui/seo/types";

export type TPageSEO = TSEOUIProps;

export type TPageLayout = Omit<TLayoutUIProps, "children">;

export type TPageProps = {
  seo: TPageSEO;
  children: ReactNode;
  layout: TPageLayout;
};

export type TPageContextValue = {
  seo: TPageSEO;
  children: ReactNode;
  layout: TPageLayout;
};

export type TPageProviderProps = {
  value: TPageContextValue;
  children: ReactNode;
};

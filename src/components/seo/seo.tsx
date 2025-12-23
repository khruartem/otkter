import { FC } from "react";

import { SEOUI } from "../ui/seo";

import { usePageContext } from "../../hooks/usePageContext";

export const SEO: FC = () => {
  const { seo } = usePageContext();
  return <SEOUI {...seo} />;
};

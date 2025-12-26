import { FC } from "react";

import { SEOUI } from "../ui/seo";

import { usePageContext } from "../../hooks/contexts/usePageContext";

export const SEO: FC = () => {
  const { seo } = usePageContext();
  return <SEOUI {...seo} />;
};

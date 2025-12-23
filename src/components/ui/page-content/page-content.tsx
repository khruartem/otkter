import { FC } from "react";

// import { SEO } from "../../seo";
// import { ScrollToTop } from "../../scroll-to-top";

import { TPageContentUIProps } from "./types";

export const PageContentUI: FC<TPageContentUIProps> = ({ children }) => {
  return (
    <>
      {/* <SEO {...seo} /> */}
      {children}
    </>
  );
};

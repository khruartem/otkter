import { FC, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { TScrollToTopProps } from "./types";

export const ScrollToTop: FC<TScrollToTopProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return children || null;
};
